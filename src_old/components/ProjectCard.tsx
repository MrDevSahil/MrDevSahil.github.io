import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import { useNavigate } from "react-router-dom";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();
  const { name, url, desc, status, contributors } = project;

  return (
    <div
      onClick={() => navigate(project.route)}
      className="p-4 flex flex-col bg-gray-200 dark:bg-gray-800 gap-2 w-full rounded-xl"
    >
      <div className="mb-6 h-full flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h4 className="text-lg font-semibold">{name}</h4>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1.5 w-fit items-center"
          >
            <LaunchRoundedIcon fontSize="small" className="text-gray-500" />
            <p className="text-gray-500 text-sm break-all">{url}</p>
          </a>
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-300">{desc}</p>
      </div>

      {/* Completion */}
      <div className="flex justify-between items-center text-sm">
        <p>Completion:</p>
        <p className="text-right">{status}%</p>
      </div>

      <div className="flex w-full h-2 rounded-full overflow-hidden">
        <span className="bg-primary" style={{ width: `${status}%` }} />
        <span
          className="bg-black dark:bg-gray-600"
          style={{ width: `${100 - status}%` }}
        />
      </div>

      {/* Contributors */}
      <div className="flex justify-between items-center text-sm mt-2">
        <p>Contributors:</p>

        <div className="flex gap-2">
          {contributors.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="@"
              className="h-6 w-6 rounded-full object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
