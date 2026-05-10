import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/sections/Navbar";
import Footer from "../../../components/sections/Footer";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllInsights, getAllInsightSlugs, getInsightBySlug } from "../../../lib/mdx";
import Image from "next/image";

const categoryColors = {
  "parking-industry": { bg: "#EBF4FF", color: "#1565C0", border: "#BDD2FF" },
  "urban-mobility":   { bg: "rgba(0,201,167,0.08)", color: "#00A886", border: "rgba(0,201,167,0.2)" },
  "product":          { bg: "rgba(30,136,229,0.08)", color: "#1E88E5", border: "rgba(30,136,229,0.2)" },
  "company":          { bg: "rgba(156,39,176,0.08)", color: "#7B1FA2", border: "rgba(156,39,176,0.2)" },
  "smart-cities":     { bg: "rgba(0,188,212,0.08)", color: "#00BCD4", border: "rgba(0,188,212,0.2)" },
  "research":         { bg: "rgba(59,130,246,0.08)", color: "#3B82F6", border: "rgba(59,130,246,0.2)" },
};

const categoryIcons = {
  "parking-industry": "🅿️",
  "urban-mobility":   "🏙️",
  "product":          "⚙️",
  "company":          "🔬",
  "smart-cities":     "🌆",
  "research":         "📊",
};

export async function generateStaticParams() {
  return getAllInsightSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: article.cover ? [article.cover] : undefined,
    },
  };
}

export default async function InsightPage({ params }) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) notFound();

  const colors = categoryColors[article.categorySlug] || categoryColors.product;
  const icon = categoryIcons[article.categorySlug] || "📌";
  const related = getAllInsights().filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <main>
      <Navbar />
      <ArticleHero article={article} icon={icon} />
      <ArticleBody article={article} colors={colors} />
      <RelatedArticles related={related} />
      <Footer />
    </main>
  );
}




