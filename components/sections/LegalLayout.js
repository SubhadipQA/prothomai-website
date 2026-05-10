import Link from "next/link";
import Navbar from "../../components/sections/Navbar";
import Footer from "../../components/sections/Footer";

export default function LegalLayout({ title, lastUpdated, children }) {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{
        background: "radial-gradient(circle at top left, rgba(6,182,212,0.1), transparent 30%), linear-gradient(180deg, #07111F 0%, #0B1120 100%)",
        paddingTop: "9rem",
        paddingBottom: "3rem",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div
          className="grid-pattern"
          style={{
            position: "absolute", inset: 0,
            pointerEvents: "none", opacity: 0.18,
          }}
        />
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, height: "240px",
          background: "linear-gradient(180deg, rgba(6,182,212,0.08) 0%, transparent 100%)",
          pointerEvents: "none",
        }} />

        <div style={{
          position: "absolute",
          width: "520px",
          height: "520px",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "-220px",
          right: "-140px",
          pointerEvents: "none",
        }} />

        <div className="section-wrap" style={{ position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{
            display: "flex", alignItems: "center",
            gap: "0.5rem", marginBottom: "2rem",
          }}>
            <Link href="/" style={{
              fontSize: "0.75rem", color: "#64748B",
              fontFamily: "'Inter', sans-serif",
              textDecoration: "none", fontWeight: 500,
              transition: "color 0.2s",
            }}>
              Home
            </Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="rgba(255,255,255,0.2)" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
            <span style={{
              fontSize: "0.75rem", color: "#E2E8F0",
              fontFamily: "'Inter', sans-serif", fontWeight: 600,
            }}>
              {title}
            </span>
          </div>

          <span style={{
            display: "inline-block",
            fontSize: "0.7rem", fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            marginBottom: "0.875rem", color: "#67E8F9",
            fontFamily: "'Inter', sans-serif",
          }}>
            Legal
          </span>

          <h1 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: "-1px", color: "#F8FAFC",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            marginBottom: "1rem",
          }}>
            {title}
          </h1>

          <div style={{
            display: "flex", alignItems: "center",
            gap: "1rem", flexWrap: "wrap",
          }}>
            <span style={{
              fontSize: "0.78rem", color: "#94A3B8",
              fontFamily: "'Inter', sans-serif",
            }}>
              Last updated: {lastUpdated}
            </span>
            <div style={{
              width: "4px", height: "4px",
              borderRadius: "9999px", background: "rgba(255,255,255,0.2)",
            }} />
            <span style={{
              fontSize: "0.78rem", color: "#94A3B8",
              fontFamily: "'Inter', sans-serif",
            }}>
              Prothom Analytica India Pvt. Ltd.
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{
        background: "rgb(247, 250, 252)",
        padding: "4rem 0 6rem",
      }}>
        <div className="section-wrap">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "start",
          }}
            className="legal-grid"
          >
            {/* Main content */}
            <div style={{
              maxWidth: "720px",
            }}>
              {children}
            </div>

            {/* Sidebar */}
            <div style={{
              position: "sticky",
              top: "6rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}>
              {/* Other legal docs */}
              <div style={{
                background: "#F4F9FF",
                border: "1px solid #E2EBF6",
                borderRadius: "1.25rem",
                padding: "1.5rem",
              }}>
                <div style={{
                  fontSize: "0.65rem", fontWeight: 700,
                  color: "#8BA8C8", letterSpacing: "0.12em",
                  textTransform: "uppercase", marginBottom: "1rem",
                  fontFamily: "'Inter', sans-serif",
                }}>
                  Legal Documents
                </div>
                <div style={{
                  display: "flex", flexDirection: "column", gap: "0.5rem",
                }}>
                  {[
                    { label: "Privacy Policy", href: "/privacy" },
                    { label: "Terms of Service", href: "/terms" },
                    { label: "Cookie Policy", href: "/cookies" },
                  ].map((doc) => (
                    <Link
                      key={doc.href}
                      href={doc.href}
                      style={{
                        fontSize: "0.82rem", fontWeight: 600,
                        color: "#506A84",
                        fontFamily: "'Inter', sans-serif",
                        textDecoration: "none",
                        padding: "0.5rem 0.75rem",
                        borderRadius: "0.625rem",
                        transition: "all 0.2s ease",
                        display: "block",
                      }}>
                      {doc.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div style={{
                background: "#FFFFFF",
                border: "1px solid #E2EBF6",
                borderRadius: "1.25rem",
                padding: "1.5rem",
                boxShadow: "0 2px 12px rgba(13,27,42,0.04)",
              }}>
                <div style={{
                  fontSize: "0.82rem", fontWeight: 700,
                  color: "#0D1B2A", marginBottom: "0.375rem",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                  Questions about this policy?
                </div>
                <div style={{
                  fontSize: "0.75rem", color: "#506A84",
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "1rem", lineHeight: 1.6,
                }}>
                  Contact us directly and we will respond within 24 hours.
                </div>
                <a
                  href="mailto:info@prothomai.com"
                  style={{
                    fontSize: "0.8rem", fontWeight: 700,
                    color: "#1565C0",
                    fontFamily: "'Inter', sans-serif",
                    textDecoration: "none",
                    display: "flex", alignItems: "center", gap: "0.375rem",
                  }}
                >
                  info@prothomai.com →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (min-width: 1024px) {
          .legal-grid {
            grid-template-columns: 1fr 260px !important;
          }
        }
      `}</style>
    </main>
  );
}

// Reusable section block
export function LegalSection({ title, children }) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <h2 style={{
        fontSize: "1.15rem", fontWeight: 800,
        color: "#0D1B2A", marginBottom: "1rem",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        paddingBottom: "0.75rem",
        borderBottom: "2px solid #EBF4FF",
      }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

// Reusable paragraph
export function LegalP({ children }) {
  return (
    <p style={{
      fontSize: "0.9rem", color: "#506A84",
      lineHeight: 1.85, marginBottom: "1rem",
      fontFamily: "'Inter', sans-serif",
    }}>
      {children}
    </p>
  );
}

// Reusable list
export function LegalList({ items }) {
  return (
    <ul style={{
      margin: "0 0 1rem 0",
      padding: "0",
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    }}>
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: "flex", alignItems: "flex-start",
            gap: "0.625rem",
            fontSize: "0.9rem", color: "#506A84",
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.7,
          }}
        >
          <div style={{
            width: "6px", height: "6px",
            borderRadius: "9999px",
            background: "#1565C0",
            flexShrink: 0,
            marginTop: "0.5rem",
          }} />
          {item}
        </li>
      ))}
    </ul>
  );
}