import SectionTitle from "./ui/SectionTitle";
import { ShieldCheck } from "lucide-react";

const certs = [
  {
    name: "Certified Ethical Hacker (CEH v12)",
    issuer: "EC-Council",
    note: "Perfect Score: 125/125",
    highlight: true,
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    note: null,
    highlight: false,
  },
  {
    name: "ISO 27001:2022 Lead Auditor",
    issuer: "Information Security Management Systems",
    note: null,
    highlight: false,
  },
  {
    name: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    note: null,
    highlight: false,
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="view-container mt-24">
      <SectionTitle badges={["Certified", "Verified"]}>Certifications</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certs.map((cert, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-4 p-5 border-2 border-dashed rounded-lg ${
              cert.highlight ? "border-primary/50 bg-primary/5" : "border-muted-1"
            }`}
          >
            <ShieldCheck
              size={22}
              strokeWidth={1.5}
              className={
                cert.highlight
                  ? "text-primary shrink-0 mt-0.5"
                  : "text-muted-foreground shrink-0 mt-0.5"
              }
            />
            <div>
              <p
                className={`font-medium text-sm md:text-base ${
                  cert.highlight ? "text-muted-white-1" : "text-muted-white-2"
                }`}
              >
                {cert.name}
              </p>
              <p className="font-mono text-xs text-muted-foreground mt-1">
                {cert.issuer}
              </p>
              {cert.note && (
                <p className="font-mono text-xs text-green mt-1">{cert.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
