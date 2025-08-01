import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, Star, Heart, Zap } from "lucide-react";
import lootboxImage from "@/assets/lootbox.jpg";

export const RewardsSection = () => {
  const rewards = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      name: "Golden Stars",
      description: "Earn by scoring points",
      amount: "847",
      rarity: "Common",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      name: "Extra Lives",
      description: "Continue your streak",
      amount: "12",
      rarity: "Uncommon",
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      name: "Power Boosts",
      description: "Special abilities",
      amount: "5",
      rarity: "Rare",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-game font-black text-primary mb-4">
            Magical Rewards 🎁
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open mystery lootboxes and collect amazing rewards! The more you
            play, the better treasures you'll find!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Lootbox Section */}
          <div className="text-center space-y-6">
            <Card className="panel-game">
              <div className="relative">
                <img
                  src={lootboxImage}
                  alt="Mystery Lootbox"
                  className="w-full max-w-sm mx-auto rounded-2xl pulse-glow"
                />
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-secondary rounded-full flex items-center justify-center border-4 border-white font-black text-2xl float-bounce">
                  ✨
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <h3 className="text-2xl font-game font-bold text-primary">
                  Mystery Lootbox Available!
                </h3>
                <p className="text-muted-foreground">
                  You've earned enough stars to open a magical treasure box!
                  What amazing rewards await inside?
                </p>

                <Button size="lg" className="btn-primary-game w-full">
                  <Gift className="w-5 h-5 mr-2" />
                  Open Lootbox (100 ⭐)
                </Button>

                <div className="text-sm text-muted-foreground">
                  Next lootbox in:{" "}
                  <span className="font-bold text-secondary">245 ⭐</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Rewards Inventory */}
          <div className="space-y-6">
            <Card className="panel-game">
              <h3 className="text-xl font-game font-bold text-primary mb-6 text-center">
                Your Treasure Collection 💎
              </h3>

              <div className="space-y-4">
                {rewards.map((reward, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-primary">
                        {reward.icon}
                      </div>
                      <div>
                        <div className="font-game font-bold text-foreground">
                          {reward.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {reward.description}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-pixel font-bold text-xl text-primary">
                        {reward.amount}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {reward.rarity}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Daily Rewards */}
            <Card className="panel-pixel text-center">
              <div className="space-y-4">
                <h4 className="text-lg font-game font-bold text-white">
                  🌅 Daily Login Bonus
                </h4>
                <div className="text-white/90 text-sm">
                  Come back tomorrow for your daily reward!
                </div>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                    <div
                      key={day}
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                        day <= 3
                          ? "bg-secondary border-secondary-hover text-secondary-foreground"
                          : "bg-white/20 border-white/40 text-white"
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
                <div className="text-white/80 text-xs">
                  Day 4 reward: <strong>50 ⭐ + 1 💝</strong>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
