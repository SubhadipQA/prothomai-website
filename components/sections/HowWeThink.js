"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const principles = [
  {
    number: "01",
    title:  "Talk to the people with the problem.",
    sub:    "Before we talk to anyone else.",
    desc:   "Investors, advisors, analysts — none of them have the problem. The person with the problem does. We start there. Always.",
    color:  "#06B6D4",
  },
  {
    number: "02",
    title:  "Understand why it stayed unsolved.",
    sub:    "Before we decide how to solve it.",
    desc:   "Every ignored problem has a reason it stayed ignored. Finding that reason is the real work. Most skip this step. We never do.",
    color:  "#06B6D4",
  },
  {
    number: "03",
    title:  "Build for the least resourced first.",
    sub:    "If it works for them, it works for everyone.",
    desc:   "If our system needs good internet, a smart device or a tech-savvy user — we have already failed. We build from the bottom up.",
    color:  "#06B6D4",
  },
];

export default function HowWeThink() {
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
      id="how-we-think"
      ref={sectionRef}
      style={{
        background: "var(--bg-surface)",
        borderTop:  "1px solid var(--border)",
        position:   "relative",
        overflow:   "hidden",
      }}
    >
      {/* Glow — center */}
      <div style={{
        position:      "absolute",
        top:           "50%", left: "50%",
        transform:     "translate(-50%, -50%)",
        width:         "600px", height: "300px",
        borderRadius:  "9999px",
        background:    "radial-gradient(ellipse, rgba(6,182,212,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="section-wrap section-pad">

        {/* ── Header ── */}
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span className="section-label">How We Think</span>
          <h2 className="section-heading" style={{ margin: "0 auto" }}>
            Three principles.{" "}
            <span style={{ color: "var(--accent)" }}>No exceptions.</span>
          </h2>
          <p className="section-sub" style={{ margin: "1rem auto 0", textAlign: "center" }}>
            These are not values on a wall. They are the actual
            operating rules behind every decision we make.
          </p>
        </div>

        {/* ── Principles Grid ── */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr",
            gap:                 "1px",
            background:          "var(--border)",
            borderRadius:        "var(--radius-card)",
            overflow:            "hidden",
            border:              "1px solid var(--border)",
          }}
          className="principles-grid"
        >
          {principles.map((p, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              style={{
                background:  "var(--bg-surface)",
                padding:     "2.5rem 2rem",
                opacity:     0,
                transform:   "translateY(24px)",
                transition:  `opacity 0.8s var(--ease-elastic) ${i * 120}ms,
                              transform 0.8s var(--ease-elastic) ${i * 120}ms,
                              background 0.3s ease`,
                cursor:      "default",
                position:    "relative",
                overflow:    "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--bg-card-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--bg-surface)";
              }}
            >
              {/* Left accent bar */}
              <div style={{
                position:     "absolute",
                top:          0, left: 0, bottom: 0,
                width:        "2px",
                background:   `linear-gradient(180deg, var(--accent), transparent)`,
                opacity:      0,
                transition:   "opacity 0.3s ease",
              }}
                ref={(el) => {
                  if (el) {
                    el.parentElement.addEventListener("mouseenter", () => el.style.opacity = "1");
                    el.parentElement.addEventListener("mouseleave", () => el.style.opacity = "0");
                  }
                }}
              />

              {/* Number */}
              <div style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "0.7rem",
                fontWeight:    700,
                color:         "var(--accent)",
                letterSpacing: "0.12em",
                marginBottom:  "1.5rem",
              }}>
                {p.number}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize:      "clamp(1.1rem, 2vw, 1.35rem)",
                fontWeight:    800,
                color:         "#FFFFFF",
                lineHeight:    1.25,
                letterSpacing: "-0.02em",
                fontFamily:    "var(--font-heading)",
                marginBottom:  "0.625rem",
              }}>
                {p.title}
              </h3>

              {/* Sub — italic */}
              <div style={{
                fontSize:     "0.82rem",
                color:        "var(--accent)",
                fontStyle:    "italic",
                fontFamily:   "var(--font-body)",
                marginBottom: "1.25rem",
                opacity:      0.8,
              }}>
                {p.sub}
              </div>

              {/* Divider */}
              <div style={{
                width:        "32px",
                height:       "1px",
                background:   "var(--border-strong)",
                marginBottom: "1.25rem",
              }} />

              {/* Desc */}
              <p style={{
                fontSize:   "0.85rem",
                color:      "var(--text-body)",
                lineHeight: 1.75,
                fontFamily: "var(--font-body)",
                margin:     0,
              }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Bottom quote ── */}
        <div
          className="reveal"
          style={{
            marginTop:  "4rem",
            textAlign:  "center",
          }}
        >
          <p style={{
            fontSize:      "clamp(1rem, 2vw, 1.2rem)",
            fontWeight:    600,
            color:         "var(--text-body)",
            fontFamily:    "var(--font-heading)",
            lineHeight:    1.7,
            maxWidth:      "520px",
            margin:        "0 auto",
            letterSpacing: "-0.01em",
          }}>
            We do not move fast and break things.{" "}
            <span style={{ color: "#FFFFFF" }}>
              We move deliberately and build things that last.
            </span>
          </p>

          <div style={{ marginTop: "1.5rem" }}>
            <Link
              href="/about"
              className="btn-secondary"
              style={{ padding: "0.875rem 1.75rem" }}
            >
              Our Full Story
            </Link>
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .principles-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}