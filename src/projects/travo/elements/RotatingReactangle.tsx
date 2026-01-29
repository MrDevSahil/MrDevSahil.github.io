import "../assets/styles/rotateImage.css";

import { Reactangle } from "../assets/images";

export default function RotatingReactangle() {
  return (
    <div className="h-fit w-fit">
      <img
        className="rotatingImage"
        src={Reactangle}
        alt="Reactangle graphic"
      />
    </div>
  );
}
