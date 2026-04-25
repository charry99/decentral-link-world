import { Button } from "@/components/ui/button";
import { Hexagon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <Hexagon className="h-6 w-6 text-primary" strokeWidth={2.5} />
          <span className="text-gradient">NEXUS</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <li><a href="#features" className="hover:text-foreground transition-colors">Protocol</a></li>
          <li><a href="#stats" className="hover:text-foreground transition-colors">Network</a></li>
          <li><a href="#cta" className="hover:text-foreground transition-colors">Builders</a></li>
          <li><a href="#" className="hover:text-foreground transition-colors">Docs</a></li>
        </ul>
        <Button variant="hero" size="sm">Connect Wallet</Button>
      </nav>
    </header>
  );
};

export default Navbar;