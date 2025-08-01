import { Button } from "@/components/ui/button";
import { Github, Twitter, Heart, Gamepad2 } from "lucide-react";

export const GameFooter = () => {
  const footerLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Support", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-game-gradient rounded-full flex items-center justify-center border-4 border-primary">
                <span className="text-white font-black text-xl">🐦</span>
              </div>
              <div>
                <h3 className="text-2xl font-game font-black text-primary">
                  Chibi Flap Arcade
                </h3>
                <p className="text-sm text-background/80">
                  Kawaii bird flying adventure
                </p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm">
              Experience the most adorable flappy bird game ever created! Join
              millions of players in this charming retro-arcade adventure with
              anime-style graphics and endless fun.
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com/romanromannya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
              </a>
              <a
                href="https://github.com/lrmn7/chibi-flap-arcade"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Github className="w-4 h-4" />
                </Button>
              </a>
              <Button
                size="sm"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Gamepad2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-game font-bold text-primary text-lg">
              Quick Play
            </h4>
            <div className="space-y-2">
              <div className="text-background/80 hover:text-primary cursor-pointer transition-colors text-sm">
                Start Game
              </div>
              <div className="text-background/80 hover:text-primary cursor-pointer transition-colors text-sm">
                Tutorial
              </div>
              <div className="text-background/80 hover:text-primary cursor-pointer transition-colors text-sm">
                Leaderboard
              </div>
              <div className="text-background/80 hover:text-primary cursor-pointer transition-colors text-sm">
                Achievements
              </div>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="font-game font-bold text-primary text-lg">
              Community
            </h4>
            <div className="space-y-2">
              <div className="text-background/80 hover:text-primary cursor-pointer transition-colors text-sm">
                Discord Server
              </div>
              <div className="text-background/80 hover:text-primary cursor-pointer transition-colors text-sm">
                Fan Art Gallery
              </div>
              <div className="text-background/80 hover:text-primary cursor-pointer transition-colors text-sm">
                Game Updates
              </div>
              <div className="text-background/80 hover:text-primary cursor-pointer transition-colors text-sm">
                Feedback
              </div>
            </div>
          </div>
        </div>

        {/* Game Stats Banner */}
        <div className="bg-primary/10 rounded-2xl p-6 mb-8 border-2 border-primary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-pixel font-bold text-primary">
                2.5M+
              </div>
              <div className="text-sm text-background/70">Players</div>
            </div>
            <div>
              <div className="text-2xl font-pixel font-bold text-secondary">
                156M+
              </div>
              <div className="text-sm text-background/70">Games Played</div>
            </div>
            <div>
              <div className="text-2xl font-pixel font-bold text-accent">
                89K+
              </div>
              <div className="text-sm text-background/70">High Scores</div>
            </div>
            <div>
              <div className="text-2xl font-pixel font-bold text-primary">
                4.9⭐
              </div>
              <div className="text-sm text-background/70">Rating</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-background/20">
          <div className="text-sm text-background/60 mb-4 md:mb-0">
            © 2025 Chibi Flap Arcade. Made with{" "}
            <Heart className="w-4 h-4 inline text-red-400" /> by L RMN.
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-background/60 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
