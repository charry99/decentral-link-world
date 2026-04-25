import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroOrb from "@/assets/hero-orb.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 bg-hero overflow-hidden">
      {/* Grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)] py-12 relative">
        <div className="space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
            <span>Mainnet v3.0 is now live</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            The protocol <br />
            powering <span className="text-gradient">Web3</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Lightning-fast, decentralized infrastructure for the next generation of builders.
            Trade, stake, and create on-chain without limits.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg">
              Launch App <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="glass" size="lg">Read Whitepaper</Button>
          </div>

          <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
            <div><span className="text-foreground font-semibold">120+</span> chains</div>
            <div className="h-4 w-px bg-border" />
            <div><span className="text-foreground font-semibold">$24B</span> secured</div>
            <div className="h-4 w-px bg-border" />
            <div><span className="text-foreground font-semibold">2.4M</span> wallets</div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-[image:var(--gradient-primary)] blur-3xl opacity-30 animate-pulse-glow" />
          <img
            src={heroOrb}
            alt="Glowing crystalline web3 protocol orb"
            width={1536}
            height={1536}
            className="relative w-full max-w-lg animate-float drop-shadow-[0_0_60px_hsl(var(--primary)/0.5)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;