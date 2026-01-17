import { Hero, About } from "../components";

function Home() {
  return (
    <div className="snap-y min-h-[98vh]">
      <div className="h-screen snap-center">
        <Hero />
      </div>
      <div className="h-screen snap-center">
        <About />
      </div>
    </div>
  );
}

export default Home;
