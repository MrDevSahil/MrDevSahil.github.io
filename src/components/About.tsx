import Call from "@mui/icons-material/Call";
import Email from "@mui/icons-material/Email";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import { Profile } from "../assets";

function About() {
  return (
    <div className="flex flex-col gap-14 h-screen w-screen justify-center content-center items-center">
      <div className="flex gap-16 px-40">
        <div className="w-full text-center justify-center content-center bg-primary">
          <h2 className="text-7xl font-black text-white -translate-y-2.5">
            About Me
          </h2>
          <div className="w-full">
            <img
              src={Profile}
              alt="GIF"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-5xl font-black">Hello!</h2>
          <p className="text-wrap">
            I’m a passionate full-stack software developer specializing in web
            and mobile app development using{" "}
            <b>Flutter, React Native, Node.js, MongoDB, and cloud platforms</b>.
            I have hands-on experience taking products from concept to
            production, with a strong focus on scalability, security, and
            performance.
          </p>
          <p className="text-wrap">
            Previously, I worked as{" "}
            <b>
              Lead Software Developer at Recycle Bazzar (Saha Recycle Bazzar Pvt
              Ltd)
            </b>
            , where I led the tech team and built a complete scrap collection
            and waste management ecosystem. This included consumer and collector
            Flutter apps with live tracking, navigation, and wallet-based
            payments, along with a centralized Node.js backend, Next.js admin
            panel, and cloud-hosted infrastructure using <b>Firebase and GCP</b>
            .
          </p>
          <p className="text-wrap">
            I’ve also developed production-ready applications such as{" "}
            <b>Chatly</b>, an AI-powered communication platform, and the{" "}
            <b>official Android app for the Bodoland People’s Front (BPF)</b>. I
            enjoy solving real-world problems through technology and building
            reliable, user-centric software systems.
          </p>
        </div>
      </div>
      <div className="w-full pl-40 grid grid-cols-3">
        <div className="flex flex-col gap-3">
          <h2 className="text-5xl font-black">Contact</h2>
          <div className="flex flex-col gap-3">
            <span className="flex gap-1">
              <Call />
              <a
                className="hover:text-primary hover:translate-x-1 transition-all duration-300"
                href="tel:+91 7002436557"
              >
                +91 7002436557
              </a>
            </span>
            <span className="flex gap-1">
              <Email />
              <a
                className="hover:text-primary hover:translate-x-1 transition-all duration-300"
                href="mailto:mrdevsahil@gmail.com"
              >
                mrdevsahil@gmail.com
              </a>
            </span>
            <span className="flex gap-1">
              <LinkedIn />
              <a
                className="hover:text-primary hover:translate-x-1 transition-all duration-300"
                href="https://linkedin.com/in/sahilsway360"
              >
                Sahil
              </a>
            </span>
            <span className="flex gap-1">
              <GitHub />
              <a
                className="hover:text-primary hover:translate-x-1 transition-all duration-300"
                href="https://github.com/MrDevSahil"
              >
                MrDevSahil
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-5xl font-black">Education</h2>
          <div className="flex flex-col gap-2">
            <p>Bachelor of Computer Application</p>
            <p>CGPA: 7.65</p>
            <p>2020 - 2023</p>
            <p>Rangia College, Rangia</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-5xl font-black">Languages</h2>
          <div className="w-80 flex flex-col gap-3">
            <div className="flex flex-col gap-1 w-full">
              <p>English</p>
              <div className="flex w-full">
                <span className="h-4 w-[95%] bg-primary" />
                <span className="h-4 w-[05%] bg-black" />
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
                <span className="h-4 w-[80%] bg-primary" />
                <span className="h-4 w-[20%] bg-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
