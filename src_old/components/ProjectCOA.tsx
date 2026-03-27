import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

type ProjectType = "web" | "app" | "ai";

const ProjectCOA = ({
  label,
  type,
  onClick,
}: {
  label: string;
  type: ProjectType;
  onClick: (type: ProjectType) => void;
}) => {
  return (
    <div
      onClick={() => onClick(type)}
      className="pl-1 flex items-center border-2 border-black dark:border-white hover:border-primary rounded-md hover:-translate-y-1 transition-transform duration-300 group cursor-pointer"
    >
      <p className="text-2xl group-hover:text-primary">{label}</p>
      <div className="group-hover:text-primary">
        <ArrowOutwardIcon />
      </div>
    </div>
  );
};

export default ProjectCOA;
