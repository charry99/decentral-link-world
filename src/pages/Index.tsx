import Navbar from "@/components/web3/Navbar";
import Hero from "@/components/web3/Hero";
import Features from "@/components/web3/Features";
import Stats from "@/components/web3/Stats";
import CTA from "@/components/web3/CTA";
import Footer from "@/components/web3/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
