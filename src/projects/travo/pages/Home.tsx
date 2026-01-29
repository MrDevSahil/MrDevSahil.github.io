import {
  Navbar,
  Hero,
  PopularDestinations,
  PopularTours,
  Footer,
} from "../components";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularDestinations />
      <PopularTours />
      <Footer />
    </div>
  );
}

export default Home;
