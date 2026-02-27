import SectionTitle from "./ui/SectionTitle";
import { Award, MapPin, Calendar } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  award?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Optiv Security",
    role: "Cybersecurity Consultant",
    location: "Bangalore, India",
    period: "Jan 2025 – Present",
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
    role: "Cybersecurity Intern",
    location: "Khobar, Saudi Arabia",
    period: "May 2024 – Jul 2024",
    bullets: [
      "Hardened SCADA/ICS security for critical oil & gas infrastructure via network segmentation and intrusion detection systems.",
      "Deployed Windows Server domain controllers with Active Directory, enforcing least-privilege access policies and audit logging.",
      "Conducted incident investigations analyzing Sysmon telemetry, Windows Event Logs, and packet captures to identify lateral movement and privilege escalation attempts.",
      "Co-authored security policies covering vulnerability management, patch management, and incident response aligned with NIST CSF.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="view-container mt-24">
      <SectionTitle badges={["Consultant", "Intern"]}>Work Experience</SectionTitle>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="p-6 md:p-8 border-2 border-dashed border-muted-1 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-muted-white-1">
                  {exp.company}
                </h3>
                <p className="text-primary-light font-mono text-sm mt-1">
                  {exp.role}
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1 font-mono text-sm text-muted-foreground shrink-0">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} />
                  {exp.location}
                </span>
                {exp.award && (
                  <span className="flex items-center gap-1.5 text-green mt-1">
                    <Award size={13} />
                    {exp.award}
                  </span>
                )}
              </div>
            </div>
            <ul className="space-y-2.5">
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
        ))}
      </div>
    </section>
  );
};

export default Experience;
