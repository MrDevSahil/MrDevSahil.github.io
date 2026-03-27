import {
  // AboutHero,
  AboutTeam,
  AboutProcess,
} from "../components";

function About() {
  return (
    <div className="dark:text-white dark:bg-black">
      <AboutTeam />
      <AboutProcess />
    </div>
  );
}

export default About;
