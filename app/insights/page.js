import Link from "next/link";
import Navbar from "../../components/sections/Navbar";
import Footer from "../../components/sections/Footer";
import { categories } from "../../lib/constants";
import { getAllInsights } from "../../lib/mdx";
import Image from "next/image";

export const metadata = {
  title: "Insights",
  description:
    "Research, field findings and thinking from Prothom Analytica India. We publish what we learn about urban mobility, parking infrastructure and organized systems for India.",
};

const categoryColors = {
  "parking-industry": { bg: "#EBF4FF", color: "#1565C0", border: "#BDD2FF" },
  "urban-mobility": { bg: "rgba(0,201,167,0.08)", color: "#00A886", border: "rgba(0,201,167,0.2)" },
  "product": { bg: "rgba(30,136,229,0.08)", color: "#1E88E5", border: "rgba(30,136,229,0.2)" },
  "company": { bg: "rgba(156,39,176,0.08)", color: "#7B1FA2", border: "rgba(156,39,176,0.2)" },
  "smart-cities": { bg: "rgba(0,188,212,0.08)", color: "#00BCD4", border: "rgba(0,188,212,0.2)" },
  "research": { bg: "rgba(59,130,246,0.08)", color: "#3B82F6", border: "rgba(59,130,246,0.2)" },
};

const categoryIcons = {
  "parking-industry": "🅿️",
  "urban-mobility": "🏙️",
  "product": "⚙️",
  "company": "🔬",
  "smart-cities": "🌆",
  "research": "📊",
};

export default function InsightsPage() {
  const insights = getAllInsights();
  const featured = insights.filter((a) => a.featured);
  const rest = insights.filter((a) => !a.featured).slice(0, 6);

  return (
    <main>
      <Navbar />
      <InsightsHero />
      <InsightsBody featured={featured} rest={rest} />
      <Footer />
    </main>
  );
}

// ─────────────────────────────────────────
// HERO
// ─────────────────────────────────────────

