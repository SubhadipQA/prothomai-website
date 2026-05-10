"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutStrip() {
  const sectionRef = useRef(null);

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
      { threshold: 0.2 }
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

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#EBF1FF",
        borderTop:  "1px solid rgba(15, 23, 42, 0.08)",
        position:   "relative",
        overflow:   "hidden",
        color:      "#0F172A",
        "--text-body": "#334155",
        "--text-muted": "#64748B",
        "--border": "rgba(15, 23, 42, 0.10)",
      }}
    >
      {/* Glow center */}
      <div style={{
        position:     "absolute",
        top:          "50%", left: "50%",
        transform:    "translate(-50%, -50%)",
        width:        "700px", height: "400px",
        borderRadius: "9999px",
        background:   "radial-gradient(ellipse, rgba(6,182,212,0.08) 0%, transparent 70%)",
        pointerEvents:"none",
      }} />

      {/* Dot pattern */}
      <div className="dot-pattern" style={{
        position:     "absolute", inset: 0,
        pointerEvents:"none", opacity: 0.3,
      }} />

      <div className="section-wrap section-pad">
        <div style={{
          maxWidth:  "780px",
          margin:    "0 auto",
          textAlign: "center",
          position:  "relative",
          zIndex:    1,
        }}>

          {/* ── Label ── */}
          <div className="reveal">
            <span className="section-label">Who We Are</span>
          </div>

          {/* ── Large quote mark ── */}
          <div
            className="reveal"
            style={{
              fontSize:      "8rem",
              lineHeight:    0.8,
              color:         "rgba(6,182,212,0.12)",
              fontFamily:    "var(--font-heading)",
              fontWeight:    800,
              marginBottom:  "0",
              userSelect:    "none",
            }}
          >
            &ldquo;
          </div>

          {/* ── Quote ── */}
          <h2
            className="reveal"
            style={{
              fontSize:      "clamp(1.35rem, 3vw, 2rem)",
              fontWeight:    700,
              lineHeight:    1.5,
              letterSpacing: "-0.02em",
              fontFamily:    "var(--font-heading)",
              color:         "#0F172A",
              marginBottom:  "2rem",
              marginTop:     "-1rem",
            }}
          >
            India&apos;s most ignored problems have stayed ignored{" "}
            not because nobody cared —{" "}
            <span style={{ color: "var(--accent)" }}>
              but because nobody went deep enough
              to understand them first.
            </span>
          </h2>

          {/* ── Divider ── */}
          <div
            className="reveal"
            style={{
              width:        "48px",
              height:       "2px",
              background:   "var(--accent)",
              margin:       "0 auto 2rem",
              borderRadius: "9999px",
              opacity:      0.6,
            }}
          />

          {/* ── Supporting line ── */}
          <p
            className="reveal"
            style={{
              fontSize:     "0.95rem",
              color:        "var(--text-muted)",
              lineHeight:   1.85,
              fontFamily:   "var(--font-body)",
              maxWidth:     "520px",
              margin:       "0 auto 2.5rem",
            }}
          >
            We are Prothom AI — a research-first technology company.
            We spend months in the field before we design a single screen.
            We build systems that last, not products that ship fast.
          </p>

          {/* ── Attribution ── */}
          <div
            className="reveal"
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            "0.625rem",
              marginBottom:   "3rem",
            }}
          >
            <Image
              src="/p_only.png"
              alt="Prothom AI"
              width={32}
              height={40}
              style={{ width: "24px", height: "auto", flexShrink: 0 }}
            />
            <span style={{
              fontSize:      "0.78rem",
              fontWeight:    600,
              color:         "var(--text-muted)",
              fontFamily:    "var(--font-body)",
              letterSpacing: "0.04em",
            }}>
              Prothom Analytica India Pvt. Ltd.
            </span>
          </div>

          {/* ── CTA ── */}
          <div className="reveal">
            <Link
              href="/about"
              className="btn-primary"
              style={{ padding: "0.875rem 2rem" }}
            >
              Our Full Story
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}