"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const headlines = [
  "We go deep where others don't bother.",
  "India's problems don't lack attention. They lack systems.",
  "Research first. Build once. Scale forever.",
];

const stats = [
  { value: "₹800Cr+", label: "Lost annually in just one sector we are fixing"       },
  { value: "Months",  label: "We spend researching before writing a single line of code" },
  { value: "1",       label: "Problem at a time. Researched fully. Built to last."   },
  { value: "3+",      label: "Indian cities already inside our first system"          },
];

/* City coordinates as percentage of SVG viewBox 0 0 400 460 */
const cities = [
  { name: "Delhi",        x: 178, y: 108, primary: false },
  { name: "Mumbai",       x: 118, y: 228, primary: false },
  { name: "Bengaluru",    x: 158, y: 318, primary: false },
  { name: "Kolkata",      x: 272, y: 192, primary: true  }, /* home base */
  { name: "Hyderabad",    x: 178, y: 268, primary: false },
  { name: "Pune",         x: 130, y: 248, primary: false },
  { name: "Bhubaneswar",  x: 258, y: 222, primary: false },
];

/* Connections between cities — pairs of indices */
const connections = [
  [0, 3], /* Delhi — Kolkata      */
  [0, 1], /* Delhi — Mumbai       */
  [1, 4], /* Mumbai — Hyderabad   */
  [1, 5], /* Mumbai — Pune        */
  [3, 6], /* Kolkata — Bhubaneswar*/
  [4, 2], /* Hyderabad — Bengaluru*/
  [6, 4], /* Bhubaneswar — Hyderabad */
];

