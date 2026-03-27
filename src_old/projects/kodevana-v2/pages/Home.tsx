import { 
  HomeHero,
  HomeWorks,
  HomeServices,
  HomeAbout,
  HomeContact,
} from "../components";

function Home() {
  return (
    <div className="font-Jost dark:text-white dark:bg-black">
      <HomeHero />
      <HomeWorks />
      <HomeServices />
      <HomeAbout />
      <HomeContact />
    </div>
  );
}

export default Home;
