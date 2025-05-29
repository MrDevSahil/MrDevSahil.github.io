import Call from "@mui/icons-material/Call";
import Email from "@mui/icons-material/Email";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";

function About() {
  return (
    <div className="flex flex-col gap-14 h-screen w-screen justify-center content-center items-center">
      <div className="flex gap-16 px-40">
        <div className="w-full text-center justify-center content-center bg-primary">
          <h2 className="text-7xl font-black text-white -translate-y-3">
            About Me
          </h2>
          <div className="h-96 w-96"></div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-5xl font-black">Hello!</h2>
          <p className="text-wrap">
            I'm a passionate and detail-oriented software developer with a
            strong background in building full-stack applications, primarily
            focused on mobile app development using React Native, Node.js, and
            MongoDB. Over the years, I’ve taken several projects from concept to
            production, including Chatly—an AI-powered communication app with
            image cartoonization, video calling, and expert consulting
            features—and the official Android app for the BPF (Bodoland People’s
            Front) party, which incorporates multi-level user roles, secure
            video conferencing, media publishing, and donation support. I enjoy
            designing scalable backend systems, crafting responsive user
            interfaces, and solving real-world problems with technology. My
            development approach is user-centric, with a strong emphasis on
            functionality, security, and performance.
          </p>
          <p className="text-wrap">
            In addition to my technical skills, I value collaboration,
            continuous learning, and creative problem-solving. I’m comfortable
            working across different layers of the tech stack and take
            initiative in both team environments and solo projects. I'm
            currently focused on deepening my expertise in AI integration,
            system architecture, and scalable cloud services while contributing
            to impactful projects that make a difference.
          </p>
        </div>
      </div>
      <div className="w-full pl-40 grid grid-cols-3">
        <div className="flex flex-col gap-3">
          <h2 className="text-5xl font-black">Contact</h2>
          <div className="flex flex-col gap-3">
            <span className="flex gap-1">
              <Call />
              <p>+91 9678532346</p>
            </span>
            <span className="flex gap-1">
              <Email />
              <a
                className="hover:text-primary hover:translate-x-1 transition-all duration-300"
                href="mailto:sahilswargiary.personal@gmail.com"
              >
                sahilswargiary.personal@gmail.com
              </a>
            </span>
            <span className="flex gap-1">
              <LinkedIn />
              <a
                className="hover:text-primary hover:translate-x-1 transition-all duration-300"
                href="https://linkedin.com/in/sahilsway360"
              >
                Sahilsway
              </a>
            </span>
            <span className="flex gap-1">
              <GitHub />
              <a
                className="hover:text-primary hover:translate-x-1 transition-all duration-300"
                href="https://github.com/Sahilsway"
              >
                Sahilsway
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-5xl font-black">Education</h2>
          <div className="flex flex-col gap-2">
            <p>Bachelor of Computer Application</p>
            <p>2020 - 2023</p>
            <p>Rangia College</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-5xl font-black">Languages</h2>
          <div className="w-80 flex flex-col gap-3">
            <div className="flex flex-col gap-1 w-full">
              <p>English</p>
              <div className="flex w-full">
                <span className="h-4 w-[90%] bg-primary" />
                <span className="h-4 w-[10%] bg-black" />
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p>Hindi</p>
              <div className="flex w-full">
                <span className="h-4 w-[85%] bg-primary" />
                <span className="h-4 w-[15%] bg-black" />
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p>Bodo</p>
              <div className="flex w-full">
                <span className="h-4 w-[99%] bg-primary" />
                <span className="h-4 w-[1%] bg-black" />
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p>Assamease</p>
              <div className="flex w-full">
                <span className="h-4 w-[70%] bg-primary" />
                <span className="h-4 w-[30%] bg-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
