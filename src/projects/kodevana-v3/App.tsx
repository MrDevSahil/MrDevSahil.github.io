import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />

        {/*
          <Route path="/blog/:id" element={<IndividualBlogPost />} />
          <Route path="*" element={<NotFound />} />
        */}
      </Routes>
    </div>
  );
}

export default App;
