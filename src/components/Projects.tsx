import Link from "next/link";
import ProjectCard from "./ui/ProjectCard";
import SectionTitle from "./ui/SectionTitle";

import { watchdogBanner, hogBanner } from "@/assets";
import { buttonVariants } from "./ui/Button";

const Projects = () => {
  return (
    <section id="projects" className="view-container mt-24">
      <SectionTitle badges={["Security", "Research"]}>Key Projects</SectionTitle>
      <div className="space-y-8">
        <ProjectCard
          title="Hog C2"
          scope="Threat Research · MITRE ATT&CK T1071.001"
          description="Vulnerability research demonstrating the Living Off Trusted Sites (LOTS) technique: exfiltrating data from fully patched Windows 11 systems with enterprise DLP protection active. Includes a CASB detection module using behavioral analytics to identify anomalous API patterns."
          image={hogBanner}
          imageAlt="Hog C2 banner"
          sourceLink="https://github.com/NotSooShariff/hog-c2.git"
          liveLink="https://osh-web.notion.site/Hog-C2-a3c77c58b4484c13b48bb67c93383d69?pvs=74"
          technologies={["Python", "PyQT", "Notion API", "MITRE ATT&CK"]}
        />
        <ProjectCard
          title="WatchDog"
          scope="Secrets Scanner · MITRE ATT&CK T1552"
          description="High-performance secrets scanner built in Rust achieving 500+ MB/s throughput to detect exposed credentials across codebases and cloud infrastructure. Includes a browser extension for real-time pre/post-deployment scanning."
          image={watchdogBanner}
          imageAlt="WatchDog banner"
          sourceLink="https://github.com/NotSooShariff/secrets-scanning-engine"
          technologies={["Rust", "Next.js", "Electron", "Manifest V3"]}
        />
        <ProjectCard
          title="Agent Q"
          scope="MCP Server · AI Tooling · Open Source"
          description="An MCP server that lets you create, manage, and organize specialized AI agents inside any MCP-compatible tool. Ships with 120+ pre-built agent templates spanning code review, DevOps, security, and more, available as an npm package."
          image="/agent-q.png"
          imageAlt="Agent Q banner"
          sourceLink="https://github.com/NotSooShariff/agent-q.git"
          technologies={["TypeScript", "MCP", "Node.js", "Turborepo", "npm"]}
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
