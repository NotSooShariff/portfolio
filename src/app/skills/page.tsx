import Footer from "@/components/Footer";
import SkillMap from "@/components/SkillMap";
import { ShieldCheck } from "lucide-react";

const certs = [
  { name: "Certified Ethical Hacker (CEH v12)", issuer: "EC-Council" },
  { name: "CompTIA Security+", issuer: "CompTIA" },
  { name: "ISO 27001:2022 Lead Auditor", issuer: "ISMS" },
  { name: "Microsoft Azure Fundamentals (AZ-900)", issuer: "Microsoft" },
];

// Duplicate for seamless loop
const marqueeItems = [...certs, ...certs, ...certs];

export default function SkillsPage() {
  return (
    <>
      <main className="view-container mt-16 md:mt-20 mb-24">
        {/* Certification marquee */}
        <div className="relative overflow-hidden mb-14 -mx-5">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="animate-ticker flex gap-3 w-max py-1">
            {marqueeItems.map((cert, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-4 py-2.5 bg-muted-2 border border-muted-1 rounded-full shrink-0"
              >
                <ShieldCheck size={13} strokeWidth={1.5} className="text-primary-light shrink-0" />
                <span className="font-mono text-sm text-muted-foreground whitespace-nowrap">
                  {cert.name}
                </span>
                <span className="font-mono text-xs text-primary-light/40">·</span>
                <span className="font-mono text-xs text-muted-foreground/60 whitespace-nowrap">
                  {cert.issuer}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill map */}
        <SkillMap />
      </main>
      <Footer />
    </>
  );
}
