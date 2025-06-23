import Navbar from "../components/NavBar";
import Feature from "../components/Feature";
import { Footer } from "../components/Footer";
import { GuideSection } from "../components/GuideSection";
import { HeroSection2 } from "../components/HeroSection2";
import { StartSection } from "../components/StartSection";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { sendTheAuthTokenToBackend } from "../apis/UserAuth";
import { Loader } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addTheUser } from "../function/User/UserSlicer";
import type { RootState } from "../app/store/store";

export const HomePage = () => {
  const location = useLocation();
  const [loader, setLoader] = useState(false);

  const userDispatch = useDispatch();
  const userSelector = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const code = new URLSearchParams(location.search).get("code");

    // Check if user is already logged in
    if (userSelector.login && userSelector.userId) {
      console.log("User already logged in, skipping authorization");
      return;
    }

    const authorizeTheUser = async () => {
      if (!code) return;
      setLoader(true);

      try {
        const response = await sendTheAuthTokenToBackend(code);
        const access = response?.data.accessToken;
        const refresh = response?.data.refreshToken;

        document.cookie = `UseRrefreshToken=${encodeURIComponent(
          JSON.stringify({ refresh })
        )}; path=/`;

        userDispatch(
          addTheUser({
            avatarUrl: response.data.avatar_url,
            userName: response.data.username,
            fullName: response.data.name,
            userId: response.data.uniqueId,
            bio: response.data.bio,
            email: response.data.email,
            login: true,
          })
        );

        localStorage.setItem("accessToken", access);

        // Clean up URL by removing the code parameter
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
        window.location.reload();
      } catch (error) {
        console.error("Authorization failed:", error);
      } finally {
        setLoader(false);
      }
    };

    authorizeTheUser();
  }, [userSelector.login, userSelector.userId, userDispatch]); // Add dependencies

  return (
    <div className="bg-muted/30">
      {loader && (
        <div className="justify-center items-center h-screen w-full flex">
          <Loader />
        </div>
      )}
      <Navbar />
      <HeroSection2 />
      <Feature />
      <GuideSection />
      <StartSection />
      <Footer />
    </div>
  );
};