function ArticleHero({ article, icon }) {
  return (
    <section
      style={{
        background:
          "radial-gradient(circle at top left, rgba(6,182,212,0.1), transparent 30%), linear-gradient(180deg, #07111F 0%, #0B1120 100%)",
        paddingTop: "9rem",
        paddingBottom: "4rem",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        opacity: 0.3,
      }} />

      {/* Glow */}
      <div style={{
        position: "absolute",
        width: "600px", height: "600px",
        borderRadius: "9999px",
        background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
        filter: "blur(80px)",
        top: "-200px", right: "-100px",
        pointerEvents: "none",
      }} />

      <div
        className="section-wrap"
        style={{ position: "relative", zIndex: 2 }}
      >
        {/* Breadcrumb */}
        <div style={{
          display: "flex", alignItems: "center",
          gap: "0.5rem", marginBottom: "2.5rem",
          flexWrap: "wrap",
        }}>
          <Link
            href="/"
            className="article-hero-breadcrumb-link"
            style={{
              fontSize: "0.75rem", color: "#64748B",
              fontFamily: "'Inter', sans-serif",
              textDecoration: "none", fontWeight: 500,
              transition: "color 0.2s",
            }}>
            Home
          </Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="rgba(255,255,255,0.2)" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
          <Link
            href="/insights"
            className="article-hero-breadcrumb-link"
            style={{
              fontSize: "0.75rem", color: "#64748B",
              fontFamily: "'Inter', sans-serif",
              textDecoration: "none", fontWeight: 500,
              transition: "color 0.2s",
            }}>
            Insights
          </Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="rgba(255,255,255,0.2)" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
          <span
            style={{
              fontSize: "0.75rem",
              color: "#E2E8F0",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
            }}
            title={article.title}
          >
            {article.title}
          </span>
        </div>

        <div style={{ maxWidth: "720px" }}>
          {/* Left — content */}
          <div>

            {/* Category badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
              <Link
                href={`/insights/category/${article.categorySlug}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  padding: "0.35rem 0.875rem",
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  textDecoration: "none",
                  backdropFilter: "blur(12px)",
                  transition: "background 0.2s ease",
                }}
              >
                <span>{icon}</span>
                <span style={{
                  fontSize: "0.68rem", fontWeight: 700,
                  color: "#67E8F9", letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontFamily: "'Inter', sans-serif",
                }}>
                  {article.category}
                </span>
              </Link>
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: "clamp(1.75rem, 4vw, 2.875rem)",
              fontWeight: 800, lineHeight: 1.1,
              letterSpacing: "-0.04em",
              color: "#F8FAFC",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              marginBottom: "1.25rem",
            }}>
              {article.title}
            </h1>

            {/* Summary */}
            <p style={{
              fontSize: "1rem",
              color: "#94A3B8",
              lineHeight: 1.85,
              fontFamily: "'Inter', sans-serif",
              marginBottom: "2rem",
              maxWidth: "560px",
            }}>
              {article.summary}
            </p>

            {/* Meta row */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              flexWrap: "wrap",
              paddingTop: "1.25rem",
              borderTop: "1px solid rgba(255,255,255,0.08)",
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
                    fontSize: "0.78rem", fontWeight: 700,
                    color: "#E2E8F0",
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    {article.author}
                  </div>
                  <div style={{
                    fontSize: "0.65rem", color: "#64748B",
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    Prothom Analytica India
                  </div>
                </div>
              </div>

              <div style={{
                width: "1px", height: "28px",
                background: "rgba(255,255,255,0.08)",
              }} />

              {/* Date */}
              <div>
                <div style={{
                  fontSize: "0.65rem", color: "#64748B",
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "0.1rem",
                }}>
                  Published
                </div>
                <div style={{
                  fontSize: "0.78rem", fontWeight: 600,
                  color: "#94A3B8",
                  fontFamily: "'Inter', sans-serif",
                }}>
                  {article.publishedAt}
                </div>
              </div>

              <div style={{
                width: "1px", height: "28px",
                background: "rgba(255,255,255,0.08)",
              }} />

              {/* Read time */}
              <div>
                <div style={{
                  fontSize: "0.65rem", color: "#64748B",
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "0.1rem",
                }}>
                  Read time
                </div>
                <div style={{
                  fontSize: "0.78rem", fontWeight: 600,
                  color: "#94A3B8",
                  fontFamily: "'Inter', sans-serif",
                }}>
                  {article.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .article-hero-breadcrumb-link:hover {
          color: #94A3B8;
        }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────
// ARTICLE BODY
// ─────────────────────────────────────────
function ArticleBody({ article, colors }) {
  if (!article.content) {
    return (
      <section style={{
        background: "#FFFFFF",
        padding: "5rem 0",
        borderBottom: "1px solid #E2EBF6",
      }}>
        <div className="section-wrap" style={{ maxWidth: "720px" }}>
          <div style={{
            textAlign: "center", padding: "4rem 2rem",
            background: "#F4F9FF",
            border: "1px solid #E2EBF6",
            borderRadius: "1.5rem",
          }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✍️</div>
            <h3 style={{
              fontSize: "1.1rem", fontWeight: 700,
              color: "#0D1B2A", marginBottom: "0.625rem",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              Full article coming soon.
            </h3>
            <p style={{
              fontSize: "0.85rem", color: "#506A84",
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.7,
            }}>
              We are finishing this piece. Subscribe to be notified
              when it publishes.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{
      background: "#FFFFFF",
      padding: "5rem 0",
      borderBottom: "1px solid #E2EBF6",
    }}>
      <div className="section-wrap">
        {/* Featured image - full width */}
        {article.cover && (
          <div style={{
            marginBottom: "3rem",
            borderRadius: "1.5rem",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(13,27,42,0.12)",
            maxWidth: "900px",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.cover}
              alt={article.title}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        )}

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
          alignItems: "start",
        }}
          className="article-body-grid"
        >
          {/* Article content */}
          <div style={{ maxWidth: "680px" }}>
            <div className="insight-mdx-body">
              <MDXRemote source={article.content} />
            </div>

            {/* Tags at bottom */}
            <div style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid #E2EBF6",
            }}>
              <div style={{
                fontSize: "0.65rem", fontWeight: 700,
                color: "#8BA8C8", letterSpacing: "0.12em",
                textTransform: "uppercase", marginBottom: "0.875rem",
                fontFamily: "'Inter', sans-serif",
              }}>
                Filed under
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      padding: "0.3rem 0.75rem",
                      borderRadius: "9999px",
                      background: "#F4F9FF",
                      border: "1px solid #E2EBF6",
                      color: "#506A84",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            position: "sticky",
            top: "6rem",
          }}>
            {/* About Prothom */}
            <div style={{
              background: "#F4F9FF",
              border: "1px solid #E2EBF6",
              borderRadius: "1.25rem",
              padding: "1.5rem",
            }}>
              <div style={{
                display: "flex", alignItems: "center",
                gap: "0.75rem", marginBottom: "1rem",
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
                    fontSize: "0.82rem", fontWeight: 700,
                    color: "#0D1B2A",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>
                    Prothom Analytica India
                  </div>
                  <div style={{
                    fontSize: "0.68rem", color: "#8BA8C8",
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    Research-first technology
                  </div>
                </div>
              </div>
              <p style={{
                fontSize: "0.78rem", color: "#506A84",
                lineHeight: 1.7, marginBottom: "1rem",
                fontFamily: "'Inter', sans-serif",
              }}>
                We build organized systems for India&apos;s most
                ignored problems. YPark is our first product.
              </p>
              <Link
                href="/about"
                className="btn-ghost"
                style={{ fontSize: "0.78rem" }}
              >
                Our story →
              </Link>
            </div>

            {/* YPark CTA */}
            <div style={{
              background: "linear-gradient(135deg, #1565C0, #1E88E5)",
              borderRadius: "1.25rem",
              padding: "1.5rem",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(21,101,192,0.2)",
            }}>
              <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <Image
                  src="/ypark.png"
                  alt="Prothom AI"
                  width={32}
                  height={40}
                  style={{ width: "24px", height: "auto", flexShrink: 0 }}
                />
                <div style={{
                  fontSize: "0.875rem", fontWeight: 700,
                  color: "white", marginBottom: "0.375rem",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                  Explore YPARK
                </div>
                <div style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.8)",
                  marginBottom: "1rem",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.6,
                }}>
                  India&apos;s organized parking marketplace.
                  Live in 6 cities.
                </div>
                <a
                  href="https://ypark.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.625rem",
                    background: "rgba(255,255,255,0.15)",
                    color: "white",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    fontFamily: "'Inter', sans-serif",
                    transition: "background 0.2s ease",
                  }}>
                  Visit YPark →
                </a>
              </div>
            </div>

            {/* Subscribe */}
            <div style={{
              background: "#FFFFFF",
              border: "1px solid #E2EBF6",
              borderRadius: "1.25rem",
              padding: "1.5rem",
              boxShadow: "0 2px 12px rgba(13,27,42,0.04)",
            }}>
              <div style={{
                fontSize: "0.65rem", fontWeight: 700,
                color: "#00C9A7", letterSpacing: "0.12em",
                textTransform: "uppercase", marginBottom: "0.5rem",
                fontFamily: "'Inter', sans-serif",
              }}>
                Get In Touch
              </div>
              <div style={{
                fontSize: "0.875rem", fontWeight: 700,
                color: "#0D1B2A", marginBottom: "0.375rem",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>
                Contact us for research, consulting, or partnership inquiries.
              </div>
              
              <Link href="/contact" className="btn-secondary" style={{
                width: "100%", justifyContent: "center",
                fontSize: "0.8rem", padding: "0.625rem",
              }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .insight-mdx-body {
          color: #2C3E50;
          font-family: 'Inter', sans-serif;
        }

        .insight-mdx-body > :first-child {
          margin-top: 0;
        }

        .insight-mdx-body h1,
        .insight-mdx-body h2,
        .insight-mdx-body h3,
        .insight-mdx-body h4 {
          color: #0D1B2A;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          line-height: 1.3;
          margin-top: 2.25rem;
          margin-bottom: 0.9rem;
        }

        .insight-mdx-body h2 {
          font-size: 1.2rem;
        }

        .insight-mdx-body h3 {
          font-size: 1rem;
        }

        .insight-mdx-body p,
        .insight-mdx-body li {
          font-size: 0.975rem;
          line-height: 1.9;
        }

        .insight-mdx-body p {
          margin: 0 0 1.25rem;
        }

        .insight-mdx-body ul,
        .insight-mdx-body ol {
          margin: 0 0 1.5rem;
          padding-left: 1.25rem;
        }

        .insight-mdx-body li + li {
          margin-top: 0.45rem;
        }

        .insight-mdx-body hr {
          border: 0;
          border-top: 1px solid #E2EBF6;
          margin: 2rem 0;
        }

        .insight-mdx-body blockquote {
          margin: 2rem 0;
          padding: 1.25rem 1.5rem;
          border-left: 4px solid ${colors.color};
          background: #F4F9FF;
          border-radius: 0 1rem 1rem 0;
          color: #2C3E50;
          font-weight: 500;
        }

        .insight-mdx-body a {
          color: #1565C0;
          font-weight: 600;
        }

        @media (min-width: 1024px) {
          .article-body-grid {
            grid-template-columns: 1fr 280px !important;
          }
        }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────
// RELATED ARTICLES
// ─────────────────────────────────────────
function RelatedArticles({ related }) {
  if (related.length === 0) return null;

  return (
    <section style={{
      background: "#F4F9FF",
      padding: "4rem 0",
      borderBottom: "1px solid #E2EBF6",
    }}>
      <div className="section-wrap">
        <div style={{
          display: "flex", alignItems: "center",
          gap: "0.75rem", marginBottom: "2rem",
        }}>
          <div style={{
            width: "4px", height: "20px",
            borderRadius: "9999px",
            background: "linear-gradient(180deg, #00C9A7, #1565C0)",
          }} />
          <span style={{
            fontSize: "0.72rem", fontWeight: 700,
            color: "#506A84", letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: "'Inter', sans-serif",
          }}>
            More Insights
          </span>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}>
          {related.map((article) => {
            const colors = categoryColors[article.categorySlug] || categoryColors["product"];
            const icon = categoryIcons[article.categorySlug] || "📌";
            const hasCoverImage = Boolean(article.cover);
            return (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2EBF6",
                  borderRadius: "1.25rem",
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(13,27,42,0.04)",
                }}>
                  <div style={{
                    height: "180px",
                    position: "relative",
                    overflow: "hidden",
                    background: hasCoverImage
                      ? "#D9E6F5"
                      : `linear-gradient(135deg, ${colors.color}18 0%, rgba(21,101,192,0.08) 100%)`,
                    ...(hasCoverImage
                      ? {
                          backgroundImage: `linear-gradient(180deg, rgba(13,27,42,0.05) 0%, rgba(13,27,42,0.28) 100%), url(${article.cover})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : {}),
                  }}>
                    {!hasCoverImage && (
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
                    <div style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      display: "inline-flex",
                      padding: "0.2rem 0.55rem",
                      borderRadius: "9999px",
                      background: "rgba(255,255,255,0.9)",
                      border: `1px solid ${colors.border}`,
                      backdropFilter: "blur(8px)",
                    }}>
                      <span style={{
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        color: colors.color,
                        letterSpacing: "0.06em",
                        fontFamily: "'Inter', sans-serif",
                      }}>
                        {article.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: "1.25rem 1.25rem 1.35rem" }}>
                    <div style={{
                      fontSize: "0.875rem", fontWeight: 700,
                      color: "#0D1B2A", lineHeight: 1.4,
                      marginBottom: "0.375rem",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                      {article.title}
                    </div>
                    <div style={{
                      fontSize: "0.72rem", color: "#8BA8C8",
                      fontFamily: "'Inter', sans-serif",
                    }}>
                      {article.readTime} · {article.publishedAt}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div style={{
          textAlign: "center", marginTop: "2rem",
        }}>
          <Link href="/insights" className="btn-ghost">
            All Insights
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}