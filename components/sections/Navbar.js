"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../../lib/constants";

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Lock body when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ══════════════════════════════════
          HEADER
      ══════════════════════════════════ */}
      <header
        style={{
          position:        "fixed",
          top: 0, left: 0, right: 0,
          zIndex:          50,
          transition:      "all 0.4s ease",
          backgroundColor: scrolled ? "rgba(11, 17, 32, 0.92)" : "transparent",
          backdropFilter:  scrolled ? "blur(16px)"              : "none",
          borderBottom:    scrolled ? "1px solid rgba(148,163,184,0.1)" : "1px solid transparent",
        }}
      >
        <div className="section-wrap">
          <div style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            height:         "68px",
          }}>

            {/* ── Logo ── */}
            <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <Image
                src="/paiwhite.png"
                alt="Prothom Analytica India"
                width={120}
                height={120}
                priority
                style={{ width: "auto", height: "auto" }}
              />
            </Link>

            {/* ── Desktop Nav ── */}
            <nav
              className="show-desktop"
              style={{ gap: "2.5rem", alignItems: "center" }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize:      "0.875rem",
                    fontWeight:    500,
                    color:         "rgba(148,163,184,0.9)",
                    fontFamily:    "var(--font-body)",
                    transition:    "color 0.2s ease",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#FFFFFF"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "rgba(148,163,184,0.9)"}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="show-desktop" style={{ gap: "0.75rem", alignItems: "center" }}>
              <a
                href="https://ypark.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize:   "0.875rem",
                  fontWeight: 500,
                  color:      "rgba(148,163,184,0.9)",
                  fontFamily: "var(--font-body)",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(148,163,184,0.9)"}
              >
                Visit YPark →
              </a>

              <Link href="/contact" className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.825rem" }}>
                Get in Touch
              </Link>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              className="show-mobile"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                background:     "none",
                border:         "none",
                cursor:         "pointer",
                padding:        "0.5rem",
                flexDirection:  "column",
                gap:            "5px",
                alignItems:     "center",
                justifyContent: "center",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display:      "block",
                    width:        "22px",
                    height:       "2px",
                    background:   "#FFFFFF",
                    borderRadius: "2px",
                    transition:   "all 0.3s ease",
                    transform:
                      menuOpen
                        ? i === 0 ? "translateY(7px) rotate(45deg)"
                        : i === 2 ? "translateY(-7px) rotate(-45deg)"
                        : "none"
                        : "none",
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>

          </div>
        </div>
      </header>

      {/* ══════════════════════════════════
          MOBILE MENU OVERLAY
      ══════════════════════════════════ */}
      <div style={{
        position:      "fixed",
        inset:         0,
        zIndex:        40,
        background:    "rgba(11, 17, 32, 0.98)",
        backdropFilter:"blur(20px)",
        display:       "flex",
        flexDirection: "column",
        padding:       "5.5rem 1.5rem 2rem",
        transition:    "all 0.4s var(--ease-elastic)",
        opacity:       menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? "all" : "none",
        transform:     menuOpen ? "translateY(0)" : "translateY(-12px)",
      }}>

        {/* Nav links */}
        <nav style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize:     "2rem",
                fontWeight:   800,
                color:        i === 0 ? "#FFFFFF" : "rgba(148,163,184,0.6)",
                fontFamily:   "var(--font-heading)",
                letterSpacing:"-0.03em",
                padding:      "1rem 0",
                borderBottom: "1px solid rgba(148,163,184,0.08)",
                transition:   "color 0.2s ease",
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#FFFFFF"}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = i === 0 ? "#FFFFFF" : "rgba(148,163,184,0.6)";
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom CTAs */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "2rem" }}>
          <Link
            href="/contact"
            className="btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{ justifyContent: "center", fontSize: "1rem", padding: "1rem" }}
          >
            Get in Touch
          </Link>
          <a
            href="https://ypark.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            onClick={() => setMenuOpen(false)}
            style={{ justifyContent: "center", fontSize: "1rem", padding: "1rem" }}
          >
            Visit YPark →
          </a>
        </div>

        {/* Bottom brand line */}
        <div style={{
          marginTop:  "1.5rem",
          fontSize:   "0.7rem",
          color:      "var(--text-muted)",
          fontFamily: "var(--font-body)",
          textAlign:  "center",
          letterSpacing: "0.08em",
        }}>
          PROTHOM ANALYTICA INDIA PVT. LTD.
        </div>

      </div>
    </>
  );
}