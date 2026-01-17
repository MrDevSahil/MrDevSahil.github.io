import { Navbar, Hero, Services } from "../components";
import "../assets/styles/serviceAnimation.css";

function Home() {
  const handleWheel = (event: any) => {
    // Prevent vertical scrolling
    event.preventDefault();

    // Scroll horizontally
    const container = event.currentTarget;
    container.scrollLeft += event.deltaY;
  };

  return (
    <div
      onWheel={handleWheel}
      className="h-screen overflow-x-scroll overflow-y-hidden scrollba-hide whitespace-nowrap"
    >
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}

export default Home;
