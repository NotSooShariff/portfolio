import Footer from "@/components/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import { FlaskConical, Cpu, FileText } from "lucide-react";

const researchItems = [
  {
    icon: FlaskConical,
    title: "Privacy-Preserving Threat Actor Clustering Pipeline",
    tag: "Provisional Patent Filing",
    tagStyle: "text-green border-green/30 bg-muted-1",
    abstract:
      "Developing a threat intelligence system that correlates threat actor identities across platforms (Telegram, dark web forums, paste sites) using behavioral fingerprinting: temporal pattern analysis, writing style analysis, and operational security patterns, while maintaining privacy constraints. Implements clustering algorithms to track threat actor campaigns without compromising individual privacy.",
    highlights: [
      "Cross-platform identity correlation across Telegram, dark web forums, and paste sites",
      "Behavioral fingerprinting via temporal pattern analysis and writing style analysis",
      "Privacy-preserving clustering: tracks campaigns without exposing individual identities",
    ],
  },
  {
    icon: Cpu,
    title: "Post-Quantum Cryptography for Wireless Standards",
    tag: "VIT Research Project",
    tagStyle: "text-primary-light bg-muted-1",
    abstract:
      "Investigated vulnerabilities in RSA, ECC, and AES under quantum threat models using Shor's and Grover's algorithms. Evaluated post-quantum cryptographic algorithms including lattice-based schemes (Kyber, Dilithium), hash-based schemes (SPHINCS+), and code-based schemes for wireless standards. Analyzed performance trade-offs for quantum-resistant algorithms in resource-constrained IoT and mobile environments.",
    highlights: [
      "Modeled quantum attacks on RSA, ECC, and AES using Shor's and Grover's algorithms",
      "Benchmarked Kyber, Dilithium, and SPHINCS+ for wireless communication standards",
      "Analyzed implementation trade-offs for IoT and mobile resource-constrained environments",
    ],
  },
];

export default function ResearchPage() {
  return (
    <>
      <main className="view-container mt-16 md:mt-20 mb-24">
        <SectionTitle badges={["Security Research"]}>Research</SectionTitle>

        <div className="space-y-8">
          {researchItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="border-2 border-dashed border-muted-1 rounded-lg overflow-hidden"
              >
                {/* Visual header band */}
                <div className="relative bg-muted-2 px-6 md:px-8 py-8 flex items-start gap-5">
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage:
                        "linear-gradient(#8987f4 1px, transparent 1px), linear-gradient(90deg, #8987f4 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="relative z-10 p-3 rounded-xl bg-muted-1 border border-muted-1 shrink-0">
                    <Icon size={24} strokeWidth={1.5} className="text-primary-light" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h2 className="text-lg md:text-xl font-semibold text-muted-white-1 leading-snug">
                        {item.title}
                      </h2>
                      <span
                        className={`font-mono text-xs px-2.5 py-1 rounded-full border ${item.tagStyle}`}
                      >
                        {item.tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 md:px-8 py-6 space-y-5">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
                      <FileText size={12} /> Abstract
                    </p>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {item.abstract}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                      Key Contributions
                    </p>
                    <ul className="space-y-2">
                      {item.highlights.map((h, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex gap-3 text-sm md:text-base text-muted-foreground leading-relaxed"
                        >
                          <span className="text-primary shrink-0 mt-1">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
