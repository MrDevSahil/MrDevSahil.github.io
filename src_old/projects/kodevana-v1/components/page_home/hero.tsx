import { Homeimg1 } from "../../assets";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <div className="mb-7 xs:mb-9 sm:mb-0 h-fit pb-7 xs:pb-9 sm:pb-14 md:pb-20 bg-slate-900 overflow-hidden">
      <div className="md:grid md:grid-cols-2 gap-0 text-center text-slate-50">

        {/* Right Div */}
        <div className="h-fit px-10 xs:px-20 sm:px-48 md:px-0 order-1 md:order-2">
          <img
            className=""
            src={Homeimg1}
            alt="Tech Graphics Image"
          />
        </div>

        {/* Left Div */}
        <div className="mt-3 pb-5 xs:pb-7 sm:pb-0 px-3 xs:px-5 sm:px-10 xl:pl-24 md:pr-0 relative text-center order-2 md:order-1">
          <p className="text-xl sm:text-2xl lg:text-5xl font-bold leading-6 lg:leading-tight text-yellow-400">
            Empowering Your Digital Transformation with KodeVana
          </p>
          <p className="my-2 md:my-4 lg:my-7 xl:my-10 text-lg sm:text-xl lg:text-2xl font-semibold">
            Our team of expert developers and designers work tirelessly to create software solutions that are not only functional and effective, but beautiful and user-friendly as well.
          </p>
          <NavLink to="contact" >
            <button className="px-2 xs:px-3 md:px-4 lg:px-5 xl:px-7 py-1 md:py-2 xl:py-3 text-sm xs:text-base md:text-xl text-black rounded-md font-medium hover:text-white hover:font-bold bg-yellow-400 hover:shadow-2xl transition duration-200 ease-in-out hover:bg-slate-500">
              Let&#39;s talk!
            </button>
          </NavLink>

        </div>
      </div>
    </div>
  );
}

export default Hero;
