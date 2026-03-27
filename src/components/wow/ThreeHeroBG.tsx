import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function ThreeHeroBG() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse     = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;

    // ── Renderer ──────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, W / H, 0.1, 200);
    camera.position.z = 36;

    // ── Star field ────────────────────────────────────────────────
    const starGeo = new THREE.BufferGeometry();
    const N       = 2000;
    const pos     = new Float32Array(N * 3);
    for (let i = 0; i < N * 3; i++) pos[i] = (Math.random() - 0.5) * 160;
    starGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0x7fff7f, size: 0.13, transparent: true, opacity: 0.55 });
    const stars   = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // ── Icosahedron ───────────────────────────────────────────────
    const ico = new THREE.Mesh(
      new THREE.IcosahedronGeometry(11, 1),
      new THREE.MeshBasicMaterial({ color: 0x0d2a0d, wireframe: true })
    );
    scene.add(ico);

    // ── Octahedron ────────────────────────────────────────────────
    const oct = new THREE.Mesh(
      new THREE.OctahedronGeometry(5, 0),
      new THREE.MeshBasicMaterial({ color: 0x04180a, wireframe: true })
    );
    oct.position.set(20, -10, -12);
    scene.add(oct);

    // ── Torus ring ────────────────────────────────────────────────
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(15, 0.04, 2, 80),
      new THREE.MeshBasicMaterial({ color: 0x0a2a0a })
    );
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    // ── Mouse tracking ────────────────────────────────────────────
    const onMouse = (e: MouseEvent) => {
      mouse.current = {
        x:  (e.clientX / innerWidth  - 0.5) * 2,
        y: -(e.clientY / innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener("mousemove", onMouse);

    // ── Render loop ───────────────────────────────────────────────
    let t = 0, raf: number;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      t += 0.004;
      const { x, y } = mouse.current;
      ico.rotation.y   = t * 0.35 + x * 0.08;
      ico.rotation.x   = t * 0.18 + y * 0.04;
      oct.rotation.y   = -t * 0.5;
      oct.rotation.z   = t * 0.25;
      ring.rotation.z  = t * 0.15;
      stars.rotation.y = t * 0.04 + x * 0.015;
      stars.rotation.x = t * 0.02 + y * 0.01;
      renderer.render(scene, camera);
    };
    tick();

    // ── Resize ────────────────────────────────────────────────────
    const onResize = () => {
      const W2 = canvas.offsetWidth, H2 = canvas.offsetHeight;
      camera.aspect = W2 / H2;
      camera.updateProjectionMatrix();
      renderer.setSize(W2, H2);
    };
    window.addEventListener("resize", onResize);

    // ── Cleanup ───────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      starGeo.dispose();
      starMat.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
    />
  );
}
