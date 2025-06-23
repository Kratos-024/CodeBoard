import Navbar from "../components/NavBar";
import { UserStats } from "../components/Profile/UserInfo";
import "../index.css";
import React from "react";

export const ProfilePage = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <section>
      <div className="dark:bg-muted/30 w-full min-h-screen">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <UserStats />
      </div>
    </section>
  );
};
