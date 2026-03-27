import { useNavigate } from "react-router-dom";
import { ToggleTheme, ProjectCOA } from "../components";

const Hero = () => {
  const navigate = useNavigate();

  const goToProjects = (type: "web" | "app" | "ai") => {
    navigate(`/projects?type=${type}`);
  };

  return (
    <div className="flex flex-col gap-8 px-40 w-screen h-screen justify-center items-center">
      <div className="absolute top-6 right-6 hidden md:block">
        <ToggleTheme />
      </div>

      <div className="flex items-center">
        <h4 className="text-4xl font-bold -rotate-90">2026</h4>
        <h1 className="text-9xl font-extrabold text-primary font-hero">
          Sahil Swargiary
        </h1>
      </div>

      <div className="flex gap-7">
        <ProjectCOA label="App Dev" type="app" onClick={goToProjects} />
        <ProjectCOA label="Web Dev" type="web" onClick={goToProjects} />
        <ProjectCOA label="AI Projects" type="ai" onClick={goToProjects} />
      </div>
    </div>
  );
};

export default Hero;
