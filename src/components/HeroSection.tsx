import { Button } from "@/components/ui/button";
import { Play, Gamepad2 } from "lucide-react";
import heroBird from "@/assets/hero-bird.jpg";
import gameBackground from "@/assets/game-background.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: `url(${gameBackground})` }}
      />
      <div className="absolute inset-0 bg-sky-gradient/70" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-secondary rounded-full float-gentle opacity-80" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-primary rounded-full float-bounce opacity-80" />
      <div className="absolute bottom-40 left-20 w-10 h-10 bg-accent rounded-full float-gentle opacity-80" />
      <div className="absolute top-60 left-1/3 w-4 h-4 bg-secondary rounded-full float-bounce opacity-60" />

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-game-title leading-tight">
                Chibi Flap
                <br />
                <span className="text-accent">Arcade</span>
              </h1>
              <p className="text-xl md:text-2xl font-game text-foreground/80 max-w-lg mx-auto lg:mx-0">
                Tap your way through a kawaii adventure! 🌸 Guide your chibi
                bird through magical pipes in this adorable retro-arcade
                experience!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-primary-game pulse-glow">
                <Play className="w-6 h-6 mr-2" />
                Tap to Start!
              </Button>
              <Button size="lg" className="btn-secondary-game">
                <Gamepad2 className="w-6 h-6 mr-2" />
                Watch Gameplay
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              <img
                src={heroBird}
                alt="Chibi Flap Bird"
                className="w-full h-auto rounded-3xl border-4 border-primary shadow-2xl float-gentle"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center border-4 border-white font-black text-xl float-bounce">
                ⭐
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center border-4 border-white font-black text-lg float-gentle">
                💎
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
