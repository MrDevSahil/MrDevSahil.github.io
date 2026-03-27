import "../assets/styles/rotateImage.css";

import { Sphere } from "../assets/images";

export default function RotatingSphere() {
  return (
    <div className="h-fit w-fit">
      <img className="rotatingImage" src={Sphere} alt="Sphere graphic" />
    </div>
  );
}
