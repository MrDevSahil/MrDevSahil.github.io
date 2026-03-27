import { DemoProfile } from "../assets";
export type ProjectType = "web" | "app" | "ai" | "gist";

export interface Project {
  id: string;
  name: string;
  type: ProjectType;
  route: string;
  url: string;
  desc: string;
  status: number;
  contributors: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    name: "KodeVana V1 - (Client)",
    type: "web",
    route: "/projects/kodevana-v1",
    url: "#",
    desc: "Freelancing agency",
    status: 80,
    contributors: [DemoProfile, DemoProfile],
  },
  {
    id: "2",
    name: "KodeVana V2 - (Client2)",
    type: "web",
    route: "/projects/kodevana-v2",
    url: "#",
    desc: "Freelancing agency",
    status: 80,
    contributors: [DemoProfile, DemoProfile],
  },
  {
    id: "3",
    name: "KodeVana V3 - (Client2 Dropped)",
    type: "web",
    route: "/projects/kodevana-v3",
    url: "#",
    desc: "Freelancing agency",
    status: 80,
    contributors: [DemoProfile, DemoProfile],
  },
  {
    id: "4",
    name: "Travo",
    type: "web",
    route: "/projects/travo",
    url: "#",
    desc: "Traveling agency",
    status: 60,
    contributors: [DemoProfile, DemoProfile],
  },
  {
    id: "5",
    name: "RedStone",
    type: "web",
    route: "/projects/redstone",
    url: "#",
    desc: "E-commerce",
    status: 50,
    contributors: [DemoProfile, DemoProfile],
  },
  {
    id: "6",
    name: "BPF",
    type: "app",
    route: "/projects/bpfapp",
    url: "https://play.google.com/store/apps/details?id=com.kodevana.bpf",
    desc: "BPF application",
    status: 80,
    contributors: [DemoProfile, DemoProfile],
  },
  {
    id: "7",
    name: "Chatly",
    type: "ai",
    route: "/projects/chatly",
    url: "#",
    desc: "AI powered community chating application",
    status: 80,
    contributors: [DemoProfile, DemoProfile],
  },
  {
    id: "8",
    name: "Learnly — Ongoing",
    type: "app",
    route: "/projects/learnly",
    url: "#",
    desc: "AI powered student companion mobile application",
    status: 0,
    contributors: [DemoProfile, DemoProfile],
  },
  {
    id: "9",
    name: "Hero Section (Client2)",
    type: "gist",
    route: "/projects/hero1",
    url: "#",
    desc: "Hero section",
    status: 95,
    contributors: [DemoProfile, DemoProfile],
  },
  {
    id: "10",
    name: "Hero Section (Client Dropped)",
    type: "gist",
    route: "/projects/hero2",
    url: "#",
    desc: "Hero section",
    status: 95,
    contributors: [DemoProfile, DemoProfile],
  },
  {
    id: "11",
    name: "Vertical Slide List View",
    type: "gist",
    route: "/projects/gist1",
    url: "#",
    desc: "Hover slider view",
    status: 95,
    contributors: [DemoProfile, DemoProfile],
  },
  {
    id: "12",
    name: "Rotating Eclipse",
    type: "gist",
    route: "/projects/gist2",
    url: "#",
    desc: "Rotating eclipse like a solar system",
    status: 95,
    contributors: [DemoProfile, DemoProfile],
  },
  {
    id: "13",
    name: "Sliding Cards",
    type: "gist",
    route: "/projects/gist3",
    url: "#",
    desc: "Infinit auto sliding cards",
    status: 95,
    contributors: [DemoProfile, DemoProfile],
  },
];
