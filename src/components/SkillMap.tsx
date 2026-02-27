"use client";

import { useState } from "react";

interface SkillCategory {
  nodeLabel: string[];
  label: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    nodeLabel: ["Threat", "Research"],
    label: "Threat Research",
    skills: [
      "Malware analysis",
      "Adversary tracking",
      "C2 development",
      "CASB detection",
      "Vuln. research",
      "Dark web OSINT",
      "MITRE ATT&CK",
      "IOC enrichment",
    ],
  },
  {
    nodeLabel: ["Programming"],
    label: "Programming",
    skills: ["Python", "Rust", "Bash", "C / C++", "SQL", "PowerShell", "Go"],
  },
  {
    nodeLabel: ["Security", "Tools"],
    label: "Security Tools",
    skills: [
      "Wireshark",
      "Nmap",
      "Burp Suite",
      "Metasploit",
      "Sysmon",
      "Splunk",
      "QRadar / ELK",
      "Snort / Nessus",
      "Shodan / Censys",
      "YARA",
    ],
  },
  {
    nodeLabel: ["Automation"],
    label: "Security Automation",
    skills: [
      "LLM analysis",
      "GPT-4 / Claude",
      "IOC enrichment",
      "Scraper gen.",
      "Flask / FastAPI",
      "Docker",
    ],
  },
  {
    nodeLabel: ["Platforms"],
    label: "Platforms",
    skills: [
      "Linux (Kali/Ubuntu)",
      "Windows Server",
      "Active Directory",
      "AWS",
      "Azure",
      "Git / GitHub",
    ],
  },
  {
    nodeLabel: ["Reverse", "Eng."],
    label: "Reverse Engineering",
    skills: [
      "Ghidra",
      "IDA Pro",
      "x64dbg",
      "Binary Ninja",
      "PE analysis",
      "Static analysis",
      "x86/x64/ARM asm",
    ],
  },
];

// Graph constants — viewBox "0 0 1400 1100"
const CX = 700;
const CY = 550;
const R = 280;
const NODE_R = 58;
const ANGLES = [-90, -30, 30, 90, 150, 210];

// Sub-node layout
const SUB_R = 200; // radius from category node to sub-node pill

function degToRad(deg: number) {
  return (deg * Math.PI) / 180;
}

function nodePos(angle: number) {
  return {
    x: Math.round(CX + R * Math.cos(degToRad(angle))),
    y: Math.round(CY + R * Math.sin(degToRad(angle))),
  };
}

// Fan angle grows with number of skills so pills have breathing room
function fanAngle(n: number): number {
  return Math.min(Math.max(110, (n - 1) * 22), 220);
}

interface SubNode {
  x: number;
  y: number;
  label: string;
}

function getSubNodes(nx: number, ny: number, outAngle: number, skills: string[]): SubNode[] {
  const N = skills.length;
  const fan = fanAngle(N);
  const half = fan / 2;
  return skills.map((skill, i) => {
    const spread = N === 1 ? 0 : (i / (N - 1)) * fan - half;
    const rad = degToRad(outAngle + spread);
    return {
      x: Math.round(nx + SUB_R * Math.cos(rad)),
      y: Math.round(ny + SUB_R * Math.sin(rad)),
      label: skill,
    };
  });
}

const nodes = categories.map((cat, i) => ({
  ...cat,
  ...nodePos(ANGLES[i]),
  angle: ANGLES[i],
}));

const PILL_H = 28;
function pillWidth(label: string): number {
  return Math.min(label.length * 8.2 + 22, 165);
}

