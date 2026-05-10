"use client";

import { useEffect, useRef } from "react";
import { Check } from "lucide-react";

const products = [
  {
    name:    "YPRAK",
    tagline: "For Customers & Drivers",
    desc:    "The parking experience reimagined for the person behind the wheel.",
    points:  [
      "Find available parking near you",
      "Book in advance or arrive directly",
      "Digital payment — cash or UPI",
      "Full parking history in one place",
    ],
    color:   "#06B6D4",
  },
  {
    name:    "YPARTNER",
    tagline: "For Owners & Staff",
    desc:    "Every parking zone — organized, accountable and revenue-visible.",
    points:  [
      "Digital entry & exit logging",
      "Monthly pass management automated",
      "Staff accountability & tracking",
      "Real-time revenue visibility",
    ],
    color:   "#8B5CF6",
    featured: true,
  },
  {
    name:    "YADMIN",
    tagline: "For City & Zone Managers",
    desc:    "The command centre for everyone managing operations at scale.",
    points:  [
      "Monitor all zones from one dashboard",
      "City-level revenue & occupancy data",
      "Pattern recognition across areas",
      "Full ecosystem control in one place",
    ],
    color:   "#F59E0B",
  },
];

export default function Ecosystem() {
  const sectionRef = useRef(null);
  const cardsRef   = useRef([]);

  /* ── Section reveal ── */
  useEffect(() => {
    const reveal = (section) => {
      section
        .querySelectorAll(".reveal, .reveal-scale")
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
      id="products"
      ref={sectionRef}
      style={{
        background: "#F7FAFC",
        borderTop:  "1px solid rgba(15, 23, 42, 0.08)",
        position:   "relative",
        overflow:   "hidden",
        color:      "#0F172A",
        "--text-body": "#475569",
        "--text-muted": "#64748B",
        "--border": "rgba(15, 23, 42, 0.10)",
        "--border-strong": "rgba(15, 23, 42, 0.16)",
        "--bg-card": "#FFFFFF",
        "--bg-surface": "#F0F7FF",
        "--bg-card-hover": "#F8FBFF",
      }}
    >
      {/* Glow top right */}
      <div style={{
        position:     "absolute",
        top:          "-100px", right: "-100px",
        width:        "500px",  height: "500px",
        borderRadius: "9999px",
        background:   "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
        pointerEvents:"none",
      }} />

      {/* Dot pattern */}
      <div className="dot-pattern" style={{
        position:     "absolute", inset: 0,
        pointerEvents:"none", opacity: 0.3,
      }} />

      <div className="section-wrap section-pad">

        {/* ── Header ── */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label">Our Ecosystem</span>
          <h2 className="section-heading" style={{ margin: "0 auto", color: "#0F172A", background: "none", WebkitTextFillColor: "#0F172A" }}>
            One mission.{" "}
            <span style={{ color: "var(--accent)" }}>Three systems.</span>
          </h2>
          <p className="section-sub" style={{ margin: "1rem auto 0", textAlign: "center" }}>
            Not three separate products — one connected ecosystem
            built to organize every side of the problem at once.
          </p>
        </div>

        {/* ── Product Cards ── */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr",
            gap:                 "1.25rem",
          }}
          className="eco-grid"
        >
          {products.map((p, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              style={{
                background:   p.featured ? "var(--bg-surface)" : "var(--bg-card)",
                border:       p.featured
                  ? `1px solid ${p.color}30`
                  : "1px solid var(--border)",
                borderRadius: "var(--radius-card)",
                padding:      "2rem",
                opacity:      0,
                transform:    "translateY(32px)",
                transition:   `opacity 0.8s var(--ease-elastic) ${i * 120}ms,
                              transform 0.8s var(--ease-elastic) ${i * 120}ms,
                              border-color 0.4s ease,
                              box-shadow 0.4s ease`,
                cursor:       "default",
                position:     "relative",
                overflow:     "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${p.color}40`;
                e.currentTarget.style.boxShadow   = `0 0 32px ${p.color}08`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = p.featured
                  ? `${p.color}30`
                  : "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Top accent line */}
              <div style={{
                position:   "absolute",
                top: 0, left: 0, right: 0,
                height:     "2px",
                background: `linear-gradient(90deg, ${p.color}, transparent)`,
              }} />

              {/* Product name */}
              <div style={{
                display:      "flex",
                alignItems:   "flex-start",
                justifyContent:"space-between",
                marginBottom: "0.625rem",
                flexWrap:     "wrap",
                gap:          "0.5rem",
              }}>
                <h3 style={{
                  fontSize:      "1.5rem",
                  fontWeight:    800,
                  color:         "#0F172A",
                  fontFamily:    "var(--font-heading)",
                  letterSpacing: "-0.03em",
                  lineHeight:    1,
                }}>
                  {p.name}
                </h3>

                {/* Tagline badge */}
                <span style={{
                  fontSize:      "0.62rem",
                  fontWeight:    700,
                  letterSpacing: "0.08em",
                  color:         p.color,
                  background:    `${p.color}12`,
                  border:        `1px solid ${p.color}25`,
                  borderRadius:  "9999px",
                  padding:       "0.2rem 0.75rem",
                  fontFamily:    "var(--font-body)",
                  whiteSpace:    "nowrap",
                }}>
                  {p.tagline}
                </span>
              </div>

              {/* Desc */}
              <p style={{
                fontSize:     "0.85rem",
                color:        "var(--text-body)",
                lineHeight:   1.7,
                fontFamily:   "var(--font-body)",
                marginBottom: "1.5rem",
              }}>
                {p.desc}
              </p>

              {/* Divider */}
              <div className="divider-gradient" style={{ marginBottom: "1.5rem" }} />

              {/* Bullet points */}
              <div style={{
                display:       "flex",
                flexDirection: "column",
                gap:           "0.625rem",
              }}>
                {p.points.map((point, j) => (
                  <div
                    key={j}
                    style={{
                      display:    "flex",
                      alignItems: "flex-start",
                      gap:        "0.625rem",
                    }}
                  >
                    <div style={{
                      width:          "18px",
                      height:         "18px",
                      borderRadius:   "9999px",
                      background:     `${p.color}12`,
                      border:         `1px solid ${p.color}25`,
                      display:        "flex",
                      alignItems:     "center",
                      justifyContent: "center",
                      flexShrink:     0,
                      marginTop:      "1px",
                      color:          p.color,
                    }}>
                      <Check size={10} strokeWidth={2.5} />
                    </div>
                    <span style={{
                      fontSize:   "0.82rem",
                      color:      "var(--text-body)",
                      fontFamily: "var(--font-body)",
                      lineHeight: 1.6,
                    }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          className="reveal"
          style={{
            marginTop:      "4rem",
            display:        "flex",
            flexDirection:  "column",
            alignItems:     "center",
            gap:            "1rem",
            textAlign:      "center",
          }}
        >
          <p style={{
            fontSize:   "0.9rem",
            color:      "var(--text-muted)",
            fontFamily: "var(--font-body)",
          }}>
            Ready to see the ecosystem in action?
          </p>
          <a
            href="https://ypark.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "0.875rem 2rem" }}
          >
            Visit YPark
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .eco-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}