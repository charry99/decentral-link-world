import { Zap, Shield, Layers, Coins, Globe2, Code2 } from "lucide-react";

const features = [
  { icon: Zap, title: "Sub-second finality", desc: "Transactions settle in under 400ms with our novel consensus engine." },
  { icon: Shield, title: "Audited & secure", desc: "Battle-tested smart contracts audited by Trail of Bits and OpenZeppelin." },
  { icon: Layers, title: "Cross-chain native", desc: "Bridge assets across 120+ chains with zero-knowledge proofs." },
  { icon: Coins, title: "Stake & earn", desc: "Earn up to 12% APY by securing the network with liquid staking." },
  { icon: Globe2, title: "Truly decentralized", desc: "Operated by 8,000+ independent validators across 90 countries." },
  { icon: Code2, title: "Builder-first SDKs", desc: "Ship in minutes with TypeScript, Rust and Python SDKs." },
];

const Features = () => {
  return (
    <section id="features" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-widest text-primary-glow mb-4">Why Nexus</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Built for the <span className="text-gradient">decentralized future</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative glass rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(circle at top left, hsl(var(--primary) / 0.15), transparent 60%)" }}
              />
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-[image:var(--gradient-primary)] mb-5 shadow-[var(--shadow-glow)]">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;