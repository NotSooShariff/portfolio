import Link from "next/link";
import ProjectCard from "./ui/ProjectCard";
import SectionTitle from "./ui/SectionTitle";

import { watchdogBanner, hogBanner, hwhqBanner } from "@/assets";
import { buttonVariants } from "./ui/Button";

const Projects = () => {
  return (
    <section className="view-container mt-24">
      <SectionTitle badges={["Security", "Development"]}>What I'm Working On</SectionTitle>
      <div className="space-y-8">
        <ProjectCard
          title="Hog C2"
          scope="Malware Development"
          description="A trojan malware executable proof-of-concept that leverages a Notion page via integrations as a C2 server, enabling remote control and persistence on infiltrated systems."
          image={hogBanner}
          imageAlt="Timeloom banner"
          sourceLink="https://github.com/NotSooShariff/hog-c2.git"
          liveLink="https://osh-web.notion.site/Hog-C2-a3c77c58b4484c13b48bb67c93383d69?pvs=74"
          technologies={[
            "Python",
            "PyQT",
            "Tkinter",
            "Notion API"
          ]}
        />
        <ProjectCard
          title="WatchDog"
          scope="Secrets Scanning Engine"
          description="An open-source secrets scanning engine with an add-on browser extension that allows you to scan for leaked secrets in real-time from pre-deployment to post-deployment."
          image={watchdogBanner}
          imageAlt="Ciphered banner"
          sourceLink="https://github.com/NotSooShariff/secrets-scanning-engine"
          technologies={[
            "Next.js + Electron",
            "TailwindCSS",
            "Rust",
            "Manifest V3",
          ]}
        />
        <ProjectCard
          title="HackerWatch HQ"
          scope="Web Development + Security"
          description="Unlinked hiring process fun and easier important information that a hiring manager actually need without wasting so much time."
          image={hwhqBanner}
          imageAlt="Unlinked banner"
          liveLink="https://www.behance.net/gallery/152416557/Website-for-hiring-developers-Hackathon-Winner"
          technologies={["UI Design", "UX Design", "Figma"]}
        />
      </div>
      <div className="mt-6 flex items-center gap-5">
        <div className="grow border-t-2 border-muted-1 border-dashed"></div>
        <Link
          href="https://github.com/NotSooShariff/?tab=repositories"
          className={buttonVariants({ variant: "outline", size: "default" })}
        >
          See all projects
        </Link>
      </div>
    </section>
  );
};

export default Projects;