function InsightsHero() {
  return (
    <section
      style={{
        background:
          "radial-gradient(circle at top left, rgba(6,182,212,0.12), transparent 28%), linear-gradient(180deg, #07111F 0%, #0B1120 100%)",
        paddingTop: "10rem",
        paddingBottom: "7rem",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)",
          pointerEvents: "none",
          opacity: 0.3,
        }}
      />

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "-200px",
          right: "-200px",
          pointerEvents: "none",
        }}
      />

      <div
        className="section-wrap"
        style={{ position: "relative", zIndex: 2 }}
      >
        {/* Breadcrumb */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "3rem",
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: "0.75rem",
              color: "#64748B",
              fontFamily: "'Inter', sans-serif",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
          >
            Home
          </Link>

          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>

          <span
            style={{
              fontSize: "0.75rem",
              color: "#E2E8F0",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
            }}
          >
            Insights
          </span>
        </div>

        <div
          className="insights-hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.45rem 0.9rem",
                borderRadius: "9999px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#67E8F9",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
                marginBottom: "1.5rem",
                width: "fit-content",
                backdropFilter: "blur(12px)",
              }}
            >
              Research Archive
            </span>

            <h1
              style={{
                fontSize: "clamp(2.7rem, 6vw, 5rem)",
                lineHeight: 1,
                fontWeight: 800,
                letterSpacing: "-0.06em",
                color: "#F8FAFC",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                marginBottom: "1.5rem",
                maxWidth: "700px",
              }}
            >
              Research &
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #67E8F9 0%, #06B6D4 40%, #22D3EE 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                field findings.
              </span>
            </h1>

            <p
              style={{
                fontSize: "1.02rem",
                color: "#94A3B8",
                lineHeight: 1.9,
                fontFamily: "'Inter', sans-serif",
                maxWidth: "560px",
                marginBottom: "2.5rem",
              }}
            >
              We publish what we learn from the field — how Indian
              cities operate, where infrastructure breaks and what it
              actually takes to build systems that work at scale.
              No growth hacks. No recycled startup advice.
            </p>

            {/* Category Pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
              }}
            >
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/insights/category/${cat.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.7rem 1rem",
                    borderRadius: "9999px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#CBD5E1",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    fontFamily: "'Inter', sans-serif",
                    backdropFilter: "blur(12px)",
                    transition: "all 0.25s ease",
                  }}
                  className="insight-pill"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            }}>
            <div style={{
                position:"relative",
                width:"100%",
                minHeight:"370px",
                borderRadius:"16px",
                overflow:"hidden",
                border:"1px solid var(--border)",
                boxShadow:"0 24px 60px rgba(6,182,212,0.12)",
            }}>
                <Image
                src="/insight-hero.png"
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

      <style>{`
        @media (min-width: 1100px) {
          .insights-hero-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }

        .insight-pill:hover {
          transform: translateY(-2px);
          background: rgba(6,182,212,0.08) !important;
          border-color: rgba(6,182,212,0.2) !important;
          color: #F8FAFC !important;
        }
      `}</style>
    </section>
  );
}


// ─────────────────────────────────────────
// BODY
// ─────────────────────────────────────────
function InsightsBody({ featured, rest }) {
  return (
    <section
      style={{
        background: "#EBF1FF",
        padding: "5rem 0",
        borderBottom: "1px solid #E2EBF6",
      }}
    >
      <div className="section-wrap">

        {/* ── Featured Article — Large ── */}
        {featured.length > 0 && (
          <div style={{ marginBottom: "3rem" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
              marginBottom: "1.75rem",
            }}>
              <div style={{
                width: "3px", height: "16px",
                borderRadius: "9999px",
                background: "linear-gradient(180deg, #00C9A7, #1565C0)",
              }} />
              <span style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                color: "#506A84",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
              }}>
                Featured
              </span>
            </div>

            <ArticleCardLarge article={featured[0]} />
          </div>
        )}

        {/* ── Remaining Articles — Grid ── */}
        {(featured.slice(1).length > 0 || rest.length > 0) && (
          <div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
              marginBottom: "1.75rem",
            }}>
              <div style={{
                width: "3px", height: "16px",
                borderRadius: "9999px",
                background: "linear-gradient(180deg, #1565C0, #00BCD4)",
              }} />
              <span style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                color: "#506A84",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
              }}>
                All Insights
              </span>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.25rem",
            }}>
              {[...featured.slice(1), ...rest].map((article, i) => (
                <ArticleCard key={article.slug} article={article} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* ── Empty state ── */}
        {featured.length === 0 && rest.length === 0 && (
          <div style={{
            textAlign: "center",
            padding: "5rem 2rem",
          }}>
            <div style={{
              width: "56px", height: "56px",
              borderRadius: "16px",
              background: "#EBF4FF",
              border: "1px solid #BDD2FF",
              display: "flex", alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              margin: "0 auto 1.25rem",
            }}>
              🔬
            </div>
            <h3 style={{
              fontSize: "1.1rem", fontWeight: 700,
              color: "#0D1B2A", marginBottom: "0.625rem",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              Our first insights are being written.
            </h3>
            <p style={{
              fontSize: "0.875rem", color: "#506A84",
              fontFamily: "'Inter', sans-serif",
              maxWidth: "340px", margin: "0 auto",
              lineHeight: 1.7,
            }}>
              Research takes time. Check back soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// LARGE ARTICLE CARD — Featured
// ─────────────────────────────────────────
function ArticleCardLarge({ article }) {
  const colors = categoryColors[article.categorySlug] || categoryColors["product"];
  const hasCover = Boolean(article.cover);

  return (
    <Link href={`/insights/${article.slug}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E2EBF6",
          borderRadius: "1.25rem",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1fr",
          transition: "border-color 0.25s ease, box-shadow 0.25s ease",
          boxShadow: "0 2px 12px rgba(13,27,42,0.05)",
        }}
        className="large-card"
      >
        {/* Cover image */}
        <div style={{
          position: "relative",
          height: "260px",
          background: hasCover
            ? "transparent"
            : `linear-gradient(135deg, ${colors.color}12 0%, rgba(21,101,192,0.06) 100%)`,
          borderBottom: "1px solid #E2EBF6",
          overflow: "hidden",
        }}>
          {hasCover ? (
            <Image
              src={article.cover}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          ) : (
            <>
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "radial-gradient(circle, rgba(21,101,192,0.05) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
                pointerEvents: "none",
              }} />
              <div style={{
                position: "absolute", inset: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{
                  width: "64px", height: "64px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.9)",
                  border: `1px solid ${colors.border}`,
                  display: "flex", alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                }}>
                  {categoryIcons[article.categorySlug] || "📌"}
                </div>
              </div>
            </>
          )}

          {/* Featured pill */}
          <div style={{
            position: "absolute", top: "1rem", left: "1rem",
            padding: "0.25rem 0.75rem",
            borderRadius: "9999px",
            background: "rgba(13,27,42,0.7)",
            backdropFilter: "blur(8px)",
            fontSize: "0.62rem", fontWeight: 700,
            color: "white",
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "0.06em",
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
            FEATURED
          </div>

          {/* Read time */}
          <div style={{
            position: "absolute", top: "1rem", right: "1rem",
            padding: "0.25rem 0.75rem",
            borderRadius: "9999px",
            background: "rgba(255,255,255,0.92)",
            border: "1px solid #E2EBF6",
            backdropFilter: "blur(8px)",
            fontSize: "0.65rem", fontWeight: 700,
            color: "#506A84",
            fontFamily: "'Inter', sans-serif",
          }}>
            {article.readTime}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "2rem" }}>

          {/* Category badge */}
          <div style={{
            display: "inline-flex",
            padding: "0.2rem 0.75rem",
            borderRadius: "9999px",
            background: colors.bg,
            border: `1px solid ${colors.border}`,
            marginBottom: "1rem",
          }}>
            <span style={{
              fontSize: "0.65rem", fontWeight: 700,
              color: colors.color, letterSpacing: "0.06em",
              fontFamily: "'Inter', sans-serif",
            }}>
              {article.category.toUpperCase()}
            </span>
          </div>

          {/* Title */}
          <h2 style={{
            fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
            fontWeight: 800, color: "#0D1B2A",
            lineHeight: 1.25, marginBottom: "0.875rem",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            {article.title}
          </h2>

          {/* Summary */}
          <p style={{
            fontSize: "0.9rem", color: "#506A84",
            lineHeight: 1.8, marginBottom: "1.5rem",
            fontFamily: "'Inter', sans-serif",
            maxWidth: "560px",
          }}>
            {article.summary}
          </p>

          {/* Tags */}
          <div style={{
            display: "flex", flexWrap: "wrap",
            gap: "0.375rem", marginBottom: "1.5rem",
          }}>
            {article.tags.map((tag) => (
              <span key={tag} style={{
                fontSize: "0.62rem", fontWeight: 600,
                padding: "0.2rem 0.6rem",
                borderRadius: "9999px",
                background: "#F4F9FF",
                border: "1px solid #E2EBF6",
                color: "#8BA8C8",
                fontFamily: "'Inter', sans-serif",
              }}>
                #{tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "1.25rem",
            borderTop: "1px solid #F0F6FF",
          }}>
            {/* Author */}
            <div style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
            }}>
              <Image
                    src="/p_only.png"
                    alt="Prothom AI"
                    width={32}
                    height={40}
                    style={{ width: "24px", height: "auto", flexShrink: 0 }}
                />
              <div>
                <div style={{
                  fontSize: "0.72rem", fontWeight: 600,
                  color: "#2C3E50",
                  fontFamily: "'Inter', sans-serif",
                }}>
                  {article.author}
                </div>
                <div style={{
                  fontSize: "0.65rem", color: "#8BA8C8",
                  fontFamily: "'Inter', sans-serif",
                }}>
                  {article.publishedAt}
                </div>
              </div>
            </div>

            {/* Read link */}
            <div style={{
              display: "flex", alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.82rem", fontWeight: 700,
              color: "#1565C0",
              fontFamily: "'Inter', sans-serif",
            }}>
              Read Article
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .large-card:hover {
          border-color: #BDD2FF;
          box-shadow: 0 12px 40px rgba(21,101,192,0.1);
        }

        @media (min-width: 768px) {
          .large-card {
            grid-template-columns: 420px 1fr !important;
          }
          .large-card > div:first-child {
            height: 100% !important;
            min-height: 300px !important;
          }
        }
      `}</style>
    </Link>
  );
}

// ─────────────────────────────────────────
// REGULAR ARTICLE CARD
// ─────────────────────────────────────────
function ArticleCard({ article, index }) {
  const colors = categoryColors[article.categorySlug] || categoryColors["product"];
  const hasCover = Boolean(article.cover);

  return (
    <Link href={`/insights/${article.slug}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E2EBF6",
          borderRadius: "1rem",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          transition: "border-color 0.25s ease, transform 0.25s ease",
          boxShadow: "0 1px 8px rgba(13,27,42,0.04)",
          opacity: 0,
          transform: "translateY(16px)",
          animation: `fadeUpCard 0.5s ease ${index * 80}ms both`,
        }}
        className="article-card"
      >
        {/* Cover */}
        <div style={{
          position: "relative",
          height: "160px",
          background: hasCover
            ? "transparent"
            : `linear-gradient(135deg, ${colors.color}10 0%, rgba(21,101,192,0.05) 100%)`,
          borderBottom: "1px solid #E2EBF6",
          overflow: "hidden",
          flexShrink: 0,
        }}>
          {hasCover ? (
            <Image
              src={article.cover}
              alt={article.title}
              fill
              sizes="(max-width: 640px) 100vw, 350px"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <>
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "radial-gradient(circle, rgba(21,101,192,0.04) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
                pointerEvents: "none",
              }} />
              <div style={{
                position: "absolute", inset: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{
                  width: "44px", height: "44px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.9)",
                  border: `1px solid ${colors.border}`,
                  display: "flex", alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                }}>
                  {categoryIcons[article.categorySlug] || "📌"}
                </div>
              </div>
            </>
          )}

          {/* Read time */}
          <div style={{
            position: "absolute", top: "0.75rem", right: "0.75rem",
            padding: "0.2rem 0.625rem",
            borderRadius: "9999px",
            background: "rgba(255,255,255,0.92)",
            border: "1px solid #E2EBF6",
            backdropFilter: "blur(8px)",
            fontSize: "0.62rem", fontWeight: 700,
            color: "#506A84",
            fontFamily: "'Inter', sans-serif",
          }}>
            {article.readTime}
          </div>
        </div>

        {/* Content */}
        <div style={{
          padding: "1.25rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.625rem",
          flex: 1,
        }}>
          {/* Category */}
          <div style={{
            display: "inline-flex",
            width: "fit-content",
            padding: "0.2rem 0.625rem",
            borderRadius: "9999px",
            background: colors.bg,
            border: `1px solid ${colors.border}`,
          }}>
            <span style={{
              fontSize: "0.6rem", fontWeight: 700,
              color: colors.color, letterSpacing: "0.06em",
              fontFamily: "'Inter', sans-serif",
            }}>
              {article.category.toUpperCase()}
            </span>
          </div>

          {/* Title */}
          <h3 style={{
            fontSize: "0.95rem", fontWeight: 700,
            color: "#0D1B2A", lineHeight: 1.4,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            flex: 1,
          }}>
            {article.title}
          </h3>

          {/* Summary */}
          <p style={{
            fontSize: "0.8rem", color: "#506A84",
            lineHeight: 1.7,
            fontFamily: "'Inter', sans-serif",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}>
            {article.summary}
          </p>

          {/* Tags */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "0.3rem",
          }}>
            {article.tags.slice(0, 2).map((tag) => (
              <span key={tag} style={{
                fontSize: "0.58rem", fontWeight: 600,
                padding: "0.15rem 0.5rem",
                borderRadius: "9999px",
                background: "#F4F9FF",
                border: "1px solid #E2EBF6",
                color: "#8BA8C8",
                fontFamily: "'Inter', sans-serif",
              }}>
                #{tag}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #D4E6F7, transparent)",
            margin: "0.25rem 0",
          }} />

          {/* Footer */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <span style={{
              fontSize: "0.65rem", color: "#8BA8C8",
              fontFamily: "'Inter', sans-serif",
            }}>
              {article.publishedAt}
            </span>
            <div style={{
              display: "flex", alignItems: "center",
              gap: "0.25rem",
              fontSize: "0.75rem", fontWeight: 700,
              color: "#1565C0",
              fontFamily: "'Inter', sans-serif",
            }}>
              Read
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUpCard {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <style>{`
        .article-card:hover {
          border-color: #BDD2FF;
          transform: translateY(-4px);
        }
      `}</style>
    </Link>
  );
}