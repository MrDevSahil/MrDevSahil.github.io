import {
  Navbar,
  Hero,
  Services,
  WhyUs,
  Project,
  Blogs,
  Footer,
} from "../components";

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Project />
      <Blogs />
      <Footer />
    </div>
  );
}

export default Home;
