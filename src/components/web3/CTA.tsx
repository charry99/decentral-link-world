import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center glass">
          <div className="absolute inset-0 bg-[image:var(--gradient-primary)] opacity-20" />
          <div className="relative max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Start building <span className="text-gradient">on Nexus</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Join 12,000+ developers shipping the next wave of decentralized apps.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Button variant="hero" size="lg">
                Get Started <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button variant="glass" size="lg">View on GitHub</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;