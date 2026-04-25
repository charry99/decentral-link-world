import { Hexagon, Twitter, Github, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-bold">
          <Hexagon className="h-5 w-5 text-primary" strokeWidth={2.5} />
          <span className="text-gradient">NEXUS</span>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 Nexus Protocol. All rights reserved.</p>
        <div className="flex items-center gap-5 text-muted-foreground">
          <a href="#" aria-label="Twitter" className="hover:text-primary-glow transition-colors"><Twitter className="h-5 w-5" /></a>
          <a href="#" aria-label="GitHub" className="hover:text-primary-glow transition-colors"><Github className="h-5 w-5" /></a>
          <a href="#" aria-label="Discord" className="hover:text-primary-glow transition-colors"><MessageCircle className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;