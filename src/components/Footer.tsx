import { Heart, Sparkles, Mail, Github } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-primary/5 to-transparent border-t border-primary/20 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
              <Heart className="h-6 w-6 text-primary fill-primary animate-pulse" />
              <span className="font-script text-2xl text-primary font-bold">Valentine Glow</span>
              <Sparkles className="h-5 w-5 text-accent" />
            </div>
            <p className="text-sm text-muted-foreground">
              Celebrating love, one moment at a time 💕
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                📸 Gallery
              </Link>
              <Link to="/love-notes" className="text-muted-foreground hover:text-primary transition-colors">
                💌 Love Notes
              </Link>
              <Link to="/gifts" className="text-muted-foreground hover:text-primary transition-colors">
                🎁 Gift Ideas
              </Link>
            </div>
          </div>

          {/* More Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">More</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/developer" className="text-muted-foreground hover:text-primary transition-colors">
                Developer
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
            Made with <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />
            for all who believe in love © {currentYear} Valentine Glow
          </p>

          <p className="text-xs text-muted-foreground text-center">
            ✨ Spread love and celebration everywhere ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
