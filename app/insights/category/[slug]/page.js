import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../../components/sections/Navbar";
import Footer from "../../../../components/sections/Footer";
import { categories } from "../../../../lib/constants";
import { getAllInsights } from "../../../../lib/mdx";

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

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) return {};

  return {
    title: `${category.label} Insights`,
    description: `All insight posts in the ${category.label} category.`,
  };
}

export default async function InsightCategoryPage({ params }) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) notFound();

  const articles = getAllInsights().filter((article) => article.categorySlug === slug);
  const colors = categoryColors[slug] || categoryColors.product;
  const icon = categoryIcons[slug] || "📌";

  return (
    <main>
      <Navbar />
      <section style={{
        background: "radial-gradient(circle at top left, rgba(6,182,212,0.1), transparent 30%), linear-gradient(180deg, #07111F 0%, #0B1120 100%)",
        paddingTop: "9rem",
        paddingBottom: "4rem",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div
          className="grid-pattern"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.18,
          }}
        />
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "320px",
          background: "linear-gradient(180deg, rgba(6,182,212,0.08) 0%, transparent 100%)",
          pointerEvents: "none",
        }} />

        <div style={{
          position: "absolute",
          width: "560px",
          height: "560px",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "-220px",
          right: "-140px",
          pointerEvents: "none",
        }} />

        <div className="section-wrap" style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "2rem",
            flexWrap: "wrap",
          }}>
            <Link href="/" style={breadcrumbLinkStyle}>Home</Link>
            <Chevron />
            <Link href="/insights" style={breadcrumbLinkStyle}>Insights</Link>
            <Chevron />
            <span style={breadcrumbCurrentStyle}>{category.label}</span>
          </div>

          <div style={{ maxWidth: "760px" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              padding: "0.35rem 0.9rem",
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
              marginBottom: "1.25rem",
            }}>
              <span>{icon}</span>
              <span style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                color: "#67E8F9",
                letterSpacing: "0.08em",
                fontFamily: "'Inter', sans-serif",
              }}>
                CATEGORY
              </span>
            </div>

            <h1 style={{
              fontSize: "clamp(2.1rem, 5vw, 3.6rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-1.25px",
              color: "#F8FAFC",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              marginBottom: "1rem",
            }}>
              {category.label}
            </h1>

            <p style={{
              fontSize: "1rem",
              color: "#94A3B8",
              lineHeight: 1.8,
              fontFamily: "'Inter', sans-serif",
              maxWidth: "560px",
            }}>
              All posts in the {category.label} category. Browse the full set of related research and findings here.
            </p>
          </div>
        </div>
      </section>

      <section style={{
        background: "#F4F9FF",
        padding: "4rem 0 5rem",
        borderBottom: "1px solid #E2EBF6",
      }}>
        <div className="section-wrap">
          {articles.length > 0 ? (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}>
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <article style={{
                    background: "#FFFFFF",
                    border: "1px solid #E2EBF6",
                    borderRadius: "1.25rem",
                    overflow: "hidden",
                    boxShadow: "0 2px 12px rgba(13,27,42,0.04)",
                    height: "100%",
                  }}>
                    <div style={{
                      height: "190px",
                      background: article.cover
                        ? `linear-gradient(180deg, rgba(13,27,42,0.08) 0%, rgba(13,27,42,0.22) 100%), url(${article.cover}) center/cover`
                        : `linear-gradient(135deg, ${colors.color}18 0%, rgba(21,101,192,0.08) 100%)`,
                      position: "relative",
                    }}>
                      {!article.cover && (
                        <div style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "2rem",
                        }}>
                          {icon}
                        </div>
                      )}
                    </div>

                    <div style={{ padding: "1.25rem" }}>
                      <div style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        padding: "0.2rem 0.55rem",
                        borderRadius: "9999px",
                        background: colors.bg,
                        border: `1px solid ${colors.border}`,
                        marginBottom: "0.75rem",
                      }}>
                        <span style={{
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          color: colors.color,
                          letterSpacing: "0.06em",
                          fontFamily: "'Inter', sans-serif",
                        }}>
                          {category.label.toUpperCase()}
                        </span>
                      </div>

                      <h2 style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        lineHeight: 1.45,
                        color: "#0D1B2A",
                        marginBottom: "0.5rem",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}>
                        {article.title}
                      </h2>

                      <p style={{
                        fontSize: "0.8rem",
                        color: "#506A84",
                        lineHeight: 1.7,
                        marginBottom: "0.85rem",
                        fontFamily: "'Inter', sans-serif",
                      }}>
                        {article.summary}
                      </p>

                      <div style={{
                        fontSize: "0.72rem",
                        color: "#8BA8C8",
                        fontFamily: "'Inter', sans-serif",
                      }}>
                        {article.readTime} · {article.publishedAt}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: "center",
              padding: "4rem 2rem",
              background: "#FFFFFF",
              border: "1px solid #E2EBF6",
              borderRadius: "1.5rem",
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{icon}</div>
              <h2 style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#0D1B2A",
                marginBottom: "0.5rem",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>
                No posts in this category yet.
              </h2>
              <p style={{
                fontSize: "0.85rem",
                color: "#506A84",
                lineHeight: 1.7,
                fontFamily: "'Inter', sans-serif",
              }}>
                We have not published articles in {category.label} yet.
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}

const breadcrumbLinkStyle = {
  fontSize: "0.75rem",
  color: "#64748B",
  fontFamily: "'Inter', sans-serif",
  textDecoration: "none",
  fontWeight: 500,
};

const breadcrumbCurrentStyle = {
  fontSize: "0.75rem",
  color: "#E2E8F0",
  fontFamily: "'Inter', sans-serif",
  fontWeight: 600,
};

function Chevron() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
      stroke="rgba(255,255,255,0.2)" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}