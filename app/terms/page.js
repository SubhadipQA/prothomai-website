import LegalLayout, {
  LegalSection,
  LegalP,
  LegalList,
} from "../../components/sections/LegalLayout";

export const metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Prothom Analytica India Pvt. Ltd. and YPark. Read our terms before using our services.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="May 2025">

      <LegalSection title="Agreement to Terms">
        <LegalP>
          By accessing or using the services provided by Prothom Analytica
          India Pvt. Ltd. (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;),
          including prothomai.com, ypark.in and our mobile applications,
          you agree to be bound by these Terms of Service.
        </LegalP>
        <LegalP>
          If you do not agree to these terms, please do not use our services.
          We reserve the right to update these terms at any time.
          Continued use of our services after changes constitutes acceptance.
        </LegalP>
      </LegalSection>

      <LegalSection title="Description of Services">
        <LegalP>
          Prothom Analytica India operates YPark — a parking marketplace
          platform that connects parking zone owners with vehicle owners.
          Our services include:
        </LegalP>
        <LegalList items={[
          "YPark vendor platform — for parking zone owners and ground staff to manage operations",
          "YPark customer platform — for vehicle owners to find and book parking",
          "Web interfaces at prothomai.com and ypark.in",
          "Mobile applications available on Android and iOS",
        ]} />
      </LegalSection>

      <LegalSection title="User Accounts">
        <LegalP>
          To use certain features of our services, you must create an account.
          You are responsible for:
        </LegalP>
        <LegalList items={[
          "Providing accurate and complete information during registration",
          "Maintaining the security and confidentiality of your account credentials",
          "All activity that occurs under your account",
          "Notifying us immediately of any unauthorized use of your account",
        ]} />
        <LegalP>
          We reserve the right to suspend or terminate accounts that violate
          these terms or engage in fraudulent activity.
        </LegalP>
      </LegalSection>

      <LegalSection title="Vendor Terms">
        <LegalP>
          If you register as a parking zone owner or operator, you additionally agree to:
        </LegalP>
        <LegalList items={[
          "Provide accurate information about your parking zones including location, capacity and documentation",
          "Ensure you have the legal right to operate the parking zone you list",
          "Comply with all applicable local, state and national laws and regulations",
          "Accurately represent your zone's features, availability and pricing",
          "Allow YPark to verify your zone documentation before approval",
          "Pay the applicable platform service charges on transactions processed through YPark",
          "Not engage in fraudulent transactions or misrepresentation",
        ]} />
      </LegalSection>

      <LegalSection title="Prohibited Activities">
        <LegalP>
          You may not use our services to:
        </LegalP>
        <LegalList items={[
          "Violate any applicable laws or regulations",
          "Provide false or misleading information",
          "Impersonate any person or entity",
          "Engage in fraudulent transactions",
          "Attempt to gain unauthorized access to our systems or other users' accounts",
          "Scrape, copy or redistribute our content without permission",
          "Use our services for any unlawful purpose",
          "Harass, abuse or harm any other user or third party",
        ]} />
      </LegalSection>

      <LegalSection title="Payments and Fees">
        <LegalP>
          YPark charges a platform service fee on transactions processed
          through the platform. The applicable fee is communicated during
          zone registration and may be updated with notice.
        </LegalP>
        <LegalP>
          All payments are processed through third-party payment gateways.
          We are not responsible for errors or issues arising from payment
          gateway services. Refund policies are communicated separately.
        </LegalP>
      </LegalSection>

      <LegalSection title="Intellectual Property">
        <LegalP>
          All content, design, code and materials on our websites and
          applications are the property of Prothom Analytica India Pvt. Ltd.
          or our licensors and are protected by applicable intellectual
          property laws.
        </LegalP>
        <LegalP>
          You may not reproduce, distribute, modify or create derivative
          works from our content without our explicit written permission.
        </LegalP>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <LegalP>
          To the maximum extent permitted by law, Prothom Analytica India
          Pvt. Ltd. shall not be liable for any indirect, incidental, special
          or consequential damages arising from your use of our services.
        </LegalP>
        <LegalP>
          We do not guarantee uninterrupted or error-free service. We are
          not responsible for losses arising from technical failures,
          third-party actions or events beyond our control.
        </LegalP>
      </LegalSection>

      <LegalSection title="Governing Law">
        <LegalP>
          These Terms of Service are governed by the laws of India.
          Any disputes arising from these terms or your use of our services
          shall be subject to the exclusive jurisdiction of the courts
          of India.
        </LegalP>
      </LegalSection>

      <LegalSection title="Contact Us">
        <LegalP>
          For questions about these Terms of Service, please contact us:
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