export default function HeroOld2() {
  const [activeLine, setActiveLine] = useState(0);
  const [mounted,    setMounted]    = useState(false);
  const sectionRef  = useRef(null);
  const glowRef     = useRef(null);

  useEffect(() => { setMounted(true); }, []);

  /* ── Headline rotator ── */
  useEffect(() => {
    const t = setInterval(() => {
      setActiveLine((p) => (p + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  /* ── Subtle mouse glow ── */
  useEffect(() => {
    const onMove = (e) => {
      if (!glowRef.current) return;
      const x = (e.clientX / window.innerWidth)  * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      glowRef.current.style.background =
        `radial-gradient(ellipse 55% 45% at ${x}% ${y}%, rgba(6,182,212,0.06) 0%, transparent 70%)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const scrollDown = () => {
    sectionRef.current?.nextElementSibling?.scrollIntoView({
      behavior: "smooth", block: "start",
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
      {/* ── Background ── */}
      <div className="grid-pattern" style={{
        position: "absolute", inset: 0,
        pointerEvents: "none", opacity: 0.18,
      }} />
      <div ref={glowRef} style={{
        position: "absolute", inset: 0,
        pointerEvents: "none",
        transition: "background 0.5s ease",
      }} />
      <div style={{
        position:     "absolute",
        top:          "-100px", left: "50%",
        transform:    "translateX(-50%)",
        width:        "600px", height: "380px",
        borderRadius: "9999px",
        background:   "radial-gradient(ellipse, rgba(6,182,212,0.07) 0%, transparent 70%)",
        pointerEvents:"none",
      }} />

      {/* ── Main Content ── */}
      <div
        className="section-wrap"
        style={{
          position: "relative", zIndex: 1,
          width: "100%",
          paddingTop: "7rem", paddingBottom: "5rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >

          {/* ══ LEFT ══ */}
          <div style={{ maxWidth: "620px" }}>

            {/* Label */}
            <div style={{
              display: "inline-flex", alignItems: "center",
              gap: "0.5rem", marginBottom: "1.75rem",
              animation: "fadeUp 0.6s var(--ease-elastic) both",
            }}>
              <div style={{
                width: "28px", height: "28px",
                borderRadius: "8px",
                background: "var(--accent)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-heading)",
                fontWeight: 800, fontSize: "0.875rem",
                color: "#0B1120",
              }}>
                P
              </div>
              <span style={{
                fontSize: "0.7rem", fontWeight: 700,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "var(--accent)", fontFamily: "var(--font-body)",
              }}>
                Prothom AI
              </span>
            </div>

            {/* Rotating Headline */}
            <h1 style={{
              fontSize: "clamp(2.1rem, 5vw, 3.75rem)",
              fontWeight: 800, lineHeight: 1.08,
              letterSpacing: "-0.03em",
              fontFamily: "var(--font-heading)",
              marginBottom: "1.75rem",
              minHeight: "2.5em",
            }}>
              {mounted && (
                <span
                  key={activeLine}
                  style={{
                    display: "block",
                    background: "linear-gradient(180deg, #FFFFFF 0%, #94A3B8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor:  "transparent",
                    backgroundClip: "text",
                    animation: "heroSwap 0.7s var(--ease-elastic) both",
                  }}
                >
                  {headlines[activeLine]}
                </span>
              )}
            </h1>

            {/* Subtext */}
            <p style={{
              fontSize: "clamp(0.9rem, 1.7vw, 1.05rem)",
              color: "var(--text-body)", lineHeight: 1.85,
              maxWidth: "480px", marginBottom: "2.25rem",
              fontFamily: "var(--font-body)",
              animation: "fadeUp 0.7s var(--ease-elastic) 0.15s both",
            }}>
              India&apos;s most pressing problems are not technology problems.
              They are{" "}
              <span style={{ color: "var(--accent)" }}>organization problems.</span>{" "}
              We research them at ground level — then we build.
            </p>

            {/* CTAs */}
            <div style={{
              display: "flex", flexWrap: "wrap",
              gap: "0.875rem", marginBottom: "3rem",
              animation: "fadeUp 0.7s var(--ease-elastic) 0.25s both",
            }}>
              <Link href="/#products" className="btn-primary">
                See What We Build
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/about" className="btn-secondary">
                Our Story
              </Link>
            </div>

            {/* Stats */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0.625rem",
              animation: "fadeUp 0.7s var(--ease-elastic) 0.35s both",
            }}>
              {stats.map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1rem 1.125rem",
                    borderRadius: "var(--radius-card)",
                    border: "1px solid var(--border)",
                    background: "var(--bg-card)",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
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
                    fontFamily: "var(--font-mono)",
                    fontSize: "1.4rem", fontWeight: 700,
                    color: "#FFFFFF", letterSpacing: "-0.02em",
                    lineHeight: 1, marginBottom: "0.375rem",
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontSize: "0.7rem", color: "var(--text-muted)",
                    fontFamily: "var(--font-body)", lineHeight: 1.5,
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ══ RIGHT — India Map PNG ══ */}
          <Image src="/india-maps.png" alt="Map of India" width={400} height={460}
            style={{ width: "100%", height: "auto", filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.1))" }}
          />

        </div>

        {/* ── Scroll indicator ── */}
        <div style={{
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: "0.5rem",
          marginTop: "4rem",
          animation: "fadeIn 1s ease 1s both",
        }}>
          <span style={{
            fontSize: "0.6rem", color: "var(--text-muted)",
            letterSpacing: "0.14em", textTransform: "uppercase",
            fontFamily: "var(--font-body)",
          }}>
            Scroll
          </span>
          <button
            onClick={scrollDown}
            aria-label="Scroll down"
            style={{
              width: "22px", height: "36px",
              borderRadius: "11px",
              border: "1px solid var(--border-strong)",
              background: "transparent",
              display: "flex", justifyContent: "center",
              paddingTop: "5px", cursor: "pointer",
            }}
          >
            <div style={{
              width: "3px", height: "7px",
              borderRadius: "2px", background: "var(--accent)",
              animation: "fadeUp 1.5s ease infinite",
            }} />
          </button>
        </div>

      </div>

      <style>{`
        @keyframes heroSwap {
          0%   { opacity: 0; transform: translateY(18px); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0);    filter: blur(0);   }
        }
        @media (min-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}