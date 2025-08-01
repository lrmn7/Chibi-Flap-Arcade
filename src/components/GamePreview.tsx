import { Card } from "@/components/ui/card";
import gameBackground from "@/assets/game-background.jpg";

export const GamePreview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-game font-black text-primary mb-4">
            Live Game Preview 🎮
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the magic before you play! Watch the adorable chibi bird navigate through the colorful world.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="panel-game overflow-hidden">
            <div className="relative aspect-video bg-sky-gradient rounded-2xl overflow-hidden">
              {/* Game Preview Area */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${gameBackground})` }}
              />
              
              {/* Animated Game Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-4xl float-bounce border-4 border-white shadow-lg">
                    🐦
                  </div>
                  <div className="text-white font-game font-bold text-xl bg-black/50 px-4 py-2 rounded-full">
                    Tap to Play Demo!
                  </div>
                </div>
              </div>

              {/* Floating Score Elements */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 px-3 py-2 rounded-full border-2 border-secondary">
                <span className="text-lg">⭐</span>
                <span className="font-pixel font-bold text-primary">Score: 42</span>
              </div>

              <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 px-3 py-2 rounded-full border-2 border-accent">
                <span className="text-lg">❤️</span>
                <span className="font-pixel font-bold text-primary">Lives: 3</span>
              </div>

              {/* Pipe Obstacles (Static) */}
              <div className="absolute right-20 top-0 w-12 h-32 bg-accent rounded-b-lg border-4 border-accent-hover shadow-lg" />
              <div className="absolute right-20 bottom-0 w-12 h-40 bg-accent rounded-t-lg border-4 border-accent-hover shadow-lg" />
              
              <div className="absolute right-40 top-0 w-12 h-40 bg-accent rounded-b-lg border-4 border-accent-hover shadow-lg" />
              <div className="absolute right-40 bottom-0 w-12 h-32 bg-accent rounded-t-lg border-4 border-accent-hover shadow-lg" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};