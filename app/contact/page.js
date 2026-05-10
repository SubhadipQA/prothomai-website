import Navbar from "../../components/sections/Navbar";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/sections/Footer";

export const metadata = {
	title: "Contact | Prothom Analytica India",
	description: "Get in touch with Prothom Analytica India for parking, mobility, and field research partnerships.",
};

export default function ContactPage() {
	return (
		<main>
			<Navbar />
			<Contact />
			<Footer />
		</main>
	);
}
