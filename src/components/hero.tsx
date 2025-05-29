import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Hero = () => {
  return (
    <div className="flex flex-col gap-8 px-40 w-screen h-screen justify-center content-center items-center">
      <div className="flex justify-center content-center items-center">
        <h4 className="h-fit w-fit text-4xl font-bold -rotate-90">2025</h4>
        <h1 className="h-fit w-fit text-9xl font-extrabold text-primary font-hero">
          Sahil Swargiary
        </h1>
      </div>

      <div className="flex h-fit gap-7 justify-center">
        <div className="pl-1 flex items-center border-2 border-black hover:border-primary rounded-md hover:-translate-y-2 transition-transform duration-300 group">
          <p className="text-2xl group-hover:text-primary">App Dev</p>
          <div className="group-hover:text-primary">
            <ArrowOutwardIcon />
          </div>
        </div>
        <div className="pl-1 flex items-center border-2 border-black hover:border-primary rounded-md hover:-translate-y-2 transition-transform duration-300 group">
          <p className="text-2xl group-hover:text-primary">Web Dev</p>
          <div className="group-hover:text-primary">
            <ArrowOutwardIcon />
          </div>
        </div>
        <div className="pl-1 flex items-center border-2 border-black hover:border-primary rounded-md hover:-translate-y-2 transition-transform duration-300 group">
          <p className="text-2xl group-hover:text-primary">AI Projects</p>
          <div className="group-hover:text-primary">
            <ArrowOutwardIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
