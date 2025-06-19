import Navbar from "../components/NavBar";
import Feature from "../components/Feature";
import { Footer } from "../components/Footer";
import { GuideSection } from "../components/GuideSection";
import { HeroSection2 } from "../components/HeroSection2";
import { StartSection } from "../components/StartSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { sendTheAuthTokenToBackend } from "../apis/UserAuth";

export const HomePage = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;

  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const location = useLocation();

  useEffect(() => {
    const code = new URLSearchParams(location.search).get("code");

    const authorizeTheUser = async () => {
      if (!code) return;
      const response = await sendTheAuthTokenToBackend(code);
      const access = response?.data.data.accessToken;
      const refresh = response?.data.data.refreshToken;
      document.cookie = `UserData=${encodeURIComponent(
        JSON.stringify(response.data.data)
      )}; path=/`;
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
    };

    authorizeTheUser();
  }, []);
  return (
    <div className="bg-muted/30">
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
