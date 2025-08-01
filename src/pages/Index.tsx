import { GameNavbar } from "@/components/GameNavbar";
import { HeroSection } from "@/components/HeroSection";
import { GamePreview } from "@/components/GamePreview";
import { TutorialSection } from "@/components/TutorialSection";
import { LeaderboardSection } from "@/components/LeaderboardSection";
import { RewardsSection } from "@/components/RewardsSection";
import { GameFooter } from "@/components/GameFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <GameNavbar />
      <HeroSection />
      <GamePreview />
      <TutorialSection />
      <LeaderboardSection />
      <RewardsSection />
      <GameFooter />
    </div>
  );
};

export default Index;
