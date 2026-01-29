import { Route, Routes } from "react-router-dom";
import { Home, Projects } from "./pages";
import {
  KodeVanaV1,
  KodeVanaV2,
  // KodeVanaV3,
  Travo,
} from "./projects";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />

      {/* KodeVana Version 1.0.0 */}
      <Route path="/projects/kodevana-v1/*" element={<KodeVanaV1 />} />

      {/* KodeVana Version 2.0.0 */}
      <Route path="/projects/kodevana-v2/*" element={<KodeVanaV2 />} />

      {/* KodeVana Version 3.0.0
      <Route path="/projects/kodevana-v3/*" element={<KodeVanaV3 />} />
      */}

      {/* Travo */}
      <Route path="/projects/travo/*" element={<Travo />} />
    </Routes>
  );
}
