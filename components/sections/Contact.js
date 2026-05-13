"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  const [form, setForm] = useState({
    name:    "",
    email:   "",
    phone:   "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error,  setError]  = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields before sending.");
      return;
    }
    setStatus("loading");
    setError("");
    try {
      const res  = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setStatus("idle");
        return;
      }
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <>
      {/* ══════════════════════════════════
          HERO — dark
      ══════════════════════════════════ */}
      <section
        style={{
          background:   "var(--bg-page)",
          borderBottom: "1px solid var(--border)",
          position:     "relative",
          overflow:     "hidden",
          paddingTop:   "7rem",
          paddingBottom:"4rem",
        }}
      >
        {/* Grid bg */}
        <div className="grid-pattern" style={{
          position:"absolute", inset:0,
          pointerEvents:"none", opacity:0.15,
        }} />

        {/* Orb top right */}
        <div style={{
          position:    "absolute",
          top:"-80px", right:"-80px",
          width:"500px", height:"500px",
          borderRadius:"9999px",
          background:"radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)",
          pointerEvents:"none",
        }} />

        {/* Orb bottom left */}
        <div style={{
          position:    "absolute",
          bottom:"-60px", left:"-60px",
          width:"350px", height:"350px",
          borderRadius:"9999px",
          background:"radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)",
          pointerEvents:"none",
        }} />

        <div className="section-wrap" style={{ position:"relative", zIndex:1 }}>
          <div
            style={{
              display:            "grid",
              gridTemplateColumns:"1fr",
              gap:                "3rem",
              alignItems:         "center",
            }}
            className="contact-hero-grid"
          >

            {/* ── Left — text ── */}
            <div>
              {/* Breadcrumb */}
              <div style={{
                display:"flex", alignItems:"center",
                gap:"0.375rem", marginBottom:"1.75rem",
              }}>
                <Link href="/" style={{
                  fontSize:"0.72rem", fontWeight:500,
                  color:"var(--text-muted)", fontFamily:"var(--font-body)",
                  transition:"color 0.2s ease",
                }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
                >
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
                  Contact
                </span>
              </div>

              <span className="section-label">Get In Touch</span>

              <h1 style={{
                fontSize:      "clamp(2rem, 4.5vw, 3.25rem)",
                fontWeight:    800,
                lineHeight:    1.1,
                letterSpacing: "-0.03em",
                fontFamily:    "var(--font-heading)",
                background:    "linear-gradient(180deg, #FFFFFF 0%, #94A3B8 100%)",
                WebkitBackgroundClip:"text",
                WebkitTextFillColor: "transparent",
                backgroundClip:      "text",
                marginBottom:  "1.25rem",
                maxWidth:      "480px",
              }}>
                Start the conversation.
              </h1>

              <p style={{
                fontSize:     "0.95rem",
                color:        "var(--text-body)",
                lineHeight:   1.85,
                maxWidth:     "440px",
                fontFamily:   "var(--font-body)",
                marginBottom: "2rem",
              }}>
                Whether you are a parking owner, an investor,
                a government body or a journalist — every message
                is read by a founder. We respond within 24 hours.
              </p>

              {/* Quick contact pills */}
              <div style={{ display:"flex", flexWrap:"wrap", gap:"0.625rem" }}>
                {[
                  { label:"info@prothomai.com", href:"mailto:info@prothomai.com" },
                  { label:"ypark.in",           href:"https://ypark.in"          },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{
                      display:"inline-flex", alignItems:"center",
                      gap:"0.375rem", padding:"0.4rem 0.875rem",
                      borderRadius:"9999px",
                      border:"1px solid var(--border)",
                      background:"var(--bg-surface)",
                      fontSize:"0.75rem", fontWeight:600,
                      color:"var(--text-body)", fontFamily:"var(--font-body)",
                      transition:"all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent-border)";
                      e.currentTarget.style.color       = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color       = "var(--text-body)";
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Right — hero image ── */}
            <div style={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
            }}>
              <div style={{
                position:"relative",
                width:"100%",
                maxWidth:"420px",
                minHeight:"320px",
                borderRadius:"16px",
                overflow:"hidden",
                border:"1px solid var(--border)",
                boxShadow:"0 24px 60px rgba(6,182,212,0.12)",
              }}>
                <Image
                  src="/Contact2.png"
                  alt="India urban chaos — the problem we are solving"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  style={{
                    objectFit:"cover",
                    opacity:0.9,
                  }}
                  priority
                />
                <div style={{
                  position:"absolute",
                  inset:0,
                  //background:"linear-gradient(135deg, rgba(11,17,32,0.18) 0%, rgba(11,17,32,0.05) 100%)",
                }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FORM SECTION — light
      ══════════════════════════════════ */}
      <section
        id="contact"
        style={{
          background:   "#EBF1FF",
          borderBottom: "1px solid rgba(15,23,42,0.06)",
          position:     "relative",
          overflow:     "hidden",
        }}
      >
        {/* Very subtle dot pattern */}
        <div style={{
          position:      "absolute", inset:0,
          pointerEvents: "none",
          backgroundImage:"radial-gradient(circle, rgba(15,23,42,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />

        {/* Subtle cyan glow bottom left */}
        <div style={{
          position:    "absolute",
          bottom:"-80px", left:"-80px",
          width:"400px", height:"400px",
          borderRadius:"9999px",
          background:"radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
          pointerEvents:"none",
        }} />

        <div className="section-wrap section-pad" style={{ position:"relative", zIndex:1 }}>
          <div
            style={{
              display:            "grid",
              gridTemplateColumns:"1fr",
              gap:                "1.5rem",
              alignItems:         "stretch",
            }}
            className="contact-shell"
          >

            {/* ── Left info panel ── */}
            <div style={{
              background:   "#FFFFFF",
              border:       "1px solid rgba(15,23,42,0.08)",
              borderRadius: "var(--radius-card)",
              padding:      "2rem",
              position:     "relative",
              overflow:     "hidden",
              boxShadow:    "0 4px 24px rgba(15,23,42,0.06)",
            }}>
              {/* Top cyan accent */}
              <div style={{
                position:"absolute", top:0, left:0, right:0,
                height:"2px",
                background:"linear-gradient(90deg, var(--accent), transparent)",
              }} />

              <div style={{ position:"relative", zIndex:1 }}>
                <div style={{
                  fontSize:"0.62rem", fontWeight:700,
                  color:"#64748B", letterSpacing:"0.14em",
                  textTransform:"uppercase", marginBottom:"1rem",
                  fontFamily:"var(--font-body)",
                }}>
                  Direct Contact
                </div>

                <h3 style={{
                  fontSize:"1.5rem", fontWeight:800,
                  lineHeight:1.2, color:"#0F172A",
                  marginBottom:"0.875rem",
                  fontFamily:"var(--font-heading)",
                  letterSpacing:"-0.02em",
                }}>
                  One place to reach the team.
                </h3>

                <p style={{
                  fontSize:"0.875rem", lineHeight:1.8,
                  color:"#64748B", marginBottom:"1.75rem",
                  fontFamily:"var(--font-body)",
                }}>
                  Send the context, the goal and any details
                  we should review. We will come back with
                  the right next step.
                </p>

                {/* Contact items */}
                <div style={{
                  display:"flex", flexDirection:"column",
                  gap:"0.625rem", marginBottom:"1.5rem",
                }}>
                  {[
                    { label:"Email",   value:"info@prothomai.com", href:"mailto:info@prothomai.com" },
                    { label:"Website", value:"prothomai.com",      href:"https://prothomai.com"     },
                    { label:"Product", value:"ypark.in",           href:"https://ypark.in"          },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{
                        display:"flex", flexDirection:"column",
                        gap:"0.18rem", padding:"0.875rem 1rem",
                        borderRadius:"8px", background:"#F8FAFC",
                        border:"1px solid rgba(15,23,42,0.08)",
                        textDecoration:"none",
                        transition:"all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "rgba(6,182,212,0.3)";
                        e.currentTarget.style.transform   = "translateY(-2px)";
                        e.currentTarget.style.boxShadow   = "0 4px 12px rgba(6,182,212,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(15,23,42,0.08)";
                        e.currentTarget.style.transform   = "translateY(0)";
                        e.currentTarget.style.boxShadow   = "none";
                      }}
                    >
                      <span style={{
                        fontSize:"0.6rem", color:"#94A3B8",
                        fontFamily:"var(--font-body)",
                        textTransform:"uppercase",
                        letterSpacing:"0.1em", fontWeight:600,
                      }}>
                        {item.label}
                      </span>
                      <span style={{
                        fontSize:"0.875rem", fontWeight:600,
                        color:"#0F172A", fontFamily:"var(--font-body)",
                      }}>
                        {item.value}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Response time */}
                <div style={{
                  padding:"1rem", borderRadius:"8px",
                  background:"linear-gradient(135deg, rgba(6,182,212,0.08), rgba(6,182,212,0.04))",
                  border:"1px solid rgba(6,182,212,0.2)",
                }}>
                  <div style={{
                    fontSize:"0.82rem", fontWeight:700,
                    color:"#0F172A", marginBottom:"0.25rem",
                    fontFamily:"var(--font-heading)",
                  }}>
                    Response within 24 hours
                  </div>
                  <div style={{
                    fontSize:"0.78rem", color:"#64748B",
                    lineHeight:1.6, fontFamily:"var(--font-body)",
                  }}>
                    Every message read by a founder.
                    No bots. No automated replies.
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right form panel ── */}
            <div style={{
              background:   "#FFFFFF",
              border:       "1px solid rgba(15,23,42,0.08)",
              borderRadius: "var(--radius-card)",
              overflow:     "hidden",
              boxShadow:    "0 4px 24px rgba(15,23,42,0.06)",
            }}>
              <div style={{
                height:"2px",
                background:"linear-gradient(90deg, var(--accent), transparent)",
              }} />

              <div style={{ padding:"2rem" }}>
                <div style={{ marginBottom:"1.75rem" }}>
                  <div style={{
                    fontSize:"0.62rem", fontWeight:700,
                    color:"#64748B", letterSpacing:"0.14em",
                    textTransform:"uppercase", marginBottom:"0.5rem",
                    fontFamily:"var(--font-body)",
                  }}>
                    Send A Message
                  </div>
                  <p style={{
                    fontSize:"0.875rem", color:"#64748B",
                    fontFamily:"var(--font-body)", lineHeight:1.7, margin:0,
                  }}>
                    Four fields. One clear message. That is all we need.
                  </p>
                </div>

                {/* Name + Email */}
                <div
                  className="form-row"
                  style={{
                    display:"grid", gridTemplateColumns:"1fr 1fr",
                    gap:"0.875rem", marginBottom:"0.875rem",
                  }}
                >
                  {[
                    { label:"Name *",  name:"name",  type:"text",  placeholder:"Your name"      },
                    { label:"Email *", name:"email", type:"email", placeholder:"your@email.com" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label style={{
                        display:"block", fontSize:"0.65rem",
                        fontWeight:700, color:"#64748B",
                        letterSpacing:"0.1em", textTransform:"uppercase",
                        marginBottom:"0.5rem", fontFamily:"var(--font-body)",
                      }}>
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        name={f.name}
                        value={form[f.name]}
                        onChange={handleChange}
                        placeholder={f.placeholder}
                        style={{
                          width:"100%", padding:"0.82rem 1rem",
                          borderRadius:"8px",
                          border:"1.5px solid rgba(15,23,42,0.1)",
                          background:"#F8FAFC",
                          fontSize:"0.875rem", color:"#0F172A",
                          fontFamily:"var(--font-body)", outline:"none",
                          transition:"border-color 0.2s ease, box-shadow 0.2s ease",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "rgba(6,182,212,0.5)";
                          e.target.style.boxShadow   = "0 0 0 3px rgba(6,182,212,0.08)";
                          e.target.style.background  = "#FFFFFF";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "rgba(15,23,42,0.1)";
                          e.target.style.boxShadow   = "none";
                          e.target.style.background  = "#F8FAFC";
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Phone */}
                <div style={{ marginBottom:"0.875rem" }}>
                  <label style={{
                    display:"block", fontSize:"0.65rem",
                    fontWeight:700, color:"#64748B",
                    letterSpacing:"0.1em", textTransform:"uppercase",
                    marginBottom:"0.5rem", fontFamily:"var(--font-body)",
                  }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    style={{
                      width:"100%", padding:"0.82rem 1rem",
                      borderRadius:"8px",
                      border:"1.5px solid rgba(15,23,42,0.1)",
                      background:"#F8FAFC",
                      fontSize:"0.875rem", color:"#0F172A",
                      fontFamily:"var(--font-body)", outline:"none",
                      transition:"border-color 0.2s ease, box-shadow 0.2s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(6,182,212,0.5)";
                      e.target.style.boxShadow   = "0 0 0 3px rgba(6,182,212,0.08)";
                      e.target.style.background  = "#FFFFFF";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(15,23,42,0.1)";
                      e.target.style.boxShadow   = "none";
                      e.target.style.background  = "#F8FAFC";
                    }}
                  />
                </div>

                {/* Message */}
                <div style={{ marginBottom:"1.5rem" }}>
                  <label style={{
                    display:"block", fontSize:"0.65rem",
                    fontWeight:700, color:"#64748B",
                    letterSpacing:"0.1em", textTransform:"uppercase",
                    marginBottom:"0.5rem", fontFamily:"var(--font-body)",
                  }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you want to discuss..."
                    rows={6}
                    style={{
                      width:"100%", padding:"0.875rem 1rem",
                      borderRadius:"8px",
                      border:"1.5px solid rgba(15,23,42,0.1)",
                      background:"#F8FAFC",
                      fontSize:"0.875rem", color:"#0F172A",
                      fontFamily:"var(--font-body)", outline:"none",
                      resize:"vertical", lineHeight:1.7,
                      minHeight:"148px",
                      transition:"border-color 0.2s ease, box-shadow 0.2s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(6,182,212,0.5)";
                      e.target.style.boxShadow   = "0 0 0 3px rgba(6,182,212,0.08)";
                      e.target.style.background  = "#FFFFFF";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(15,23,42,0.1)";
                      e.target.style.boxShadow   = "none";
                      e.target.style.background  = "#F8FAFC";
                    }}
                  />
                </div>

                {/* Error */}
                {error && (
                  <div style={{
                    padding:"0.75rem 1rem", borderRadius:"8px",
                    background:"rgba(239,68,68,0.06)",
                    border:"1px solid rgba(239,68,68,0.2)",
                    marginBottom:"1rem", fontSize:"0.82rem",
                    color:"#DC2626", fontFamily:"var(--font-body)",
                  }}>
                    {error}
                  </div>
                )}

                {/* Success */}
                {status === "success" ? (
                  <div style={{
                    padding:"1.25rem", borderRadius:"8px",
                    background:"rgba(34,197,94,0.06)",
                    border:"1px solid rgba(34,197,94,0.2)",
                    textAlign:"center",
                  }}>
                    <div style={{ fontSize:"1.5rem", marginBottom:"0.5rem" }}>✅</div>
                    <div style={{
                      fontSize:"0.9rem", fontWeight:700,
                      color:"#16A34A", marginBottom:"0.25rem",
                      fontFamily:"var(--font-heading)",
                    }}>
                      Message sent successfully.
                    </div>
                    <div style={{
                      fontSize:"0.78rem", color:"#64748B",
                      fontFamily:"var(--font-body)",
                    }}>
                      We will get back to you within 24 hours.
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    className="btn-primary"
                    style={{
                      width:"100%", justifyContent:"center",
                      fontSize:"0.9rem", padding:"0.9rem",
                      opacity: status === "loading" ? 0.7 : 1,
                      cursor:  status === "loading" ? "not-allowed" : "pointer",
                    }}
                  >
                    {status === "loading" ? (
                      <>
                        <div style={{
                          width:"14px", height:"14px",
                          border:"2px solid rgba(11,17,32,0.25)",
                          borderTop:"2px solid #0B1120",
                          borderRadius:"9999px",
                          animation:"spin 0.8s linear infinite",
                        }} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2.5"
                          strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>

        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @media (min-width: 1024px) {
            .contact-hero-grid { grid-template-columns: 1fr 1fr !important; }
            .contact-shell     { grid-template-columns: 360px 1fr !important; }
          }
          @media (max-width: 640px) {
            .form-row { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}