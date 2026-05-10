"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const headlines = [
  "Organizing what India has ignored.",
  "We think before we build.",
  "From chaos to high-scale order.",
];

const stats = [
  { value: "₹800Cr+", label: "Untracked parking revenue annually in India" },
  { value: "90%",     label: "Parking zones still running on paper registers" },
  { value: "0",       label: "Organized parking marketplace in India today" },
  { value: "₹500+",   label: "Daily revenue lost per unorganized parking zone" },
//   { value: "2 sides", label: "Owners + Drivers. Nobody connected them. Until now." },
];

export default function HeroOld() {
  const [activeLine, setActiveLine] = useState(0);
  const sectionRef  = useRef(null);
  const glowRef     = useRef(null);

  /* ── Headline rotator ── */
  useEffect(() => {
    const t = setInterval(() => {
      setActiveLine((p) => (p + 1) % headlines.length);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  /* ── Subtle mouse glow ── */
  useEffect(() => {
    const onMove = (e) => {
      if (!glowRef.current) return;
      const x = (e.clientX / window.innerWidth)  * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      glowRef.current.style.background =
        `radial-gradient(ellipse 55% 45% at ${x}% ${y}%, rgba(6,182,212,0.07) 0%, transparent 70%)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* ── Scroll to next section ── */
  const scrollDown = () => {
    sectionRef.current?.nextElementSibling?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      style={{
        position:   "relative",
        minHeight:  "100vh",
        display:    "flex",
        alignItems: "center",
        overflow:   "hidden",
        background: "var(--bg-page)",
      }}
    >
      {/* ── Background layers ── */}

      {/* Grid pattern */}
      <div className="grid-pattern" style={{
        position: "absolute", inset: 0,
        pointerEvents: "none", opacity: 0.2,
      }} />

      {/* Mouse glow */}
      <div ref={glowRef} style={{
        position: "absolute", inset: 0,
        pointerEvents: "none",
        transition: "background 0.5s ease",
      }} />

      {/* Top cyan glow */}
      <div style={{
        position:      "absolute",
        top:           "-120px",
        left:          "50%",
        transform:     "translateX(-50%)",
        width:         "700px",
        height:        "400px",
        borderRadius:  "9999px",
        background:    "radial-gradient(ellipse, rgba(6,182,212,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* ── Main Content ── */}
      <div
        className="section-wrap"
        style={{
          position:      "relative",
          zIndex:        1,
          width:         "100%",
          paddingTop:    "7rem",
          paddingBottom: "5rem",
        }}
      >
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr",
            gap:                 "4rem",
            alignItems:          "center",
          }}
          className="hero-grid"
        >

          {/* ── LEFT — Text ── */}
          <div style={{ maxWidth: "660px" }}>

            {/* Label */}
            <div style={{
              display:      "inline-flex",
              alignItems:   "center",
              gap:          "0.5rem",
              marginBottom: "1.75rem",
              animation:    "fadeUp 0.6s var(--ease-elastic) both",
            }}>
              <div style={{
                width:      "6px",
                height:     "6px",
                borderRadius:"9999px",
                background: "var(--accent)",
                animation:  "pulse-glow 2s ease infinite",
              }} />
              <span style={{
                fontSize:      "0.65rem",
                fontWeight:    700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color:         "var(--accent)",
                fontFamily:    "var(--font-body)",
              }}>
                Prothom Analytica India
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize:      "clamp(2.25rem, 5.5vw, 4rem)",
              fontWeight:    800,
              lineHeight:    1.05,
              letterSpacing: "-0.03em",
              fontFamily:    "var(--font-heading)",
              marginBottom:  "1.75rem",
              minHeight:     "3em",
            }}>
              <span
                key={activeLine}
                style={{
                  display:    "block",
                  background: "linear-gradient(180deg, #FFFFFF 0%, #94A3B8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor:  "transparent",
                  backgroundClip:       "text",
                  animation: "heroSwap 0.7s var(--ease-elastic) both",
                }}
              >
                {headlines[activeLine]}
              </span>
            </h1>

            {/* Subtext */}
            <p style={{
              fontSize:     "clamp(0.95rem, 1.8vw, 1.1rem)",
              color:        "var(--text-body)",
              lineHeight:   1.8,
              maxWidth:     "500px",
              marginBottom: "2.25rem",
              fontFamily:   "var(--font-body)",
              animation:    "fadeUp 0.7s var(--ease-elastic) 0.15s both",
            }}>
              India&apos;s most pressing problems are not technology problems.
              They are <span style={{ color: "var(--accent)" }}>organization problems.</span>{" "}
              We research them at ground level — then we build.
            </p>

            {/* CTAs */}
            <div style={{
              display:      "flex",
              flexWrap:     "wrap",
              gap:          "0.875rem",
              marginBottom: "3rem",
              animation:    "fadeUp 0.7s var(--ease-elastic) 0.25s both",
            }}>
              <Link href="/#products" className="btn-primary">
                See What We Build
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/about" className="btn-secondary">
                Our Story
              </Link>
            </div>

            {/* Stats row */}
            <div style={{
              display:             "none",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap:                 "0.75rem",
              animation:           "fadeUp 0.7s var(--ease-elastic) 0.35s both",
            }}>
              {stats.map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding:      "1rem 1.125rem",
                    borderRadius: "var(--radius-card)",
                    border:       "1px solid var(--border)",
                    background:   "var(--bg-card)",
                    transition:   "border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-border)";
                    e.currentTarget.style.boxShadow   = "0 0 20px rgba(6,182,212,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.boxShadow   = "none";
                  }}
                >
                  <div style={{
                    fontFamily:    "var(--font-mono)",
                    fontSize:      "1.5rem",
                    fontWeight:    700,
                    color:         "#FFFFFF",
                    letterSpacing: "-0.02em",
                    lineHeight:    1,
                    marginBottom:  "0.375rem",
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontSize:   "0.72rem",
                    color:      "var(--text-muted)",
                    fontFamily: "var(--font-body)",
                    lineHeight: 1.5,
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Abstract Visual ── */}
          <Image src="/india-maps.png" alt="Map of India" width={400} height={460}
                      style={{ width: "100%", height: "auto", filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.1))" }}
                    />

        </div>

        {/* ── Scroll indicator ── */}
        <div style={{
          display:       "flex",
          flexDirection: "column",
          alignItems:    "center",
          gap:           "0.5rem",
          marginTop:     "4rem",
          animation:     "fadeIn 1s ease 1s both",
        }}>
          <span style={{
            fontSize:      "0.6rem",
            color:         "var(--text-muted)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontFamily:    "var(--font-body)",
          }}>
            Scroll
          </span>
          <button
            onClick={scrollDown}
            aria-label="Scroll down"
            style={{
              width:          "22px",
              height:         "36px",
              borderRadius:   "11px",
              border:         "1px solid var(--border-strong)",
              background:     "transparent",
              display:        "flex",
              justifyContent: "center",
              paddingTop:     "5px",
              cursor:         "pointer",
            }}
          >
            <div style={{
              width:        "3px",
              height:       "7px",
              borderRadius: "2px",
              background:   "var(--accent)",
              animation:    "fadeUp 1.5s ease infinite",
            }} />
          </button>
        </div>

      </div>

      <style>{`
        @keyframes heroSwap {
          0%   { opacity: 0; transform: translateY(20px); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0);    filter: blur(0);   }
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}