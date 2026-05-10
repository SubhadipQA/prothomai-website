import LegalLayout, {
  LegalSection,
  LegalP,
  LegalList,
} from "../../components/sections/LegalLayout";

export const metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for Prothom Analytica India Pvt. Ltd. Learn how we use cookies and similar technologies on our websites.",
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="May 2025">

      <LegalSection title="What Are Cookies">
        <LegalP>
          Cookies are small text files placed on your device when you
          visit a website. They are widely used to make websites work
          efficiently, remember your preferences and provide information
          to website owners.
        </LegalP>
        <LegalP>
          Similar technologies include local storage, session storage
          and pixel tags. This policy covers all such technologies used
          on prothomai.com and ypark.in.
        </LegalP>
      </LegalSection>

      <LegalSection title="Cookies We Use">
        <LegalP>
          We use the following categories of cookies:
        </LegalP>

        <div style={{
          background: "#F4F9FF",
          border: "1px solid #E2EBF6",
          borderRadius: "1rem",
          overflow: "hidden",
          marginBottom: "1.5rem",
        }}>
          {[
            {
              type: "Essential Cookies",
              purpose: "Required for the website to function. Cannot be disabled.",
              examples: "Session management, security tokens, load balancing",
              color: "#1565C0",
            },
            {
              type: "Analytics Cookies",
              purpose: "Help us understand how visitors use our website.",
              examples: "Page views, time on site, navigation paths — anonymized",
              color: "#00C9A7",
            },
            {
              type: "Preference Cookies",
              purpose: "Remember your settings and choices across visits.",
              examples: "Language preference, display settings",
              color: "#00BCD4",
            },
          ].map((cookie, i) => (
            <div
              key={i}
              style={{
                padding: "1.25rem 1.5rem",
                borderBottom: i < 2 ? "1px solid #E2EBF6" : "none",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "0.375rem",
              }}
            >
              <div style={{
                display: "flex", alignItems: "center",
                gap: "0.5rem", marginBottom: "0.25rem",
              }}>
                <div style={{
                  width: "8px", height: "8px",
                  borderRadius: "9999px",
                  background: cookie.color,
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: "0.85rem", fontWeight: 700,
                  color: "#0D1B2A",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                  {cookie.type}
                </span>
              </div>
              <div style={{
                fontSize: "0.8rem", color: "#506A84",
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.6,
              }}>
                {cookie.purpose}
              </div>
              <div style={{
                fontSize: "0.72rem", color: "#8BA8C8",
                fontFamily: "'Inter', sans-serif",
                fontStyle: "italic",
              }}>
                Examples: {cookie.examples}
              </div>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection title="Third-Party Cookies">
        <LegalP>
          Some cookies on our websites are placed by third-party services
          we use. These include:
        </LegalP>
        <LegalList items={[
          "Google Analytics — to understand website traffic and usage patterns",
          "Payment gateways — for secure transaction processing",
          "Font providers — Google Fonts for typography rendering",
        ]} />
        <LegalP>
          These third parties have their own privacy and cookie policies.
          We recommend reviewing their policies separately.
        </LegalP>
      </LegalSection>

      <LegalSection title="Managing Cookies">
        <LegalP>
          You can control and manage cookies through your browser settings.
          Most browsers allow you to:
        </LegalP>
        <LegalList items={[
          "View the cookies stored on your device",
          "Delete cookies individually or in bulk",
          "Block cookies from specific websites",
          "Block all third-party cookies",
          "Set your browser to notify you when a cookie is set",
        ]} />
        <LegalP>
          Please note that disabling certain cookies may affect the
          functionality of our websites. Essential cookies cannot be
          disabled as they are required for the site to work correctly.
        </LegalP>
      </LegalSection>

      <LegalSection title="Cookie Duration">
        <LegalP>
          Cookies we use fall into two duration categories:
        </LegalP>
        <LegalList items={[
          "Session cookies — temporary cookies deleted when you close your browser",
          "Persistent cookies — remain on your device for a set period or until manually deleted",
        ]} />
        <LegalP>
          Analytics and preference cookies are typically persistent with
          durations ranging from 30 days to 2 years depending on their purpose.
        </LegalP>
      </LegalSection>

      <LegalSection title="Updates to This Policy">
        <LegalP>
          We may update this Cookie Policy as our services evolve or
          regulations change. The date of the most recent update is shown
          at the top of this page. We recommend reviewing this policy
          periodically.
        </LegalP>
      </LegalSection>

      <LegalSection title="Contact Us">
        <LegalP>
          If you have questions about our use of cookies, please contact us:
        </LegalP>
        <LegalList items={[
          "Email: info@prothomai.com",
          "Company: Prothom Analytica India Pvt. Ltd.",
          "Website: prothomai.com",
        ]} />
      </LegalSection>

    </LegalLayout>
  );
}