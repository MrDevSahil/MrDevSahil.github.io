// import { useInView } from "react-intersection-observer";
import "../../styles/Animate.css";

function Projects() {
  // const [ref, inView] = useInView({
  //   threshold: 0,
  // });

  return (
    <div className="mx-5 xs:mx-7 sm:mx-10 lg:mx-24 xl:mx-40 pb-7 xs:pb-9 sm:pb-14 md:pb-20 text-center">
      <h2 className="pb-3 xs:pb-5 sm:pb-7 md:pb-10 lg:pb-10 xl:pb-10 text-xl md:text-3xl xl:text-4xl font-bold">
        Recent Projects
      </h2>
      <div className="flex flex-wrap gap-5 xs:gap-6 sm:gap-7 md:gap-10 lg:gap-14 xl:gap-20 justify-center">
        <h4>Coming soon</h4>
        {/*
        <div>
          <div className="flex flex-wrap gap-5 xs:gap-6 sm:gap-7 md:gap-10 lg:gap-14 xl:gap-20 justify-center">
            <div
              ref={ref}
              className={`animated-div-1 ${
                inView ? "slide-in" : ""
              } relative w-full xs:w-full sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 cursor-pointer group `}
            >
              <h1
                className={`mx-3 xs:mx-3 sm:mx-3 md:mx-5 lg:mx-5 xl:mx-7 text-lg md:text-xl xl:text-2xl font-semibold absolute top-3 xs:top-5 sm:top-5 md:top-7 lg:top-7 xl:top-10 text-black`}
              >
                Project Title
              </h1>

              <img
                src={""}
                alt="Project thumbnail"
                className="h-full w-full transition duration-300 hover:opacity-30"
              />
            </div>
          </div>
        </div>
    */}
      </div>
    </div>
  );
}

export default Projects;
