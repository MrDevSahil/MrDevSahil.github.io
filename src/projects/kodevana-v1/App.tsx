import { Routes, Route } from "react-router-dom";
import {
  Home,
  Blog,
  Project,
  About,
  Contact,
  NotFound
} from "./pages";

export default function KodeVanaV1() {
  return (
    <div className="min-h-screen">
      {/* Project-only navbar */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="project" element={<Project />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        {/*
        <Route path="blog/:id" element={<IndividualBlogPost />} />
        */}
      </Routes>
    </div>
  );
}
