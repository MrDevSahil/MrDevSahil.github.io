import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="text-black dark:text-white bg-white dark:bg-slate-950 min-h-screen">
              <h1>Hello This is Sahil</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
