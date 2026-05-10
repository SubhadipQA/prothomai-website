import LegalLayout, {
  LegalSection,
  LegalP,
  LegalList,
} from "../../components/sections/LegalLayout";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Prothom Analytica India Pvt. Ltd. and YPark. Learn how we collect, use and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="May 2025">

      <LegalSection title="Overview">
        <LegalP>
          This Privacy Policy explains how Prothom Analytica India Pvt. Ltd.
          (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) collects, uses, stores
          and protects your personal information when you use our website
          at prothomai.com, our product YPark at ypark.in, or our mobile
          applications.
        </LegalP>
        <LegalP>
          By using our services, you agree to the collection and use of
          information as described in this policy. We are committed to
          protecting your privacy and handling your data responsibly.
        </LegalP>
      </LegalSection>

      <LegalSection title="Information We Collect">
        <LegalP>
          We collect the following types of information depending on
          how you interact with our services:
        </LegalP>
        <LegalList items={[
          "Name, email address and phone number when you register or contact us",
          "Business information such as parking zone name, address and documents for vendor registration",
          "Vehicle information including registration number and vehicle type for parking sessions",
          "Payment information — we do not store card details; payments are processed by third-party gateways",
          "Device information and usage data including IP address, browser type and pages visited",
          "Location data when you use location-based features in our mobile apps, with your permission",
          "Communications — messages sent through our contact form or email",
        ]} />
      </LegalSection>

      <LegalSection title="How We Use Your Information">
        <LegalP>
          We use the information we collect for the following purposes:
        </LegalP>
        <LegalList items={[
          "To provide, operate and improve our services — including YPark and the vendor management platform",
          "To process registrations, parking sessions and payments",
          "To send service-related communications such as confirmations and receipts",
          "To send our research newsletter if you have subscribed — you can unsubscribe at any time",
          "To respond to your enquiries and support requests",
          "To verify zone ownership and comply with regulatory requirements",
          "To analyse usage patterns and improve our products",
          "To comply with legal obligations",
        ]} />
      </LegalSection>

      <LegalSection title="Data Storage and Security">
        <LegalP>
          Your data is stored on secure servers. We implement
          industry-standard security measures including encryption in
          transit and at rest, access controls and regular security reviews.
        </LegalP>
        <LegalP>
          We retain your personal data for as long as necessary to provide
          our services and comply with legal obligations. You may request
          deletion of your account and associated data at any time by
          contacting us at info@prothomai.com.
        </LegalP>
      </LegalSection>

      <LegalSection title="Sharing Your Information">
        <LegalP>
          We do not sell your personal information to third parties.
          We may share your information with:
        </LegalP>
        <LegalList items={[
          "Payment gateway providers — to process transactions securely",
          "Cloud infrastructure providers — to host and operate our services",
          "Analytics providers — to understand how our services are used, in anonymized form",
          "Law enforcement or regulatory authorities — when required by law",
        ]} />
        <LegalP>
          All third-party providers we work with are contractually required
          to handle your data securely and only for the purposes we specify.
        </LegalP>
      </LegalSection>

      <LegalSection title="Your Rights">
        <LegalP>
          You have the following rights regarding your personal data:
        </LegalP>
        <LegalList items={[
          "Right to access — request a copy of the personal data we hold about you",
          "Right to correction — request correction of inaccurate or incomplete data",
          "Right to deletion — request deletion of your personal data, subject to legal obligations",
          "Right to withdraw consent — withdraw consent for newsletter communications at any time",
          "Right to lodge a complaint — with the appropriate data protection authority",
        ]} />
        <LegalP>
          To exercise any of these rights, contact us at info@prothomai.com.
          We will respond within 30 days.
        </LegalP>
      </LegalSection>

      <LegalSection title="Cookies">
        <LegalP>
          We use cookies and similar tracking technologies to improve
          your experience on our websites. For full details on how we
          use cookies, please read our Cookie Policy.
        </LegalP>
      </LegalSection>

      <LegalSection title="Children's Privacy">
        <LegalP>
          Our services are not directed to individuals under the age of 18.
          We do not knowingly collect personal information from children.
          If you believe we have inadvertently collected such information,
          please contact us immediately.
        </LegalP>
      </LegalSection>

      <LegalSection title="Changes to This Policy">
        <LegalP>
          We may update this Privacy Policy from time to time. We will
          notify registered users of significant changes by email.
          The date of the latest revision is shown at the top of this page.
          Continued use of our services after changes constitutes acceptance
          of the updated policy.
        </LegalP>
      </LegalSection>

      <LegalSection title="Contact Us">
        <LegalP>
          If you have questions, concerns or requests regarding this
          Privacy Policy or our data practices, please contact us:
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