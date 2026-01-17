import { Route, Routes } from "react-router-dom";
import { Home, Projects } from "./pages";
import { KodeVanaV1 } from "./projects";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />

      {/* KodeVana Version 1.0.0 */}
      <Route path="/projects/kodevana-v1/*" element={<KodeVanaV1 />} />
    </Routes>
  );
}
