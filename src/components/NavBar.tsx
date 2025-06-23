/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, type ReactNode } from "react";

import { Button, type ButtonProps } from "./ui/button";
import LaunchUI from "./logos/launch-ui";
import { cn } from "../lib/utils";
import {
  NavbarLeft,
  Navbar as NavbarComponent,
  NavbarRight,
} from "./ui/navbar";
import { siteConfig } from "../config/site";
import Navigation from "./ui/navigation";
import { UserMenu } from "./UserMenu";

interface NavbarLink {
  text: string;
  href: string;
}

interface NavbarActionProps {
  text: string;
  href: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
  isButton?: boolean;
}

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  logo?: ReactNode;
  name?: string;
  homeUrl?: string;
  mobileLinks?: NavbarLink[];
  actions?: NavbarActionProps[];
  showNavigation?: boolean;
  customNavigation?: ReactNode;
  className?: string;
}
function getCookie(name: string) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) return JSON.parse(decodeURIComponent(match[2]));
  return null;
}

export default function Navbar({
  darkMode,
  setDarkMode,
  logo = <LaunchUI />,
  name = "Launch UI",
  homeUrl = siteConfig.url,

  actions = [
    {
      text: "Sign in",
      href: "/create-acc",
      isButton: false,
    },
    {
      text: "Get Started",
      href: "/create-acc",
      isButton: true,
      variant: "default",
    },
  ],
  showNavigation = true,
  customNavigation,
  className,
}: NavbarProps) {
  const [userName, setUserName] = useState("");
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [bio, setBio] = useState("");
  const [login, setLogin] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");

  const userData = getCookie("UserData");
  const setUserDetails = () => {
    if (userData) {
      setLogin(true);
      setUserName(userData.username);
      setName(userData.name);
      setEmail(userData.email);
      setAvatarUrl(userData.avatar_url);
      setBio(userData.bio);
      setUserId(userData.uniqueId);
    }
  };

  useEffect(() => {
    setUserDetails();
  }, [userData]);
  return (
    <header
      className={cn(
        "sticky top-0 z-50 -mb-4 dark:bg-muted/30 px-4 pb-4",
        className
      )}
    >
      <div className="fade-bottom bg-background/15 absolute left-0 h-24 w-full backdrop-blur-lg"></div>
      <div className="max-w-container relative mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <a
              href={homeUrl}
              className="flex items-center gap-2 text-xl font-bold"
            >
              {logo}
              {name}
            </a>
            {showNavigation && (customNavigation || <Navigation />)}
          </NavbarLeft>

          <NavbarRight>
            {" "}
            {!login && (
              <div className="flex items-center gap-4">
                {actions.map((action, index) =>
                  action.isButton ? (
                    <Button
                      key={index}
                      variant={action.variant || "default"}
                      asChild
                    >
                      <a href={action.href}>
                        {action.icon}
                        {action.text}
                        {action.iconRight}
                      </a>
                    </Button>
                  ) : (
                    <a
                      key={index}
                      href={action.href}
                      className="hidden text-sm md:block"
                    >
                      {action.text}
                    </a>
                  )
                )}
              </div>
            )}
            {login && (
              <div className="absolute top-0 py-[18px] ">
                <UserMenu
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                  data={{
                    userName,
                    avatar_url: avatarUrl,
                    fullName,
                    email,
                    bio,
                    userId,
                  }}
                />
              </div>
            )}
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
