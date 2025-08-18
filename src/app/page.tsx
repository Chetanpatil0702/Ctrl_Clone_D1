import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ChainsMarquee from "@/components/ChainsMarquee";
import ChainsIntro from "@/components/ChainsIntro";
import Opportunity from "@/components/Opportunity";
import Security from "@/components/Security";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <ChainsMarquee />
        <ChainsIntro />
        <Opportunity />
        <Security />
        <FAQ />
        <Newsletter />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
