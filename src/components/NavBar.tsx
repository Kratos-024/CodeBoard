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
import { useSelector } from "react-redux";
import type { RootState } from "../app/store/store";

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
  logo?: ReactNode;
  name?: string;
  homeUrl?: string;
  mobileLinks?: NavbarLink[];
  actions?: NavbarActionProps[];
  showNavigation?: boolean;
  customNavigation?: ReactNode;
  className?: string;
}

export default function Navbar({
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
  const [login, setLogin] = useState<boolean>(false);
  const userSelector = useSelector((state: RootState) => {
    return state.user;
  });
  useEffect(() => {
    if (userSelector.login) {
      setLogin(true);
    }
  }, [userSelector]);
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
                <UserMenu data={userSelector} />
              </div>
            )}
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
