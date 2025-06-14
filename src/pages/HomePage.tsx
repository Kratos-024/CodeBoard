import Navbar from "../components/NavBar";
import Feature from "../components/Feature";
import { Footer } from "../components/Footer";
import { GuideSection } from "../components/GuideSection";
import { HeroSection2 } from "../components/HeroSection2";
import { StartSection } from "../components/StartSection";

export const HomePage = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: any;
}) => {
  return (
    <div>
      <Navbar />
      <HeroSection2 />
      <Feature />
      <GuideSection />
      <StartSection />
      <Footer />
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 rounded-lg shadow"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};
