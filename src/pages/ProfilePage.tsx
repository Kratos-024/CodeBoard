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
        <Navbar />
        <UserStats />
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 rounded-lg shadow"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </section>
  );
};
