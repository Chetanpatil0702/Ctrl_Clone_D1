import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Opportunity from "@/components/Opportunity";
import Security from "@/components/Security";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Chains from "@/components/Chains";
import AppScreens from "@/components/AppScreens";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Chains />
        <AppScreens />
        {/* <ChainsIntro /> */}
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
