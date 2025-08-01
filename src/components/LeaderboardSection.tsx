import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award } from "lucide-react";

export const LeaderboardSection = () => {
  const topPlayers = [
    { rank: 1, name: "SakuraMaster", score: 1247, avatar: "🌸", badge: "Legendary" },
    { rank: 2, name: "PixelNinja", score: 1156, avatar: "🥷", badge: "Epic" },
    { rank: 3, name: "ChibiLord", score: 987, avatar: "👑", badge: "Rare" },
    { rank: 4, name: "CloudHopper", score: 856, avatar: "☁️", badge: "Uncommon" },
    { rank: 5, name: "StarCollector", score: 743, avatar: "⭐", badge: "Common" },
  ];

  const getRankIcon = (rank: number) => {
    switch(rank) {
      case 1: return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Award className="w-6 h-6 text-amber-600" />;
      default: return <span className="w-6 h-6 flex items-center justify-center font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getBadgeVariant = (badge: string): "default" | "secondary" | "destructive" | "outline" => {
    switch(badge) {
      case "Legendary": return "default";
      case "Epic": return "secondary"; 
      case "Rare": return "destructive";
      default: return "outline";
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-game font-black text-primary mb-4">
            Hall of Fame 🏆
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Think you can reach the top? Check out our legendary players who've mastered the art of chibi bird flying!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="panel-game">
            <div className="space-y-1">
              <div className="flex items-center justify-between p-4 border-b-2 border-primary/20">
                <h3 className="text-xl font-game font-bold text-primary">Global Leaderboard</h3>
                <div className="text-sm text-muted-foreground font-pixel">
                  Last updated: Just now ⚡
                </div>
              </div>

              {topPlayers.map((player, index) => (
                <div 
                  key={player.rank} 
                  className={`flex items-center justify-between p-4 hover:bg-primary/5 transition-colors duration-200 ${
                    player.rank <= 3 ? 'bg-gradient-to-r from-secondary/10 to-accent/10' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      {getRankIcon(player.rank)}
                    </div>
                    
                    <div className="text-3xl">{player.avatar}</div>
                    
                    <div>
                      <div className="font-game font-bold text-foreground">
                        {player.name}
                      </div>
                      <Badge variant={getBadgeVariant(player.badge)} className="text-xs mt-1">
                        {player.badge}
                      </Badge>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-pixel font-bold text-xl text-primary">
                      {player.score.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      points
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t-2 border-primary/20 bg-primary/5 text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Your current rank: <span className="font-bold text-primary">#247</span> • Score: <span className="font-bold text-primary">156</span>
              </p>
              <div className="text-xs text-muted-foreground">
                🎯 Beat <strong>StarCollector</strong> to enter the top 5!
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};