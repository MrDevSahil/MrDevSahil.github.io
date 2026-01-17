import { useSearchParams } from "react-router-dom";
import clsx from "clsx";

const TYPES = ["all", "web", "app", "ai", "gist"] as const;

const SLIDE_INDEX: Record<(typeof TYPES)[number], number> = {
  all: 0,
  web: 1,
  app: 2,
  ai: 3,
  gist: 4,
};

function SlideButton() {
  const [params, setParams] = useSearchParams();
  const active = (params.get("type") ?? "all") as (typeof TYPES)[number];

  const setType = (type: (typeof TYPES)[number]) => {
    if (type === "all") {
      setParams({}, { replace: true });
    } else {
      setParams({ type }, { replace: true });
    }
  };

  return (
    <div className="relative flex p-1 border-4 border-blue-950 bg-gray-300 dark:bg-gray-800 rounded-full w-fit">
      <div
        className="absolute top-1 left-1 h-14 w-28 rounded-full bg-primary transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(${SLIDE_INDEX[active] * 7}rem)`,
        }}
      />

      {/* Buttons */}
      {TYPES.map((type) => (
        <button
          key={type}
          onClick={() => setType(type)}
          className={clsx(
            "relative z-10 w-28 h-14 rounded-full capitalize",
            "flex items-center justify-center font-semibold",
            "transition-colors duration-300 cursor-pointer",
            active === type
              ? "text-white"
              : "text-black dark:text-white hover:text-primary",
          )}
        >
          {type}
        </button>
      ))}
    </div>
  );
}

export default SlideButton;
