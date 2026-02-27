import Image from "next/image";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import { Award, MapPin, Calendar, Building2 } from "lucide-react";

interface ExperienceItem {
  company: string;
  logo: string;
  logoW: number;
  logoH: number;
  role: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
  award?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Optiv Security",
    logo: "/optiv.png",
    logoW: 225,
    logoH: 225,
    role: "Cybersecurity Consultant",
    location: "Bangalore, India",
    period: "Jan 2025 – Present",
    type: "Full-time",
    award: "Star Award, June 2025",
    bullets: [
      "Research and analyze OSINT techniques for threat intelligence gathering; designed automated platforms assessing security exposures across 500+ third-party vendors for top US and Canadian financial institutions.",
      "Investigate vulnerability patterns in public repositories and web applications to engineer automated discovery systems identifying leaked credentials, exposed API keys, and vulnerable dependencies.",
      "Develop AI-powered compliance platform using GPT-4 and Claude to extract security insights from vendor documentation, automating risk scoring and control gap identification across NIST CSF, SOC 2, PCI DSS, and ISO 27001.",
      "Built Python automation pipelines integrating VirusTotal, Shodan, Censys, and breach database APIs, cutting manual investigation time by 70%.",
    ],
  },
  {
    company: "L&T Technology Services",
    logo: "/ltts.webp",
    logoW: 180,
    logoH: 60,
    role: "Cybersecurity Intern",
    location: "Khobar, Saudi Arabia",
    period: "May 2024 – Jul 2024",
    type: "Internship",
    bullets: [
      "Hardened SCADA/ICS security for critical oil & gas infrastructure via network segmentation and intrusion detection systems.",
      "Deployed Windows Server domain controllers with Active Directory, enforcing least-privilege access policies and audit logging.",
      "Conducted incident investigations analyzing Sysmon telemetry, Windows Event Logs, and packet captures to identify lateral movement and privilege escalation attempts.",
      "Co-authored security policies covering vulnerability management, patch management, and incident response aligned with NIST CSF.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <>
      <main className="view-container mt-16 md:mt-20 mb-24">
        <SectionTitle badges={["Work History"]}>Experience</SectionTitle>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[31px] top-4 bottom-4 w-px bg-muted-1 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex gap-6 md:gap-10">
                {/* Logo avatar */}
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-xl bg-muted-2 border-2 border-dashed border-muted-1 flex items-center justify-center overflow-hidden relative z-10 p-2">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={exp.logoW}
                      height={exp.logoH}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 border-2 border-dashed border-muted-1 rounded-lg p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h2 className="text-xl md:text-2xl font-semibold text-muted-white-1">
                          {exp.company}
                        </h2>
                        <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-muted-2 text-muted-foreground">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-primary-light font-mono text-sm mt-1.5">
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1.5 font-mono text-xs text-muted-foreground shrink-0">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                      {exp.award && (
                        <span className="flex items-center gap-1.5 text-green">
                          <Award size={12} />
                          {exp.award}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex gap-3 text-muted-foreground text-sm md:text-base leading-relaxed"
                      >
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <SectionTitle badges={["Academic"]}>Education</SectionTitle>
          <div className="flex gap-6 md:gap-10">
            <div className="shrink-0">
              <div className="w-16 h-16 rounded-xl bg-muted-2 border-2 border-dashed border-muted-1 flex items-center justify-center relative z-10">
                <Building2 size={22} strokeWidth={1.5} className="text-primary-light" />
              </div>
            </div>
            <div className="flex-1 border-2 border-dashed border-muted-1 rounded-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold text-muted-white-1">
                    Vellore Institute of Technology
                  </h2>
                  <p className="text-primary-light font-mono text-sm mt-1.5">
                    B.Tech in Computer Science (Information Security)
                  </p>
                  <p className="font-mono text-xs text-muted-foreground mt-1">
                    CGPA: 8.35
                  </p>
                </div>
                <div className="font-mono text-xs text-muted-foreground flex items-start gap-1.5 shrink-0 md:mt-1">
                  <Calendar size={12} className="mt-0.5" />
                  2021 – 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
