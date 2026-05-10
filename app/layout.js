import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://prothomai.com"),

  title: {
    default: "Prothom Analytica India — Organizing What India Has Ignored",
    template: "%s | Prothom Analytica India",
  },

  description:
    "Prothom Analytica India is a research-first technology company building organized systems for India's most ignored operational problems. Currently building YPark — India's organized parking marketplace.",

  keywords: [
    "Prothom Analytica",
    "YPark",
    "parking management India",
    "organized parking",
    "India tech startup",
    "urban mobility India",
    "parking marketplace",
    "smart parking India",
  ],

  authors: [{ name: "Prothom Analytica India Pvt. Ltd." }],

  creator: "Prothom Analytica India Pvt. Ltd.",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://prothomai.com",
    siteName: "Prothom Analytica India",
    title: "Prothom Analytica India — Organizing What India Has Ignored",
    description:
      "Research-first technology company building organized systems for India's most ignored operational problems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prothom Analytica India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Prothom Analytica India",
    description:
      "Research-first technology company building organized systems for India's most ignored operational problems.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts — preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}