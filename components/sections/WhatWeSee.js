"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  TrendingDown,
  EyeOff,
  ShieldOff,
  FileX,
  Clock,
  Unlink,
} from "lucide-react";

const problems = [
  {
    icon:  TrendingDown,
    title: "Untracked Revenue",
    desc:  "Money leaks daily across every unorganized sector. No system catches it. No record exists.",
    color: "#F87171",
  },
  {
    icon:  EyeOff,
    title: "Zero Owner Visibility",
    desc:  "Owners guess what happened today. They never know the real number. They never act on data.",
    color: "#FB923C",
  },
  {
    icon:  ShieldOff,
    title: "No Staff Accountability",
    desc:  "No audit trail. No proof of who did what. Cash disappears with no record and no consequence.",
    color: "#FBBF24",
  },
  {
    icon:  FileX,
    title: "Paper-Based Operations",
    desc:  "Everything logged by hand. Everything losable. One flood, one fire, one mistake — all gone.",
    color: "#F87171",
  },
  {
    icon:  Clock,
    title: "Time Wasted Daily",
    desc:  "People on both sides lose hours every day to friction that a basic organized system would eliminate.",
    color: "#FB923C",
  },
  {
    icon:  Unlink,
    title: "No Organized Marketplace",
    desc:  "Two sides always existed. Owners on one end. Users on the other. Nobody built the bridge.",
    color: "#FBBF24",
  },
];

export default function WhatWeSee() {
  const sectionRef = useRef(null);
  const cardsRef   = useRef([]);

  /* ── Section reveal ── */
  useEffect(() => {
    const reveal = (section) => {
      section
        .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
        .forEach((el) => el.classList.add("visible"));
    };

    const inViewport = (el) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.9 && r.bottom > 0;
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      obs.observe(sectionRef.current);
      if (inViewport(sectionRef.current)) {
        reveal(sectionRef.current);
        obs.unobserve(sectionRef.current);
      }
    }
    return () => obs.disconnect();
  }, []);

  /* ── Card stagger reveal ── */
  useEffect(() => {
    const inViewport = (el) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.9 && r.bottom > 0;
    };

    const cardObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity   = "1";
            entry.target.style.transform = "translateY(0)";
            cardObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (!card) return;
      cardObs.observe(card);
      if (inViewport(card)) {
        card.style.opacity   = "1";
        card.style.transform = "translateY(0)";
        cardObs.unobserve(card);
      }
    });

    return () => cardObs.disconnect();
  }, []);

  return (
    <section
      id="what-we-see"
      ref={sectionRef}
      style={{
        background: "var(--bg-page)",
        borderTop:  "1px solid var(--border)",
        position:   "relative",
        overflow:   "hidden",
      }}
    >
      {/* Subtle dot pattern */}
      <div className="dot-pattern" style={{
        position: "absolute", inset: 0,
        pointerEvents: "none", opacity: 0.4,
      }} />

      {/* Glow — top left */}
      <div style={{
        position:     "absolute",
        top:          "-80px", left: "-80px",
        width:        "400px", height: "400px",
        borderRadius: "9999px",
        background:   "radial-gradient(circle, rgba(248,113,113,0.04) 0%, transparent 70%)",
        pointerEvents:"none",
      }} />

      <div className="section-wrap section-pad">

        {/* ── Header ── */}
        <div
          className="reveal"
          style={{ margin: "0 auto 4rem", maxWidth: "640px", textAlign: "center" }}
        >
          <span className="section-label">What We See</span>
          <h2 className="section-heading">
            India runs on systems{" "}
            <span style={{ color: "var(--accent)" }}>
              built to leak.
            </span>
          </h2>
          <p className="section-sub">
            Across every ignored sector the same pattern repeats.
            No visibility. No accountability. No organized system.
            Just people adapting to broken infrastructure every single day.
          </p>
        </div>

        {/* ── Problem Cards ── */}
        <div
          className="problem-grid"
          style={{
          display:             "grid",
          gridTemplateColumns: "1fr",
          gap:                 "1rem",
          }}>
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                style={{
                  background:  "var(--bg-card)",
                  padding:     "1.75rem",
                  borderRadius:"var(--radius-card)",
                  border:      "1px solid var(--border)",
                  opacity:     0,
                  transform:   "translateY(24px)",
                  transition:  `opacity 0.8s var(--ease-elastic) ${i * 80}ms,
                                transform 0.8s var(--ease-elastic) ${i * 80}ms`,
                  cursor:      "default",
                  position:    "relative",
                  overflow:    "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--bg-card-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--bg-card)";
                }}
              >
                {/* Bottom accent line on hover */}
                <div style={{
                  position:   "absolute",
                  bottom:     0, left: 0, right: 0,
                  height:     "2px",
                  background: `linear-gradient(90deg, ${p.color}, transparent)`,
                  opacity:    0,
                  transition: "opacity 0.3s ease",
                }}
                  ref={(el) => {
                    if (el) {
                      el.parentElement.addEventListener("mouseenter", () => el.style.opacity = "1");
                      el.parentElement.addEventListener("mouseleave", () => el.style.opacity = "0");
                    }
                  }}
                />

                {/* Icon */}
                <div style={{
                  width:          "44px",
                  height:         "44px",
                  borderRadius:   "10px",
                  background:     `${p.color}12`,
                  border:         `1px solid ${p.color}25`,
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  marginBottom:   "1.25rem",
                  color:          p.color,
                  flexShrink:     0,
                }}>
                  <Icon size={20} strokeWidth={1.75} />
                </div>

                {/* Number */}
                <div style={{
                  fontFamily:    "var(--font-mono)",
                  fontSize:      "0.65rem",
                  fontWeight:    700,
                  color:         "var(--text-muted)",
                  letterSpacing: "0.1em",
                  marginBottom:  "0.625rem",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize:     "0.95rem",
                  fontWeight:   700,
                  color:        "#FFFFFF",
                  marginBottom: "0.5rem",
                  lineHeight:   1.3,
                  fontFamily:   "var(--font-heading)",
                  letterSpacing:"-0.01em",
                }}>
                  {p.title}
                </h3>

                {/* Desc */}
                <p style={{
                  fontSize:   "0.82rem",
                  color:      "var(--text-body)",
                  lineHeight: 1.7,
                  fontFamily: "var(--font-body)",
                  margin:     0,
                }}>
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── Bottom statement ── */}
        <div style={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "center",
        }}>
          <Link
            href="/#products"
            className="btn-primary"
            style={{ flexShrink: 0, width: "fit-content", margin: "0 auto", padding: "0.875rem 1.75rem" }}
          >
            See what we built
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .problem-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (min-width: 1200px) {
          .problem-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </section>
  );
}