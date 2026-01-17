import { useSearchParams } from "react-router-dom";
import { SlideButton, ProjectCard } from "../components";
import { PROJECTS } from "../data/projects";
import type { ProjectType } from "../data/projects";

const Projects = () => {
  const [params] = useSearchParams();
  const type = params.get("type") as ProjectType | null;

  const filteredProjects = type
    ? PROJECTS.filter((project) => project.type === type)
    : PROJECTS;

  return (
    <div className="px-40 py-10 min-h-[98vh]">
      <div className="flex justify-center mb-10">
        <SlideButton />
      </div>

      <h1 className="text-5xl font-black capitalize mb-10">
        {type ?? "All"} Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
