import "../assets/styles/rotateImage.css";

import { Triangle } from "../assets/images";

export default function rotatingTriangle() {
  return (
    <div className="h-fit w-fit">
      <img className="rotatingImage" src={Triangle} alt="Triangle graphic" />
    </div>
  );
}
