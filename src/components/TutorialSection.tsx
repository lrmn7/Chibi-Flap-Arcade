import { Card } from "@/components/ui/card";
import gameIcons from "@/assets/game-icons.jpg";

export const TutorialSection = () => {
  const steps = [
    {
      icon: "👆",
      title: "Tap to Fly",
      description: "Tap anywhere on the screen to make your chibi bird flap and fly upward!"
    },
    {
      icon: "🚫",
      title: "Avoid Pipes", 
      description: "Navigate through the green pipes without touching them. One touch = game over!"
    },
    {
      icon: "⭐",
      title: "Collect Stars",
      description: "Gather golden stars to increase your score and unlock amazing rewards!"
    },
    {
      icon: "🏆",
      title: "Beat Records",
      description: "Challenge yourself and friends to reach the highest score on the leaderboard!"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-game font-black text-primary mb-4">
            How to Play 📚
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master the art of chibi bird flying with these simple steps! It's easy to learn but challenging to master!
          </p>
        </div>

        {/* Tutorial Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="panel-game text-center hover:scale-105 transition-transform duration-300">
              <div className="space-y-4">
                <div className="text-6xl mb-4 float-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-game font-bold text-primary">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Game Tips */}
        <Card className="panel-pixel max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-game font-bold text-white">
              🎯 Pro Tips for High Scores!
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2">
                <div className="text-2xl">🎵</div>
                <div className="text-white/90">
                  <strong>Rhythm is key!</strong> Find your tapping rhythm and stick to it for better control.
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">👀</div>
                <div className="text-white/90">
                  <strong>Look ahead!</strong> Focus on upcoming pipes rather than just your bird.
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🧘</div>
                <div className="text-white/90">
                  <strong>Stay calm!</strong> Don't panic when pipes get tricky - smooth movements win!
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};