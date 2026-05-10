"use client";

import Image from "next/image";
import Link from "next/link";
import { footerLinks, socialLinks } from "../../lib/constants";

const socialIcons = {
  LinkedIn: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  YouTube: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
        fill="currentColor" stroke="none" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-surface)",
        borderTop:  "1px solid var(--border)",
        position:   "relative",
        overflow:   "hidden",
      }}
    >
      {/* Dot pattern */}
      <div className="dot-pattern" style={{
        position:     "absolute", inset: 0,
        pointerEvents:"none", opacity: 0.25,
      }} />

      {/* Glow bottom center */}
      <div style={{
        position:     "absolute",
        bottom:       "-100px", left: "50%",
        transform:    "translateX(-50%)",
        width:        "500px", height: "300px",
        borderRadius: "9999px",
        background:   "radial-gradient(ellipse, rgba(6,182,212,0.05) 0%, transparent 70%)",
        pointerEvents:"none",
      }} />

      <div className="section-wrap" style={{ position: "relative", zIndex: 1 }}>

        {/* ══ TOP — Brand + Links ══ */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr",
            gap:                 "3rem",
            padding:             "4rem 0 3rem",
            borderBottom:        "1px solid var(--border)",
          }}
          className="footer-top"
        >

          {/* ── Brand col ── */}
          <div>
            {/* Logo */}
            <Link href="/" style={{ display: "inline-flex", marginBottom: "1.25rem" }}>
              <Image
                src="/paiwhite.png"
                alt="Prothom AI"
                width={140}
                height={140}
                style={{ width: "130px", height: "auto" }}
              />
            </Link>

            <p style={{
              fontSize:     "0.85rem",
              color:        "var(--text-muted)",
              lineHeight:   1.8,
              maxWidth:     "280px",
              fontFamily:   "var(--font-body)",
              marginBottom: "1.5rem",
            }}>
              Research-first technology company building
              organized systems for India&apos;s most
              ignored problems.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width:          "34px",
                    height:         "34px",
                    borderRadius:   "8px",
                    background:     "var(--bg-elevated)",
                    border:         "1px solid var(--border)",
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    color:          "var(--text-muted)",
                    transition:     "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background   = "var(--accent-strong)";
                    e.currentTarget.style.borderColor  = "var(--accent-border)";
                    e.currentTarget.style.color        = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background   = "var(--bg-elevated)";
                    e.currentTarget.style.borderColor  = "var(--border)";
                    e.currentTarget.style.color        = "var(--text-muted)";
                  }}
                >
                  {socialIcons[s.label]}
                </a>
              ))}
            </div>
          </div>

          {/* ── Link columns ── */}
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap:                 "2rem",
            }}
            className="footer-links"
          >
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <div style={{
                  fontSize:      "0.62rem",
                  fontWeight:    700,
                  color:         "var(--text-muted)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom:  "1.25rem",
                  fontFamily:    "var(--font-body)",
                }}>
                  {group}
                </div>
                <div style={{
                  display:       "flex",
                  flexDirection: "column",
                  gap:           "0.625rem",
                }}>
                  {links.map((link) =>
                    link.external ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize:   "0.82rem",
                          color:      "var(--text-muted)",
                          fontFamily: "var(--font-body)",
                          fontWeight: 500,
                          transition: "color 0.2s ease",
                          display:    "inline-flex",
                          alignItems: "center",
                          gap:        "0.25rem",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "#FFFFFF"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
                      >
                        {link.label}
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2.5"
                          strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        key={link.label}
                        href={link.href}
                        style={{
                          fontSize:   "0.82rem",
                          color:      "var(--text-muted)",
                          fontFamily: "var(--font-body)",
                          fontWeight: 500,
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "#FFFFFF"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ══ BOTTOM — Copyright ══ */}
        <div style={{
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          flexWrap:       "wrap",
          gap:            "1rem",
          padding:        "1.5rem 0",
        }}>

          {/* Copyright */}
          <div style={{
            fontSize:   "0.72rem",
            color:      "var(--text-muted)",
            fontFamily: "var(--font-body)",
            lineHeight: 1.6,
          }}>
            © {new Date().getFullYear()} Prothom Analytica India Pvt. Ltd.
            All rights reserved.
          </div>

          {/* Legal links */}
          <div style={{
            display:    "flex",
            alignItems: "center",
            gap:        "1.5rem",
            flexWrap:   "wrap",
          }}>
            {[
              { label: "Privacy Policy",   href: "/privacy" },
              { label: "Terms of Service", href: "/terms"   },
              { label: "Cookie Policy",    href: "/cookies" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontSize:   "0.7rem",
                  color:      "var(--text-muted)",
                  fontFamily: "var(--font-body)",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Made in India */}
          <div style={{
            display:    "flex",
            alignItems: "center",
            gap:        "0.375rem",
            fontSize:   "0.7rem",
            color:      "var(--text-muted)",
            fontFamily: "var(--font-body)",
          }}>
            Made with
            <span style={{ color: "#F87171" }}>♥</span>
            in India
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-top {
            grid-template-columns: 260px 1fr !important;
          }
          .footer-links {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </footer>
  );
}