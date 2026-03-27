/* ================================================================
   src/lib/data.ts
   Single source of truth for all portfolio content.
   Edit this file to update projects, blog, contact — never touch UI.
   ================================================================ */

// ── Types ─────────────────────────────────────────────────────────

export type ProjectStatus = "live" | "wip" | "exploring" | "archived";
export type ProjectType = "link" | "subapp";

export interface Project {
  slug: string;
  name: string;
  description: string;
  status: ProjectStatus;
  type: ProjectType;
  tags: string[];
  href?: string;
  playStore?: string;
  github?: string;
}

export interface BlogPost {
  slug: string;
  date: string;
  title: string;
  draft: boolean;
}

export interface ContactEntry {
  key: string;
  value: string;
  href?: string;
  color: "accent" | "amber" | "text" | "muted";
}

export interface NarrativeLine {
  text: string;
  big: boolean;
  color: string;
  bold?: boolean;
  italic?: boolean;
}

// ── Projects ──────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: "bpf",
    name: "BPF",
    description: "Live Android app on the Google Play Store.",
    status: "live",
    type: "link",
    tags: ["android", "kotlin", "play store"],
    playStore: "https://play.google.com/store/apps/details?id=com.kodevana.bpf",
    github: "",
  },
  {
    slug: "super-app",
    name: "super-app",
    description:
      "Performance-first super app for the Indian market — food delivery, ride-hailing, e-commerce and payments in one shell. C++ core, Kotlin shell. Speed above all.",
    status: "wip",
    type: "subapp",
    tags: ["android", "kotlin", "c++", "ndk"],
    github: "",
  },
  {
    slug: "edtech-crm",
    name: "edtech-crm",
    description:
      "School-focused CRM for Indian institutions. Designed around the operational reality of small-to-mid schools.",
    status: "exploring",
    type: "subapp",
    tags: ["edtech", "india", "crm"],
  },
  {
    slug: "ai-student-companion",
    name: "ai-student-companion",
    description:
      "AI companion trained on NCERT/CBSE/ICSE curricula. Contextual doubt-solving for Indian board students.",
    status: "exploring",
    type: "subapp",
    tags: ["edtech", "ai", "ncert", "cbse"],
  },
];

// ── Blog ──────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    slug: "speed-above-all",
    date: "2025-01-01",
    title: "Speed above all — why I built a C++ core for an Android app",
    draft: true,
  },
  {
    slug: "triple-boot-efi",
    date: "2025-01-01",
    title: "Surviving a triple-boot EFI nightmare (Windows + Ubuntu + Arch)",
    draft: true,
  },
];

// ── Contact ───────────────────────────────────────────────────────

export const contactEntries: ContactEntry[] = [
  {
    key: "email",
    value: "mrdevsahil@gmail.com",
    href: "mailto:mrdevsahil+hello@gmail.com?subject=Project%20Idea&body=Hey%20Sahil%2C%20let's%20build%20something%20awesome.",
    color: "amber",
  },
  {
    key: "github",
    value: "@mrdevsahil",
    href: "https://github.com/mrdevsahil",
    color: "amber",
  },
  {
    key: "play store",
    value: "@sahil",
    href: "https://play.google.com/store/apps/dev?id=9201841594037995212",
    color: "amber",
  },
  { key: "location", value: "Guwahati, Assam, India", color: "text" },
  {
    key: "status",
    value: "open to interesting conversations",
    color: "accent",
  },
];

// ── Wow mode data ─────────────────────────────────────────────────

export const tickerText =
  "KOTLIN · C++ · ANDROID NDK · GUWAHATI · SPEED ABOVE ALL · PLAY STORE · SYSTEMS THINKING · ";

export const originLines: NarrativeLine[] = [
  { text: "He started with Android.", big: true, color: "#557055" },
  {
    text: "Standard stack. Kotlin. Jetpack Compose.",
    big: false,
    color: "#3a5a3a",
  },
  { text: "Standard wasn't enough.", big: false, color: "#3a5a3a" },
  { text: "He went deeper.", big: true, color: "#7a9a7a" },
  {
    text: "Past the JVM. Past the framework. Into C++.",
    big: false,
    color: "#3a5a3a",
  },
  { text: "Into the metal.", big: false, color: "#4a7a4a", italic: true },
  { text: "Now he's building for a billion.", big: true, color: "#c8e8c8" },
  { text: "Speed above all.", big: false, color: "#7fff7f", bold: true },
];