export default function SkillMap() {
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [hoveredSub, setHoveredSub] = useState<{ x: number; y: number; category: string } | null>(null);

  const toggle = (i: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div>
      {/* Mobile: accordion */}
      <div className="md:hidden space-y-3">
        {selected.size === 0 && (
          <p className="hint-blink font-mono text-xs text-center text-muted-foreground mb-4">
            tap a category to expand its skills
          </p>
        )}
        {categories.map((cat, i) => (
          <div
            key={i}
            className={`p-4 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
              selected.has(i) ? "border-primary/50 bg-primary/5" : "border-muted-1"
            }`}
            onClick={() => toggle(i)}
          >
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-widest text-primary-light">
                {cat.label}
              </p>
              <span className="font-mono text-xs text-muted-foreground">
                {selected.has(i) ? "▴" : "▾"}
              </span>
            </div>
            {selected.has(i) && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs px-2 py-0.5 bg-muted-2 rounded-full text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop: SVG node map */}
      <div className="hidden md:block">
        <svg viewBox="0 0 1400 1100" className="w-full block">
          <defs>
            <pattern id="dotgrid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#2b2b37" />
            </pattern>
            <filter id="centerglow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect width="1400" height="1100" rx="8" fill="url(#dotgrid)" />

          {/* Blinking hint at top */}
          {selected.size === 0 && (
            <text
              x={CX} y={58}
              textAnchor="middle" fontSize="22"
              fill="#4a4a62" fontFamily="monospace"
              className="hint-blink"
              style={{ userSelect: "none" }}
            >
              ↓ click a node to reveal its skills ↓
            </text>
          )}


          {/* Lines: center → category nodes */}
          {nodes.map((node, i) => {
            const isSelected = selected.has(i);
            const dim = selected.size > 0 && !isSelected;
            return (
              <line
                key={`cl-${i}`}
                x1={CX} y1={CY}
                x2={node.x} y2={node.y}
                stroke={isSelected ? "#8987f4" : "#353545"}
                strokeWidth={isSelected ? 1.5 : 1}
                strokeDasharray="6 4"
                strokeOpacity={dim ? 0.2 : 1}
                style={{ transition: "stroke 0.2s, stroke-opacity 0.2s" }}
              />
            );
          })}

          {/* Lines + pills: all selected categories → their sub-nodes */}
          {nodes.map((node, i) =>
            selected.has(i)
              ? getSubNodes(node.x, node.y, node.angle, node.skills).map((sub, si) => {
                  const pw = pillWidth(sub.label);
                  return (
                    <g
                      key={`sub-${i}-${si}`}
                      onMouseEnter={() => setHoveredSub({ x: sub.x, y: sub.y, category: node.label })}
                      onMouseLeave={() => setHoveredSub(null)}
                    >
                      <line
                        x1={node.x} y1={node.y}
                        x2={sub.x} y2={sub.y}
                        stroke="#4a4a62"
                        strokeWidth="1"
                        strokeDasharray="4 3"
                      />
                      <rect
                        x={sub.x - pw / 2} y={sub.y - PILL_H / 2}
                        width={pw} height={PILL_H} rx={13}
                        fill="#22222f"
                        stroke="#8987f430"
                        strokeWidth="1"
                      />
                      <text
                        x={sub.x} y={sub.y}
                        textAnchor="middle" dominantBaseline="middle"
                        fontSize="12.5"
                        fill="#c6c9d5"
                        fontFamily="monospace"
                        style={{ userSelect: "none" }}
                      >
                        {sub.label}
                      </text>
                    </g>
                  );
                })
              : null
          )}

          {/* Category nodes (rendered on top of sub-node lines) */}
          {nodes.map((node, i) => {
            const isSelected = selected.has(i);
            const dim = selected.size > 0 && !isSelected;
            return (
              <g key={`n-${i}`} onClick={() => toggle(i)} style={{ cursor: "pointer" }}>
                {isSelected && (
                  <circle
                    cx={node.x} cy={node.y} r={NODE_R + 12}
                    fill="none"
                    stroke="#8987f4" strokeWidth="1"
                    strokeOpacity="0.3" strokeDasharray="3 4"
                  />
                )}
                <circle
                  cx={node.x} cy={node.y} r={NODE_R}
                  fill={isSelected ? "#8987f4" : "#1a1a27"}
                  stroke={isSelected ? "#8987f4" : "#2f2f42"}
                  strokeWidth="1.5"
                  strokeDasharray={isSelected ? "none" : "6 3"}
                  fillOpacity={dim ? 0.3 : 1}
                  strokeOpacity={dim ? 0.25 : 1}
                  style={{ transition: "fill 0.2s, fill-opacity 0.2s, stroke-opacity 0.2s" }}
                />
                {node.nodeLabel.length === 1 ? (
                  <text
                    x={node.x} y={node.y}
                    textAnchor="middle" dominantBaseline="middle"
                    fontSize="16" fontFamily="monospace"
                    fill={isSelected ? "#141421" : "#bdbdea"}
                    fillOpacity={dim ? 0.3 : 1}
                    style={{ transition: "fill 0.2s, fill-opacity 0.2s", userSelect: "none" }}
                  >
                    {node.nodeLabel[0]}
                  </text>
                ) : (
                  <text
                    textAnchor="middle" fontSize="16" fontFamily="monospace"
                    fill={isSelected ? "#141421" : "#bdbdea"}
                    fillOpacity={dim ? 0.3 : 1}
                    style={{ transition: "fill 0.2s, fill-opacity 0.2s", userSelect: "none" }}
                  >
                    <tspan x={node.x} y={node.y - 10}>{node.nodeLabel[0]}</tspan>
                    <tspan x={node.x} y={node.y + 10}>{node.nodeLabel[1]}</tspan>
                  </text>
                )}
              </g>
            );
          })}

          {/* Center node */}
          <g filter="url(#centerglow)">
            <circle cx={CX} cy={CY} r={68} fill="#141421" stroke="#8987f4" strokeWidth="1.5" />
            <circle cx={CX} cy={CY} r={58} fill="#141421" stroke="#8987f4" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />
            <text
              x={CX} y={CY}
              textAnchor="middle" dominantBaseline="middle"
              fontSize="17" fontFamily="monospace" fontWeight="bold"
              fill="#8987f4"
              style={{ userSelect: "none" }}
            >
              Skills
            </text>
          </g>

          {/* Hint at bottom */}
          {selected.size > 0 && (
            <text
              x={CX} y={1075}
              textAnchor="middle" fontSize="20"
              fill="#4a4a5c" fontFamily="monospace"
              style={{ userSelect: "none" }}
            >
              click again to close  ·  hover a skill to see its category
            </text>
          )}

          {/* Sub-node tooltip */}
          {(() => {
            if (!hoveredSub) return null;
            const above = hoveredSub.y >= 120;
            const tipY = above
              ? hoveredSub.y - PILL_H / 2 - 32
              : hoveredSub.y + PILL_H / 2 + 8;
            const tipW = hoveredSub.category.length * 8.5 + 90;
            return (
              <g style={{ pointerEvents: "none" }}>
                <rect
                  x={hoveredSub.x - tipW / 2} y={tipY}
                  width={tipW} height={28} rx={5}
                  fill="#1a1a30" stroke="#8987f460" strokeWidth="1"
                />
                <text
                  x={hoveredSub.x} y={tipY + 14}
                  textAnchor="middle" dominantBaseline="middle"
                  fontSize="14" fill="#8987f4" fontFamily="monospace"
                  style={{ userSelect: "none" }}
                >
                  Part of {hoveredSub.category}
                </text>
              </g>
            );
          })()}
        </svg>
      </div>
    </div>
  );
}
