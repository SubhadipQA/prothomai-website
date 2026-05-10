"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { categoryColors, categoryIcons } from "../../lib/constants";

export default function InsightsStrip({ posts = [] }) {
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
      id="insights"
      ref={sectionRef}
      style={{
        background: "var(--bg-surface)",
        borderTop:  "1px solid var(--border)",
        position:   "relative",
        overflow:   "hidden",
      }}
    >
      {/* Glow bottom right */}
      <div style={{
        position:     "absolute",
        bottom:       "-80px", right: "-80px",
        width:        "400px", height: "400px",
        borderRadius: "9999px",
        background:   "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)",
        pointerEvents:"none",
      }} />

      <div className="section-wrap section-pad">

        {/* ── Header ── */}
        <div
          className="reveal"
          style={{
            display:        "flex",
            alignItems:     "flex-end",
            justifyContent: "space-between",
            flexWrap:       "wrap",
            gap:            "1.5rem",
            marginBottom:   "3rem",
          }}
        >
          <div>
            <span className="section-label">Insights</span>
            <h2 className="section-heading">
              Research &{" "}
              <span style={{ color: "var(--accent)" }}>findings.</span>
            </h2>
            <p className="section-sub">
              We publish what we learn — from the field,
              from building and from watching how Indian
              cities actually work.
            </p>
          </div>

          <Link
            href="/insights"
            className="btn-secondary"
            style={{ flexShrink: 0, alignSelf: "flex-start", marginTop: "3rem" }}
          >
            All Insights
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* ── Cards Grid ── */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr",
            gap:                 "1.25rem",
          }}
          className="insights-grid"
        >
          {posts.length === 0 ? (
            <div
              className="reveal"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-card)",
                padding: "2.5rem 2rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  margin: "0 auto 1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(6,182,212,0.08)",
                  border: "1px solid rgba(6,182,212,0.2)",
                  fontSize: "1.5rem",
                }}
              >
                ✍️
              </div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--text-body)",
                  fontFamily: "var(--font-heading)",
                  marginBottom: "0.625rem",
                }}
              >
                No insights published yet.
              </h3>
              <p
                style={{
                  maxWidth: "480px",
                  margin: "0 auto",
                  fontSize: "0.85rem",
                  lineHeight: 1.75,
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-body)",
                }}
              >
                This section will stay here and automatically show your articles once you add them.
              </p>
            </div>
          ) : posts.map((post, i) => {
            const cat    = categoryColors[post.categorySlug] || categoryColors["product"];
            const icon   = categoryIcons[post.categorySlug]  || "📄";
            const hasCover = Boolean(post.cover);

            return (
              <div
                key={post.slug}
                ref={(el) => (cardsRef.current[i] = el)}
                style={{
                  background:   "var(--bg-card)",
                  border:       "1px solid var(--border)",
                  borderRadius: "var(--radius-card)",
                  overflow:     "hidden",
                  display:      "flex",
                  flexDirection:"column",
                  opacity:      0,
                  transform:    "translateY(32px)",
                  transition:   `opacity 0.8s var(--ease-elastic) ${i * 120}ms,
                                transform 0.8s var(--ease-elastic) ${i * 120}ms,
                                border-color 0.4s ease,
                                box-shadow 0.4s ease`,
                  cursor:       "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-border)";
                  e.currentTarget.style.boxShadow   = "0 0 28px rgba(6,182,212,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow   = "none";
                }}
              >

                {/* ── Cover Image ── */}
                <div style={{
                  height:   "180px",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: 0,
                  background: hasCover
                    ? "var(--bg-elevated)"
                    : `linear-gradient(135deg, ${cat.bg} 0%, rgba(15,23,42,0.8) 100%)`,
                }}>
                  {hasCover ? (
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover", opacity: 0.85 }}
                    />
                  ) : (
                    /* Placeholder when no cover */
                    <div style={{
                      position:       "absolute",
                      inset:          0,
                      display:        "flex",
                      alignItems:     "center",
                      justifyContent: "center",
                    }}>
                      {/* Dot pattern inside placeholder */}
                      <div className="dot-pattern" style={{
                        position:     "absolute", inset: 0,
                        pointerEvents:"none", opacity: 0.4,
                      }} />
                      <div style={{
                        width:          "52px",
                        height:         "52px",
                        borderRadius:   "14px",
                        background:     cat.bg,
                        border:         `1px solid ${cat.border}`,
                        display:        "flex",
                        alignItems:     "center",
                        justifyContent: "center",
                        fontSize:       "1.5rem",
                        position:       "relative",
                        zIndex:         1,
                      }}>
                        {icon}
                      </div>
                    </div>
                  )}

                  {/* Read time pill */}
                  <div style={{
                    position:     "absolute",
                    top:          "0.875rem",
                    right:        "0.875rem",
                    background:   "rgba(11,17,32,0.75)",
                    backdropFilter:"blur(8px)",
                    border:       "1px solid var(--border)",
                    borderRadius: "9999px",
                    padding:      "0.2rem 0.625rem",
                    fontSize:     "0.62rem",
                    fontWeight:   700,
                    color:        "var(--text-body)",
                    fontFamily:   "var(--font-body)",
                    letterSpacing:"0.06em",
                  }}>
                    {post.readTime}
                  </div>
                </div>

                {/* ── Card Content ── */}
                <div style={{
                  padding:       "1.5rem",
                  display:       "flex",
                  flexDirection: "column",
                  gap:           "0.75rem",
                  flex:          1,
                }}>

                  {/* Category tag */}
                  <div style={{
                    display:      "inline-flex",
                    width:        "fit-content",
                    alignItems:   "center",
                    padding:      "0.2rem 0.75rem",
                    borderRadius: "9999px",
                    background:   cat.bg,
                    border:       `1px solid ${cat.border}`,
                  }}>
                    <span style={{
                      fontSize:      "0.6rem",
                      fontWeight:    700,
                      color:         cat.color,
                      letterSpacing: "0.08em",
                      fontFamily:    "var(--font-body)",
                    }}>
                      {post.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Title — clickable */}
                  <h3 style={{
                    fontSize:      "0.95rem",
                    fontWeight:    700,
                    lineHeight:    1.4,
                    letterSpacing: "-0.01em",
                    fontFamily:    "var(--font-heading)",
                    flex:          1,
                  }}>
                    <Link
                      href={`/insights/${post.slug}`}
                      style={{
                        color:      "#FFFFFF",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "#FFFFFF"}
                    >
                      {post.title}
                    </Link>
                  </h3>

                  {/* Summary */}
                  <p style={{
                    fontSize:   "0.8rem",
                    color:      "var(--text-muted)",
                    lineHeight: 1.7,
                    fontFamily: "var(--font-body)",
                    display:    "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient:"vertical",
                    overflow:   "hidden",
                  }}>
                    {post.summary}
                  </p>

                  {/* Tags — visual only, no links */}
                  <div style={{
                    display:  "flex",
                    flexWrap: "wrap",
                    gap:      "0.375rem",
                  }}>
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize:      "0.6rem",
                          fontWeight:    600,
                          padding:       "0.15rem 0.5rem",
                          borderRadius:  "9999px",
                          background:    "var(--bg-elevated)",
                          border:        "1px solid var(--border)",
                          color:         "var(--text-muted)",
                          fontFamily:    "var(--font-body)",
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="divider-gradient" />

                  {/* Footer */}
                  <div style={{
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "space-between",
                  }}>
                    {/* Author */}
                    <div style={{
                      display:    "flex",
                      alignItems: "center",
                      gap:        "0.5rem",
                    }}>
                      <div style={{
                        width:          "24px",
                        height:         "24px",
                        borderRadius:   "6px",
                        //background:     "var(--accent)",
                        display:        "flex",
                        alignItems:     "center",
                        justifyContent: "center",
                        fontFamily:     "var(--font-heading)",
                        fontWeight:     800,
                        fontSize:       "0.7rem",
                        color:          "#0B1120",
                        flexShrink:     0,
                      }}>
                        <Image
                            src="/p_only.png"
                            alt="Prothom AI"
                            width={32}
                            height={40}
                            style={{ width: "24px", height: "auto", flexShrink: 0 }}
                        />
                      </div>
                      <div>
                        <div style={{
                          fontSize:   "0.68rem",
                          fontWeight: 600,
                          color:      "var(--text-body)",
                          fontFamily: "var(--font-body)",
                        }}>
                          {post.author}
                        </div>
                        <div style={{
                          fontSize:   "0.6rem",
                          color:      "var(--text-muted)",
                          fontFamily: "var(--font-body)",
                        }}>
                          {post.publishedAt}
                        </div>
                      </div>
                    </div>

                    {/* Read link */}
                    <Link
                      href={`/insights/${post.slug}`}
                      style={{
                        display:    "flex",
                        alignItems: "center",
                        gap:        "0.25rem",
                        fontSize:   "0.72rem",
                        fontWeight: 700,
                        color:      "var(--accent)",
                        fontFamily: "var(--font-body)",
                        transition: "gap 0.3s var(--ease-elastic)",
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.gap = "0.5rem"}
                      onMouseLeave={(e) => e.currentTarget.style.gap = "0.25rem"}
                    >
                      Read
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .insights-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}