import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/sections/Navbar";
import Footer from "../../components/sections/Footer";

export const metadata = {
  title: "About",
  description:
    "Prothom AI is a research-first technology company. We spend months understanding problems before writing a single line of code. Currently building YPark — India's organized parking marketplace.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <TheName />
      <WhyWeExist />
      <Vision />
      <Footer />
    </main>
  );
}

/* ═══════════════════════════════════════
   HERO — dark + city image
═══════════════════════════════════════ */
function AboutHero() {
  return (
    <section
      style={{
        background:   "var(--bg-page)",
        paddingTop:   "7rem",
        paddingBottom:"5rem",
        position:     "relative",
        overflow:     "hidden",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Grid bg */}
      <div className="grid-pattern" style={{
        position:"absolute", inset:0,
        pointerEvents:"none", opacity:0.15,
      }} />

      {/* Orb */}
      <div style={{
        position:    "absolute",
        top:"-100px", left:"-100px",
        width:"500px", height:"500px",
        borderRadius:"9999px",
        background:"radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
        pointerEvents:"none",
      }} />

      <div className="section-wrap" style={{ position:"relative", zIndex:1 }}>

        {/* Breadcrumb */}
        <div style={{
          display:"flex", alignItems:"center",
          gap:"0.375rem", marginBottom:"2rem",
        }}>
          <Link href="/" className="about-breadcrumb-link" style={{
            fontSize:"0.72rem", fontWeight:500,
            color:"var(--text-muted)", fontFamily:"var(--font-body)",
            transition:"color 0.2s ease",
          }}>
            Home
          </Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="var(--text-muted)" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
          <span style={{
            fontSize:"0.72rem", fontWeight:600,
            color:"var(--accent)", fontFamily:"var(--font-body)",
          }}>
            About
          </span>
        </div>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"1fr",
            gap:"3rem",
            alignItems:"center",
          }}
          className="about-hero-grid"
        >

          {/* ── Left ── */}
          <div style={{ maxWidth:"580px" }}>
            <span className="section-label">About Us</span>

            <h1 style={{
              fontSize:      "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight:    800,
              lineHeight:    1.08,
              letterSpacing: "-0.03em",
              fontFamily:    "var(--font-heading)",
              background:    "linear-gradient(180deg, #FFFFFF 0%, #94A3B8 100%)",
              WebkitBackgroundClip:"text",
              WebkitTextFillColor: "transparent",
              backgroundClip:      "text",
              marginBottom:  "1.5rem",
            }}>
              We think before{" "}
              <span style={{
                WebkitTextFillColor:"var(--accent)",
                color:"var(--accent)",
              }}>
                we build.
              </span>
            </h1>

            <p style={{
              fontSize:     "clamp(0.95rem, 1.8vw, 1.05rem)",
              color:        "var(--text-body)",
              lineHeight:   1.85,
              fontFamily:   "var(--font-body)",
              marginBottom: "2rem",
              maxWidth:     "480px",
            }}>
              We are Prothom AI — a small team that spends months
              understanding a problem before designing a single screen
              or writing a single line of code. This is who we are
              and why we exist.
            </p>

            {/* Quick facts strip */}
            <div style={{
              display:"flex", flexWrap:"wrap", gap:"0.625rem",
            }}>
              {[
                { label:"Founded",        value:"June 2024"   },
                { label:"Based in",       value:"India"       },
                //{ label:"First product",  value:"YPark"       },
                { label:"Status",         value:"Operational" },
              ].map((f) => (
                <div key={f.label} style={{
                  display:"flex", alignItems:"center",
                  gap:"0.375rem", padding:"0.375rem 0.875rem",
                  borderRadius:"9999px",
                  border:"1px solid var(--border)",
                  background:"var(--bg-surface)",
                }}>
                  <span style={{
                    fontSize:"0.62rem", color:"var(--text-muted)",
                    fontFamily:"var(--font-body)", fontWeight:500,
                  }}>
                    {f.label}:
                  </span>
                  <span style={{
                    fontSize:"0.68rem", fontWeight:700,
                    color:"#FFFFFF", fontFamily:"var(--font-body)",
                  }}>
                    {f.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — city image ── */}
          <div style={{
            position:"relative",
            borderRadius:"var(--radius-card)",
            overflow:"hidden",
            border:"1px solid var(--border)",
            aspectRatio:"4/3",
          }}>
            <Image
              src="/AboutUs1.png"
              alt="India urban chaos — the problem we are solving"
              fill
              style={{ objectFit:"cover", opacity:0.85 }}
              priority
            />
            {/* Dark overlay gradient */}
            <div style={{
              position:"absolute", inset:0,
              // background:"linear-gradient(135deg, rgba(11,17,32,0.5) 0%, rgba(11,17,32,0.2) 100%)",
            }} />
            {/* Caption */}
            <div style={{
              position:"absolute",
              bottom:"1rem", left:"1rem",
              background:"rgba(11,17,32,0.75)",
              backdropFilter:"blur(8px)",
              border:"1px solid var(--border)",
              borderRadius:"8px",
              padding:"0.5rem 0.875rem",
            }}>
              <div style={{
                fontSize:"0.65rem", fontWeight:700,
                color:"var(--accent)", fontFamily:"var(--font-body)",
                letterSpacing:"0.08em",
              }}>
                THIS IS WHAT WE SET OUT TO ORGANIZE
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .about-breadcrumb-link:hover {
          color: var(--accent);
        }

        @media (min-width: 1024px) {
          .about-hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════
   THE NAME — keep, dark tokens
═══════════════════════════════════════ */
function TheName() {
  return (
    <section style={{
      background: "var(--bg-surface)",
      padding:    "6rem 0",
      position:   "relative",
      overflow:   "hidden",
      borderBottom:"1px solid var(--border)",
    }}>
      <div className="dot-pattern" style={{
        position:"absolute", inset:0,
        pointerEvents:"none", opacity:0.3,
      }} />
      <div style={{
        position:"absolute", top:"50%", left:"50%",
        transform:"translate(-50%,-50%)",
        width:"500px", height:"300px",
        borderRadius:"9999px",
        background:"radial-gradient(ellipse, rgba(6,182,212,0.05) 0%, transparent 70%)",
        pointerEvents:"none",
      }} />

      <div className="section-wrap" style={{ position:"relative", zIndex:1, textAlign:"center" }}>

        {/* Bengali watermark */}
        <div style={{
          fontSize:      "clamp(4rem, 10vw, 8rem)",
          fontWeight:    800,
          color:         "rgba(255,255,255,0.03)",
          fontFamily:    "var(--font-heading)",
          lineHeight:    1,
          marginBottom:  "-2rem",
          userSelect:    "none",
        }}>
          প্রথম
        </div>

        <h2 style={{
          fontSize:      "clamp(2.5rem, 6vw, 5rem)",
          fontWeight:    800,
          lineHeight:    1.05,
          letterSpacing: "-0.03em",
          fontFamily:    "var(--font-heading)",
          position:      "relative",
          zIndex:        1,
          marginBottom:  "1.5rem",
        }}>
          <span style={{ color:"var(--accent)" }}>
            Prothom.
          </span>
          <br />
          <span style={{
            color:    "#FFFFFF",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
          }}>
            প্রথম. First.
          </span>
        </h2>

        <p style={{
          fontSize:   "clamp(0.95rem, 2vw, 1.1rem)",
          color:      "var(--text-body)",
          lineHeight: 1.8,
          maxWidth:   "520px",
          margin:     "0 auto 3rem",
          fontFamily: "var(--font-body)",
        }}>
          Not first to market. Not first to raise funding.
          <br />
          First to understand. First to go to the ground.
          First to ask why a problem stayed unsolved.
        </p>

        {/* Three meanings */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap:                 "1px",
          background:          "var(--border)",
          borderRadius:        "var(--radius-card)",
          overflow:            "hidden",
          border:              "1px solid var(--border)",
          maxWidth:            "700px",
          margin:              "0 auto",
        }}>
          {[
            {
              word:    "First",
              meaning: "First to research the problem at ground level",
              color:   "#06B6D4",
            },
            {
              word:    "Prothom",
              meaning: "First to build a real organized system for it",
              color:   "#06B6D4",
            },
            {
              word:    "প্রথম",
              meaning: "First to treat the ignored majority as priority",
              color:   "#06B6D4",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="about-meaning-card"
              style={{
                padding:    "1.75rem",
                background: "var(--bg-surface)",
                textAlign:  "left",
                transition: "background 0.3s ease",
                cursor:     "default",
              }}>
              <div style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "1.1rem",
                fontWeight:    700,
                color:         item.color,
                marginBottom:  "0.5rem",
                letterSpacing: "-0.01em",
              }}>
                {item.word}
              </div>
              <div style={{
                fontSize:   "0.8rem",
                color:      "var(--text-muted)",
                lineHeight: 1.6,
                fontFamily: "var(--font-body)",
              }}>
                {item.meaning}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about-meaning-card:hover {
          background: var(--bg-card-hover);
        }
      `}</style>
    </section>
  );
}


/* ═══════════════════════════════════════
   WHY WE EXIST — light section
═══════════════════════════════════════ */
function WhyWeExist() {
  return (
    <section style={{
      background: "#EBF1FF",
      borderTop:  "1px solid rgba(15,23,42,0.06)",
      borderBottom:"1px solid rgba(15,23,42,0.06)",
      padding:    "6rem 0",
      position:   "relative",
      overflow:   "hidden",
    }}>
      <div style={{
        position:    "absolute",
        top:"-60px", right:"-60px",
        width:"400px", height:"400px",
        borderRadius:"9999px",
        background:"radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)",
        pointerEvents:"none",
      }} />

      <div className="section-wrap">
        <div
          style={{
            display:            "grid",
            gridTemplateColumns:"1fr",
            gap:                "4rem",
            alignItems:         "start",
          }}
          className="story-grid"
        >

          {/* ── Left — timeline ── */}
          <div>
            <span style={{
              display:       "inline-block",
              fontSize:      "0.65rem",
              fontWeight:    700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom:  "0.875rem",
              color:         "#06B6D4",
              fontFamily:    "var(--font-body)",
            }}>
              Our Story
            </span>

            <h2 style={{
              fontSize:      "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight:    800,
              lineHeight:    1.15,
              letterSpacing: "-0.02em",
              color:         "#0F172A",
              fontFamily:    "var(--font-heading)",
              marginBottom:  "2.5rem",
            }}>
              Why we exist.
            </h2>

            {/* Timeline */}
            <div style={{ position:"relative" }}>
              <div style={{
                position:"absolute",
                top:"20px", left:"19px",
                width:"2px",
                height:"calc(100% - 40px)",
                background:"linear-gradient(180deg, #06B6D4, rgba(6,182,212,0.1))",
                opacity:0.3,
              }} />

              {[
                {
                  label: "The Problem",
                  text:  "An ordinary day — circling blocks, wasting time, unable to find parking. The attendant used a notebook. The owner had no idea how much was collected that day.",
                  color: "#06B6D4",
                },
                {
                  label: "The Realization",
                  text:  "The problem was not finding parking. Nobody had organized it. Owners losing revenue. Staff with zero accountability. Drivers with no information. Every Indian city, same story.",
                  color: "#06B6D4",
                },
                {
                  label: "June 2024",
                  text:  "Prothom AI incorporated. One commitment — research first, always. Months of ground research before a single line of code. Operators, managers, daily drivers across multiple cities.",
                  color: "#06B6D4",
                },
                {
                  label: "Now",
                  text:  "YPark is live. India's first organized parking marketplace. Owners manage zones digitally. Drivers find parking near them. One organized system connecting both sides.",
                  color: "#06B6D4",
                },
              ].map((item, i, arr) => (
                <div
                  key={i}
                  style={{
                    display:       "flex",
                    gap:           "1.5rem",
                    paddingBottom: i < arr.length - 1 ? "2.25rem" : "0",
                  }}
                >
                  {/* Circle */}
                  <div style={{
                    width:          "40px",
                    height:         "40px",
                    borderRadius:   "9999px",
                    background:     "rgba(6,182,212,0.1)",
                    border:         "2px solid rgba(6,182,212,0.4)",
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    flexShrink:     0,
                    zIndex:         1,
                    position:       "relative",
                  }}>
                    <div style={{
                      width:"8px", height:"8px",
                      borderRadius:"9999px",
                      background:"#06B6D4",
                    }} />
                  </div>

                  <div style={{ flex:1, paddingTop:"0.5rem" }}>
                    <div style={{
                      fontSize:      "0.68rem",
                      fontWeight:    700,
                      color:         "#06B6D4",
                      letterSpacing: "0.08em",
                      marginBottom:  "0.375rem",
                      fontFamily:    "var(--font-mono)",
                    }}>
                      {item.label}
                    </div>
                    <p style={{
                      fontSize:   "0.875rem",
                      color:      "#64748B",
                      lineHeight: 1.8,
                      fontFamily: "var(--font-body)",
                      margin:     0,
                    }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right ── */}
          <div style={{
            display:       "flex",
            flexDirection: "column",
            gap:           "1.25rem",
          }}>

            {/* Pull quote */}
            <div style={{
              background:  "#FFFFFF",
              border:      "1px solid rgba(15,23,42,0.08)",
              borderLeft:  "3px solid #06B6D4",
              borderRadius:"0 var(--radius-card) var(--radius-card) 0",
              padding:     "1.75rem",
              boxShadow:   "0 2px 12px rgba(15,23,42,0.05)",
            }}>
              <p style={{
                fontSize:     "1rem",
                fontWeight:   700,
                color:        "#0F172A",
                lineHeight:   1.6,
                fontFamily:   "var(--font-heading)",
                marginBottom: "0.75rem",
              }}>
                &ldquo;The problem was not finding parking.
                The problem was that nobody had organized it.&rdquo;
              </p>
              <div style={{
                fontSize:   "0.72rem",
                color:      "#94A3B8",
                fontFamily: "var(--font-body)",
              }}>
                — Founding observation, 2024
              </div>
            </div>

            {/* Commitments */}
            <div style={{
              background:   "#FFFFFF",
              border:       "1px solid rgba(15,23,42,0.08)",
              borderRadius: "var(--radius-card)",
              padding:      "1.75rem",
              boxShadow:    "0 2px 12px rgba(15,23,42,0.05)",
              position:     "relative",
              overflow:     "hidden",
            }}>
              <div style={{
                position:"absolute", top:0, left:0, right:0,
                height:"2px",
                background:"linear-gradient(90deg, #06B6D4, transparent)",
              }} />
              <div style={{
                fontSize:      "0.62rem",
                fontWeight:    700,
                color:         "#94A3B8",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom:  "1.25rem",
                fontFamily:    "var(--font-body)",
              }}>
                Our commitment from day one
              </div>
              {[
                "Research before code. Always.",
                "Build for the most constrained user first.",
                "Design for scale from day one.",
                "Move deliberately. Build things that last.",
              ].map((c, i, arr) => (
                <div
                  key={i}
                  style={{
                    display:       "flex",
                    alignItems:    "flex-start",
                    gap:           "0.75rem",
                    padding:       "0.625rem 0",
                    borderBottom:  i < arr.length - 1 ? "1px solid #F1F5F9" : "none",
                  }}
                >
                  <div style={{
                    width:"16px", height:"16px",
                    borderRadius:"9999px",
                    background:"rgba(6,182,212,0.1)",
                    border:"1px solid rgba(6,182,212,0.25)",
                    display:"flex", alignItems:"center",
                    justifyContent:"center", flexShrink:0,
                    marginTop:"2px",
                  }}>
                    <svg width="7" height="7" viewBox="0 0 24 24" fill="none"
                      stroke="#06B6D4" strokeWidth="3"
                      strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span style={{
                    fontSize:"0.85rem", color:"#334155",
                    fontFamily:"var(--font-body)",
                    lineHeight:1.6, fontWeight:500,
                  }}>
                    {c}
                  </span>
                </div>
              ))}
            </div>

            {/* First product */}
            <div style={{
              background:   "var(--bg-page)",
              border:       "1px solid var(--border)",
              borderRadius: "var(--radius-card)",
              padding:      "1.5rem",
              display:      "flex",
              alignItems:   "center",
              justifyContent:"space-between",
              gap:          "1rem",
              position:     "relative",
              overflow:     "hidden",
            }}>
              <div style={{
                position:"absolute", top:0, left:0, right:0,
                height:"2px",
                background:"linear-gradient(90deg, var(--accent), transparent)",
              }} />
              <div>
                <div style={{
                  fontSize:"0.6rem", fontWeight:700,
                  color:"var(--text-muted)",
                  letterSpacing:"0.12em", textTransform:"uppercase",
                  marginBottom:"0.25rem", fontFamily:"var(--font-body)",
                }}>
                  Our Products
                </div>
                <div style={{
                  fontSize:"1rem", fontWeight:800,
                  color:"#FFFFFF", fontFamily:"var(--font-heading)",
                  letterSpacing:"-0.01em",
                }}>
                  YPARK
                </div>
                <div style={{
                  fontSize:"0.75rem", color:"var(--text-muted)",
                  fontFamily:"var(--font-body)",
                }}>
                  India&apos;s Organized Parking Marketplace
                </div>
              </div>
              <a
                href="https://ypark.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding:"0.5rem 1.125rem", fontSize:"0.8rem", flexShrink:0 }}
              >
                Visit →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .story-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════
   VISION — dark, concise
═══════════════════════════════════════ */
function Vision() {
  return (
    <section style={{
      background: "var(--bg-page)",
      padding:    "6rem 0",
      position:   "relative",
      overflow:   "hidden",
    }}>
      <div className="dot-pattern" style={{
        position:"absolute", inset:0,
        pointerEvents:"none", opacity:0.25,
      }} />
      <div style={{
        position:"absolute", top:"50%", left:"50%",
        transform:"translate(-50%,-50%)",
        width:"600px", height:"400px",
        borderRadius:"9999px",
        background:"radial-gradient(ellipse, rgba(6,182,212,0.06) 0%, transparent 70%)",
        pointerEvents:"none",
      }} />

      <div className="section-wrap" style={{
        position:"relative", zIndex:1, textAlign:"center",
      }}>
        <span className="section-label">Our Vision</span>

        <h2 style={{
          fontSize:      "clamp(1.75rem, 4vw, 2.75rem)",
          fontWeight:    800,
          lineHeight:    1.2,
          letterSpacing: "-0.03em",
          fontFamily:    "var(--font-heading)",
          background:    "linear-gradient(180deg, #FFFFFF 0%, #94A3B8 100%)",
          WebkitBackgroundClip:"text",
          WebkitTextFillColor: "transparent",
          backgroundClip:      "text",
          maxWidth:      "620px",
          margin:        "0 auto 1.5rem",
        }}>
          India&apos;s organized future will be built
          one problem at a time.
        </h2>

        <p style={{
          fontSize:   "clamp(0.9rem, 1.7vw, 1rem)",
          color:      "var(--text-body)",
          lineHeight: 1.85,
          maxWidth:   "480px",
          margin:     "0 auto 2rem",
          fontFamily: "var(--font-body)",
        }}>
          Not in one move. Not by one product.
          Problem by problem. System by system.
          We are building that future — deliberately.
        </p>

        <div style={{
          width:"40px", height:"2px",
          background:"var(--accent)",
          margin:"0 auto 2.5rem",
          borderRadius:"9999px",
          opacity:0.6,
        }} />

        <div style={{
          display:"flex", gap:"0.875rem",
          justifyContent:"center", flexWrap:"wrap",
        }}>
          <a
            href="https://ypark.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding:"0.875rem 1.75rem" }}
          >
            Visit YPark
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
          <Link
            href="/#contact"
            className="btn-secondary"
            style={{ padding:"0.875rem 1.75rem" }}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}