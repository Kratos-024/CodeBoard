import Navbar from "../components/NavBar";
import { UserInfo } from "../components/Profile/UserInfo";
import "../index.css";

export const ProfilePage = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: any;
}) => {
  return (
    <section>
      <div
        className="dark:bg-muted/30 w-full min-h-screen container
       "
      >
        <Navbar />
        <UserInfo />
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
