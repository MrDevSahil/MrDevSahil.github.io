import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, About } from "./pages";
import { Navbar, PhoneNavbar } from "./components";

function App() {
  const [phoneScreen, setPhoneScreen] = useState(window.innerWidth <= 768);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = window.scrollY;
    };

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setPhoneScreen(true);
      } else {
        setPhoneScreen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="app bg-white dark:bg-black">
      <div
        className={`fixed top-0 w-full z-10 transform transition-transform duration-300 ${
          scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {phoneScreen ? <PhoneNavbar /> : <Navbar />}
      </div>
      <div className="pt-[5rem]">
        <Routes>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
