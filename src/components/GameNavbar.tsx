import { Button } from "@/components/ui/button";
import { Home, Trophy, Gift, Info } from "lucide-react";

export const GameNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b-4 border-primary">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-game-gradient rounded-full flex items-center justify-center border-4 border-primary float-bounce">
              <span className="text-white font-black text-xl">🐦</span>
            </div>
            <h1 className="text-2xl font-game font-black text-primary">Chibi Flap</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="btn-arcade bg-sky border-sky-dark text-foreground hover:bg-sky-light">
              <Home className="w-5 h-5 mr-2" />
              Home
            </Button>
            <Button variant="ghost" className="btn-arcade bg-secondary border-secondary-hover text-secondary-foreground hover:bg-secondary-hover">
              <Trophy className="w-5 h-5 mr-2" />
              Leaderboard
            </Button>
            <Button variant="ghost" className="btn-arcade bg-accent border-accent-hover text-accent-foreground hover:bg-accent-hover">
              <Gift className="w-5 h-5 mr-2" />
              Rewards
            </Button>
            <Button variant="ghost" className="btn-arcade bg-muted border-border text-muted-foreground hover:bg-muted/80">
              <Info className="w-5 h-5 mr-2" />
              About
            </Button>
          </div>

          <div className="md:hidden">
            <Button size="sm" className="btn-primary-game">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};