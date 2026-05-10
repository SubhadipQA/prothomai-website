import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import WhatWeSee from "../components/sections/WhatWeSee";
import HowWeThink from "../components/sections/HowWeThink";
import Ecosystem from "../components/sections/Ecosystem";
import AboutStrip from "../components/sections/AboutStrip";
import InsightsStrip from "../components/sections/InsightsStrip";
import Footer from "../components/sections/Footer";
import { getLatestInsights } from "../lib/mdx";

export default function Home() {
  const latestInsights = getLatestInsights(3);

  return (
    <main>
      <Navbar />
      <Hero />
      <WhatWeSee />
      <HowWeThink />
      <AboutStrip />
      <Ecosystem />
      <InsightsStrip posts={latestInsights} />
      <Footer />
    </main>
  );
}