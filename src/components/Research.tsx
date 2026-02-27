import SectionTitle from "./ui/SectionTitle";
import { FlaskConical, Cpu } from "lucide-react";

const Research = () => {
  return (
    <section id="research" className="view-container mt-24">
      <SectionTitle badges={["Patent", "Academia"]}>Research</SectionTitle>
      <div className="space-y-5">
        <div className="p-6 md:p-8 border-2 border-dashed border-muted-1 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-muted-1 shrink-0 mt-0.5">
              <FlaskConical size={20} className="text-primary-light" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="text-lg md:text-xl font-semibold text-muted-white-1">
                  Privacy-Preserving Threat Actor Clustering Pipeline
                </h3>
                <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-muted-1 text-green border border-green/30">
                  Provisional Patent Filing
                </span>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Developing a privacy-preserving threat intelligence system that correlates threat actor identities across platforms (Telegram, dark web forums, paste sites) using behavioral fingerprinting: temporal pattern analysis, writing style analysis, and operational security patterns, while maintaining privacy constraints. Implements clustering algorithms to track threat actor campaigns without compromising individual privacy.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 border-2 border-dashed border-muted-1 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-muted-1 shrink-0 mt-0.5">
              <Cpu size={20} className="text-primary-light" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="text-lg md:text-xl font-semibold text-muted-white-1">
                  Post-Quantum Cryptography for Wireless Standards
                </h3>
                <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-muted-1 text-primary-light">
                  VIT Research Project
                </span>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Investigated vulnerabilities in RSA, ECC, and AES under quantum threat models using Shor&apos;s and Grover&apos;s algorithms. Evaluated post-quantum cryptographic algorithms including lattice-based schemes (Kyber, Dilithium), hash-based schemes (SPHINCS+), and code-based schemes for wireless standards. Analyzed performance trade-offs for quantum-resistant algorithms in resource-constrained IoT and mobile environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
