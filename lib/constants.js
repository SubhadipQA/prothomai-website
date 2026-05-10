/* ════════════════════════════════════════
   CATEGORIES
════════════════════════════════════════ */

export const categories = [
  { label: "Parking Industry",  slug: "parking-industry" },
  { label: "Urban Mobility",    slug: "urban-mobility"   },
  { label: "Product",           slug: "product"          },
  { label: "Company",           slug: "company"          },
  { label: "Smart Cities",      slug: "smart-cities"     },
  { label: "Research",          slug: "research"         },
];

/* ════════════════════════════════════════
   CATEGORY COLORS
   Used by insight cards + category pages
════════════════════════════════════════ */

export const categoryColors = {
  "parking-industry": {
    bg:     "rgba(6, 182, 212, 0.08)",
    color:  "#06B6D4",
    border: "rgba(6, 182, 212, 0.25)",
  },
  "urban-mobility": {
    bg:     "rgba(34, 197, 94, 0.08)",
    color:  "#22C55E",
    border: "rgba(34, 197, 94, 0.25)",
  },
  "product": {
    bg:     "rgba(139, 92, 246, 0.08)",
    color:  "#8B5CF6",
    border: "rgba(139, 92, 246, 0.25)",
  },
  "company": {
    bg:     "rgba(245, 158, 11, 0.08)",
    color:  "#F59E0B",
    border: "rgba(245, 158, 11, 0.25)",
  },
  "smart-cities": {
    bg:     "rgba(236, 72, 153, 0.08)",
    color:  "#EC4899",
    border: "rgba(236, 72, 153, 0.25)",
  },
  "research": {
    bg:     "rgba(59, 130, 246, 0.08)",
    color:  "#3B82F6",
    border: "rgba(59, 130, 246, 0.25)",
  },
};

/* ════════════════════════════════════════
   CATEGORY ICONS
   Used on cards when no cover image
════════════════════════════════════════ */

export const categoryIcons = {
  "parking-industry": "🅿️",
  "urban-mobility":   "🏙️",
  "product":          "⚙️",
  "company":          "🔬",
  "smart-cities":     "🌆",
  "research":         "📊",
};

/* ════════════════════════════════════════
   INSIGHTS DATA
   — summary, cover, category, tags
   — full article body lives in
     app/insights/[slug]/page.js
════════════════════════════════════════ */

export const insights = [];

/* ════════════════════════════════════════
   NAV LINKS
   Shared by Navbar + Footer
════════════════════════════════════════ */

export const navLinks = [
  { label: "Products", href: "/#products"  },
  { label: "About",    href: "/about"       },
  { label: "Insights", href: "/insights"    },
  { label: "Contact",  href: "/contact"     },
];

/* ════════════════════════════════════════
   FOOTER LINKS
════════════════════════════════════════ */

export const footerLinks = {
  Company: [
    { label: "About",        href: "/about"        },
    { label: "Products",     href: "/#products"    },
    { label: "Insights",     href: "/insights"     },
    { label: "Contact",      href: "/contact"      },
  ],
  Product: [
    { label: "YPark",               href: "https://ypark.in",          external: true },
    { label: "For Parking Owners",  href: "https://ypark.in/partners", external: true },
    { label: "For Vehicle Owners",  href: "https://ypark.in/drivers",  external: true },
  ],
  Insights: [
    { label: "Parking Industry", href: "/insights/category/parking-industry" },
    { label: "Urban Mobility",   href: "/insights/category/urban-mobility"   },
    { label: "Product",          href: "/insights/category/product"          },
    { label: "Company",          href: "/insights/category/company"          },
    { label: "Smart Cities",     href: "/insights/category/smart-cities"     },
  ],
  Legal: [
    { label: "Privacy Policy",  href: "/privacy" },
    { label: "Terms of Service",href: "/terms"   },
    { label: "Cookie Policy",   href: "/cookies" },
  ],
};

/* ════════════════════════════════════════
   SOCIAL LINKS
════════════════════════════════════════ */

export const socialLinks = [
  {
    label: "LinkedIn",
    href:  "https://www.linkedin.com/in/prothom-ai-3432b6408/?isSelfProfile=true",
  },
  // {
  //   label: "Instagram",
  //   href:  "https://instagram.com/prothomanalytica",
  // },
  // {
  //   label: "YouTube",
  //   href:  "https://youtube.com/@prothomanalytica",
  // },
];

/* ════════════════════════════════════════
   ECOSYSTEM PRODUCTS
   Used by Ecosystem section on homepage
════════════════════════════════════════ */

export const ecosystemProducts = [
  {
    id:          "ypark",
    name:        "YPark",
    tagline:     "Organized Parking Marketplace",
    desc:        "Connects parking zone owners with daily drivers. Owners manage visits, passes, staff and revenue. Drivers find and book parking near them.",
    href:        "https://ypark.in",
    status:      "live",
    statusLabel: "Operational",
    icon:        "🅿️",
    color:       "#06B6D4",
  },
  {
    id:          "ypartner",
    name:        "YPartner",
    tagline:     "Partner Management System",
    desc:        "Backend infrastructure for managing partner networks, commission structures, and zone onboarding at scale.",
    href:        "#",
    status:      "soon",
    statusLabel: "Coming Soon",
    icon:        "🤝",
    color:       "#8B5CF6",
  },
  {
    id:          "yadmin",
    name:        "YAdmin",
    tagline:     "Operations Control Panel",
    desc:        "Central command for operations teams. Zone oversight, staff management, revenue reconciliation and system-wide analytics.",
    href:        "#",
    status:      "soon",
    statusLabel: "Coming Soon",
    icon:        "⚙️",
    color:       "#F59E0B",
  },
];