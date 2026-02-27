import SectionTitle from "./ui/SectionTitle";

const skillCategories = [
  {
    label: "Threat Research",
    skills: [
      "Malware analysis",
      "Adversary tracking",
      "C2 development",
      "CASB detection engineering",
      "Vulnerability research",
      "Dark web OSINT",
      "MITRE ATT&CK mapping",
      "IOC enrichment",
    ],
  },
  {
    label: "Programming",
    skills: ["Python", "Rust", "Bash", "C/C++", "SQL", "PowerShell", "Go"],
  },
  {
    label: "Reverse Engineering",
    skills: [
      "Ghidra",
      "IDA Pro",
      "x64dbg",
      "Binary Ninja",
      "PE analysis",
      "Static/dynamic analysis",
      "x86/x64/ARM assembly",
    ],
  },
  {
    label: "Security Tools",
    skills: [
      "Wireshark",
      "Nmap",
      "Burp Suite",
      "Metasploit",
      "Sysmon",
      "Splunk",
      "QRadar",
      "ELK Stack",
      "Snort",
      "Nessus",
      "Autopsy",
      "Shodan",
      "Censys",
      "YARA",
    ],
  },
  {
    label: "Security Automation",
    skills: [
      "LLM-powered analysis",
      "GPT-4 / Claude API",
      "Automated IOC enrichment",
      "Scraper generation",
      "Flask",
      "FastAPI",
      "Docker",
    ],
  },
  {
    label: "Platforms",
    skills: [
      "Linux (Kali, Ubuntu, RHEL)",
      "Windows Server",
      "Active Directory",
      "AWS",
      "Azure",
      "Git / GitHub",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="view-container mt-24">
      <SectionTitle badges={["Technical", "Tools"]}>Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillCategories.map((cat) => (
          <div
            key={cat.label}
            className="p-5 border-2 border-dashed border-muted-1 rounded-lg"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-primary-light mb-3">
              {cat.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs md:text-sm px-2.5 py-1 bg-muted-2 rounded-full text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
