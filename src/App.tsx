// import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Projects } from "./pages";

function App() {
  // useEffect(() => {
  //   const colorMode = JSON.parse(window.localStorage.getItem("color-theme"));
  //
  //   const className = "dark";
  //
  //   const bodyClass = window.document.body.classList;
  //
  //   colorMode === "dark"
  //     ? bodyClass.add(className)
  //     : bodyClass.remove(className);
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />

        {/*
        <Route path="/auth/login" element={<Login />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Messages />} />

          <Route path="ai" element={<AiPage />} />
        </Route>
      */}
      </Routes>
    </Router>
  );
}

export default App;
