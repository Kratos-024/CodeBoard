import { useEffect } from "react";
import Navbar from "../components/NavBar";
import { UserStats } from "../components/Profile/UserInfo";
import "../index.css";
import { getRefreshTokenFromCookie, getUserStats } from "../apis/UserAuth";
import { useDispatch } from "react-redux";
import { addTheStats } from "../function/userDailyStats/DailyStats";

export const ProfilePage = () => {
  const userDailyDispatch = useDispatch();
  useEffect(() => {
    const refreshToken = getRefreshTokenFromCookie();
    const getTheUserStat = async (refreshToken: string) => {
      const response = await getUserStats(refreshToken);
      const payload = {
        uniqueId: response.data.gitstreak.uniqueId,
        gitStreak: {
          date: response.data.gitstreak.gitDate,
          count: response.data.gitstreak.count,
          level: response.data.gitstreak.level,
        },
        languages: {
          languages: response.data.languages.language,
        },
        streak: {
          date: response.data.streak.date,
          email: response.data.streak.email,
          streak: response.data.streak.streak,
        },
        userdailystats: [
          {
            earlyMorning: response.data.userdailystats[0].earlyMorning,
            lateNight: response.data.userdailystats[0].lateNight,
          },
        ],
      };

      userDailyDispatch(addTheStats(payload));
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
