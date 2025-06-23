import { useEffect } from "react";
import Navbar from "../components/NavBar";
import { UserStats } from "../components/Profile/UserInfo";
import "../index.css";
import { getUserStats } from "../apis/UserAuth";
const getRefreshTokenFromCookie = (): string => {
  const match = document.cookie.match(/(?:^|;\s*)UseRrefreshToken=([^;]+)/);
  if (!match) return "";

  try {
    const decoded = decodeURIComponent(match[1]); // decode URL-encoded JSON
    const parsed = JSON.parse(decoded); // parse JSON string
    return parsed.refresh || "";
  } catch (err) {
    console.error("Error parsing refresh token from cookie:", err);
    return "";
  }
};

export const ProfilePage = () => {
  useEffect(() => {
    const refreshToken = getRefreshTokenFromCookie();
    const getTheUserStat = async (refreshToken: string) => {
      const response = await getUserStats(refreshToken);
      console.log(response);
    };
    getTheUserStat(refreshToken);
  });
  return (
    <section>
      <div className="dark:bg-muted/30 w-full min-h-screen">
        <Navbar />
        <UserStats />
      </div>
    </section>
  );
};
