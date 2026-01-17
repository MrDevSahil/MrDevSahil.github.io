import { useInView } from "react-intersection-observer";
import "../../styles/Animate.css";

const Content = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <>
      <div className="pb-7 xs:pb-9 sm:pb-14 md:pb-20 text-center">
        <div className="px-5 xs:px-7 sm:px-10 lg:px-24 xl:px-40 relative w-full text-center pb-7 mb-[106px] bg-slate-900">
          <h2 className="py-3 xs:py-5 sm:py-5 md:py-7 lg:py-7 xl:py-7 text-xl md:text-3xl xl:text-4xl font-bold text-slate-50">
            Projects done by <span className="text-yellow-400">Kode</span>Vana
          </h2>

          <nav className="mx-auto w-fit px-7 py-3 shadow-2xl rounded-lg bg-slate-950">
            <ul className="flex justify-center">
              <button className="px-1 xs:px-2 sm:px-3 md:px-5 lg:px-7 py-2 text-xs xs:text-sm md:text-base text-slate-300 hover:text-slate-50 rounded-md group">
                All
                <div className="mt-2 sm:mt-3 h-1 w-full bg-slate-300 opacity-0 group-hover:opacity-100 group-hover:bg-slate-50 rounded-full transition duration-500"></div>
              </button>
              <button className="px-1 xs:px-2 sm:px-3 md:px-5 lg:px-7 py-2 text-xs xs:text-sm md:text-base text-slate-300 hover:text-slate-50 rounded-md group">
                Website
                <div className="mt-2 sm:mt-3 h-1 w-full bg-slate-300 opacity-0 group-hover:opacity-100 group-hover:bg-slate-50 rounded-full transition duration-500"></div>
              </button>
              <button className="px-1 xs:px-2 sm:px-3 md:px-5 lg:px-7 py-2 text-xs xs:text-sm md:text-base text-slate-300 hover:text-slate-50 rounded-md group">
                Application
                <div className="mt-2 sm:mt-3 h-1 w-full bg-slate-300 opacity-0 group-hover:opacity-100 group-hover:bg-slate-50 rounded-full transition duration-500"></div>
              </button>
              <button className="px-1 xs:px-2 sm:px-3 md:px-5 lg:px-7 py-2 text-xs xs:text-sm md:text-base text-slate-300 hover:text-slate-50 rounded-md group">
                UI & UX
                <div className="mt-2 sm:mt-3 h-1 w-full bg-slate-300 opacity-0 group-hover:opacity-100 group-hover:bg-slate-50 rounded-full transition duration-500"></div>
              </button>
            </ul>
          </nav>
        </div>
        <div>
          <div>
            <div className="px-40 text-center pb-7 xs:pb-9 sm:pb-14 md:pb-20 ">
              <div className="grid grid-cols-5 gap-10">
                <div
                  ref={ref}
                  className={`animated-div-1 ${
                    inView ? "slide-in" : ""
                  } col-span-2`}
                ></div>
                <div className=" text-black">
                  <h3 className="py-5 text-lg md:text-xl xl:text-2xl font-semibold">Coming soon</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
