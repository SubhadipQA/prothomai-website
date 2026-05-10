"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const sectionRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const onMove = (event) => {
      if (!glowRef.current) return;
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      glowRef.current.style.background = `radial-gradient(ellipse 50% 42% at ${x}% ${y}%, rgba(6,182,212,0.07) 0%, transparent 72%)`;
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
        overflow:   "hidden",
        background: "var(--bg-page)",
      }}
    >
      <div className="grid-pattern" style={{
        position: "absolute", inset: 0,
        pointerEvents: "none", opacity: 0.15,
      }} />

      <div ref={glowRef} style={{
        position: "absolute", inset: 0,
        pointerEvents: "none",
        transition: "background 0.45s ease",
      }} />

      <div style={{
        position:     "absolute",
        top:          "-20%",
        right:        "-10%",
        width:        "70vw",
        height:       "70vw",
        maxWidth:     "800px",
        maxHeight:    "800px",
        borderRadius: "9999px",
        background:   "radial-gradient(ellipse, rgba(6,182,212,0.10) 0%, rgba(6,182,212,0.04) 40%, transparent 70%)",
        pointerEvents:"none",
        animation:    "orbBreath 8s ease-in-out infinite",
      }} />

      <div style={{
        position:     "absolute",
        bottom:       "-15%",
        left:         "-10%",
        width:        "50vw",
        height:       "50vw",
        maxWidth:     "600px",
        maxHeight:    "600px",
        borderRadius: "9999px",
        background:   "radial-gradient(ellipse, rgba(6,182,212,0.06) 0%, transparent 65%)",
        pointerEvents:"none",
        animation:    "orbBreath 10s ease-in-out infinite reverse",
      }} />

      <div style={{
        position:     "absolute",
        top:          0, left: 0, right: 0,
        height:       "300px",
        background:   "linear-gradient(180deg, rgba(11,17,32,0.8) 0%, transparent 100%)",
        pointerEvents:"none",
      }} />

      <div style={{
        position:     "absolute",
        bottom:       0, left: 0, right: 0,
        height:       "200px",
        background:   "linear-gradient(0deg, rgba(11,17,32,0.6) 0%, transparent 100%)",
        pointerEvents:"none",
      }} />

      <div
        className="section-wrap section-pad"
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "grid",
          alignItems: "center",
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
      >
        <div className="hero-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
          alignItems: "center",
        }}>
          <div style={{ maxWidth: "620px" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.5rem",
              animation: "fadeUp 0.6s var(--ease-elastic) both",
            }}>
              <Image
                src="/p_only.png"
                alt="Prothom AI"
                width={28}
                height={34}
                priority
                style={{ width: "22px", height: "auto", flexShrink: 0 }}
              />
              <span style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent)",
                fontFamily: "var(--font-body)",
              }}>
                Prothom AI
              </span>
            </div>

            <h1 style={{
              fontSize: "clamp(2.4rem, 5.8vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontFamily: "var(--font-heading)",
              marginBottom: "1.5rem",
              maxWidth: "760px",
              background: "linear-gradient(180deg, #FFFFFF 0%, #94A3B8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "fadeUp 0.75s var(--ease-elastic) 0.05s both",
            }}>
              Organizing what India has ignored.
            </h1>

            <p style={{
              fontSize: "clamp(0.98rem, 1.8vw, 1.1rem)",
              color: "var(--text-body)",
              lineHeight: 1.85,
              maxWidth: "520px",
              marginBottom: "2.25rem",
              fontFamily: "var(--font-body)",
              animation: "fadeUp 0.75s var(--ease-elastic) 0.15s both",
            }}>
              We build organized systems for India&apos;s most ignored operational problems. We begin with ground research, then turn fragmented behavior into products that can scale.
            </p>

            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.875rem",
              animation: "fadeUp 0.75s var(--ease-elastic) 0.25s both",
            }}>
              <Link href="/#products" className="btn-primary" style={{ padding: "0.875rem 1.75rem" }}>
                See What We Build
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-secondary" style={{ padding: "0.875rem 1.75rem" }}>
                Contact Us
              </Link>
            </div>
          </div>

          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "fadeIn 1s var(--ease-elastic) 0.35s both",
          }}>
            <div style={{
              width: "100%",
              // maxWidth: "430px",
              filter: "drop-shadow(0 16px 48px rgba(6,182,212,0.08))",
            }}>
              <Image
                src="/indiamap.png"
                alt="Map of India"
                width={400}
                height={460}
                priority
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>

        <div style={{
          display:       "flex",
          flexDirection: "column",
          alignItems:    "center",
          gap:           "0.5rem",
          position:      "absolute",
          left:          "50%",
          bottom:        "2.5rem",
          transform:     "translateX(-50%)",
          zIndex:        2,
          animation:     "fadeIn 1s ease 0.8s both",
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
        @keyframes orbBreath {
          0%, 100% { transform: scale(1);    opacity: 1; }
          50%       { transform: scale(1.08); opacity: 0.8; }
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: minmax(0, 1.1fr) minmax(360px, 0.9fr) !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
}