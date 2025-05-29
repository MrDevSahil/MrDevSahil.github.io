import { Hero, About } from "../components";

function HomePage() {
  return (
    <div className="snap-y">
      <div className="h-screen snap-center">
        <Hero />
      </div>
      <div className="h-screen snap-center">
        <About />
      </div>
    </div>
  );
}

export default HomePage;
