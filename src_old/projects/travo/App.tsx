import { Route, Routes } from "react-router-dom";
// import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Home,
  // About,
  // Blogs,
  // Tours,
  // Destinations,
  // Contact,
  // Tour,
  // Login,
  // Register,
  // Payment,
  NotFound,
  // AddPlace,
} from "./pages";

// import {
// GetPlace,
// SinglePlace,
// Profile,
// PrivateComponents
// } from "./components";

// const isAuthenticated = () => {
//   const token = localStorage.getItem("token");
//   return !!token;
// };

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  //
  // useEffect(() => {
  //   setLoggedIn(isAuthenticated());
  // }, []);

  return (
    <>
      <ToastContainer />
      <Routes>
        {/* public routes */}
        <Route index element={<Home />} />

        {/*
        <Route path="/projects/travo/about" element={<About />} />
        <Route path="/projects/travo/places" element={<GetPlace />} />
        <Route path="/projects/travo/blogs" element={<Blogs />} />
        <Route path="/projects/travo/tours" element={<Tours />} />
        <Route path="/projects/travo/destinations" element={<Destinations />} />
        <Route path="/projects/travo/contact" element={<Contact />} />
        <Route path="/projects/travo/tour/:id" element={<Tour />} />
        */}

        {/* Render these routes if logged in
        {loggedIn ? (
          <>
            <Route path="/projects/travo/me" element={<Profile />} />
            <Route path="/projects/travo/payment/:id" element={<Payment />} />
            <Route path="/projects/travo/add-new-place" element={<AddPlace />} />
            <Route path="/projects/travo/places/:id" element={<SinglePlace />} />
          </>
        ) : (
          <Route path="/projects/travo/me" element={<Navigate to="/" />} />
        )}
        */}

        {/* Login and Register routes
        <Route
          path="/projects/travo/login"
          element={loggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/projects/travo/register"
          element={loggedIn ? <Navigate to="/" /> : <Register />}
        />

        */}
        <Route path="/projects/travo/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
