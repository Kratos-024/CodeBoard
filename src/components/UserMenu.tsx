import { useState } from "react";
import { generateSecretToken, logOut } from "../apis/UserAuth";
import Loader from "./Loader";
/* eslint-disable @typescript-eslint/no-explicit-any */
export const UserMenu = ({
  data,
}: {
  data: {
    userName: string;
    email: string;
    fullName: string;
    avatar_url: string;
    bio: string;
    userId: string;
  };
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [loader, setLoader] = useState(false);
  const [generatedToken, setGeneratedToken] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };
  const logOutHandler = async () => {
    setLoader(true);
    const token = localStorage.getItem("refreshToken");

    if (!token) {
      console.log("Eror");
      return;
    }
    const response = await logOut(token, data.userName);
    if (response.statusCode === 200) {
      localStorage.clear();
      document.cookie.split(";").forEach((cookie) => {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.slice(0, eqPos) : cookie;
        document.cookie =
          name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      });
      setLoader(false);

      window.location.reload();
    }
  };
  const handleCopyHandler = async () => {
    try {
      await navigator.clipboard.writeText(generatedToken);
      setCopied(true);
      setGeneratedToken("");
      setTimeout(() => setCopied(false), 5000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  const generatedTokenHandler = async () => {
    const refreshToken = localStorage.getItem("refreshToken") || "";
    const token = await generateSecretToken(data, refreshToken);
    setGeneratedToken(token.data);
  };
  return (
    <section>
      {loader && (
        <div className="  justify-center items-center h-screen w-full flex ">
          <Loader />
        </div>
      )}
      <div className="" style={{ height: "340px" }}>
        <button
          onClick={showMenuHandler}
          data-slot="dropdown-menu-trigger"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 py-2 has-[>svg]:px-3 gap-2 px-2"
          type="button"
          id="radix-«r0»"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <span
            data-slot="avatar"
            className="relative flex shrink-0 overflow-hidden size-6 rounded-lg"
          >
            <img
              data-slot="avatar-image"
              className="aspect-square size-full"
              alt={data.fullName}
              src={data.avatar_url}
            ></img>
          </span>
          <div className="truncate">{data.fullName}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-down"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
        {showMenu && (
          <div>
            <div
              data-radix-popper-content-wrapper=""
              dir="ltr"
              className=" mt-1 right-0 fixed "
              style={
                {
                  minWidth: "max-content",

                  "--radix-popper-transform-origin": "50% 0px",
                  "--radix-popper-available-width": "547px",
                  "--radix-popper-available-height": "268px",
                  "--radix-popper-anchor-width": "175.234375px",
                  "--radix-popper-anchor-height": "36px",
                } as any
              }
            >
              <div
                data-side="bottom"
                data-align="center"
                role="menu"
                aria-orientation="vertical"
                data-state="open"
                data-radix-menu-content=""
                dir="ltr"
                id="radix-«r1»"
                aria-labelledby="radix-«r0»"
                data-slot="dropdown-menu-content"
                className="bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto border p-1 shadow-md w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                data-orientation="vertical"
                style={
                  {
                    outline: "none",
                    "--radix-dropdown-menu-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-dropdown-menu-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-dropdown-menu-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-dropdown-menu-trigger-width":
                      "var(--radix-popper-anchor-width)",
                    "--radix-dropdown-menu-trigger-height":
                      "var(--radix-popper-anchor-height)",
                    pointerEvents: "auto",
                  } as any
                }
              >
                <div
                  data-slot="dropdown-menu-label"
                  className="text-sm data-[inset]:pl-8 p-0 font-normal"
                >
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <span
                      data-slot="avatar"
                      className="relative flex shrink-0 overflow-hidden size-8 rounded-lg"
                    >
                      <img
                        data-slot="avatar-image"
                        className="aspect-square size-full"
                        alt="Toby Belhome"
                        src={data.avatar_url}
                      ></img>
                    </span>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        Toby Belhome
                      </span>
                      <span className="text-muted-foreground truncate text-xs">
                        contact@bundui.io
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  role="separator"
                  aria-orientation="horizontal"
                  data-slot="dropdown-menu-separator"
                  className="bg-border -mx-1 my-1 h-px"
                ></div>
                <div role="group" data-slot="dropdown-menu-group">
                  <div
                    role="menuitem"
                    data-slot="dropdown-menu-item"
                    data-variant="default"
                    className="focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&amp;_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4"
                    data-orientation="vertical"
                    data-radix-collection-item=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-sparkles"
                      aria-hidden="true"
                    >
                      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                      <path d="M20 3v4"></path>
                      <path d="M22 5h-4"></path>
                      <path d="M4 17v2"></path>
                      <path d="M5 18H3"></path>
                    </svg>
                    Upgrade to Pro
                  </div>
                </div>
                <div
                  role="separator"
                  aria-orientation="horizontal"
                  data-slot="dropdown-menu-separator"
                  className="bg-border -mx-1 my-1 h-px"
                ></div>
                <div role="group" data-slot="dropdown-menu-group">
                  <div
                    role="menuitem"
                    data-slot="dropdown-menu-item"
                    data-variant="default"
                    className="focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&amp;_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4"
                    data-orientation="vertical"
                    data-radix-collection-item=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-badge-check"
                      aria-hidden="true"
                    >
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    Account
                  </div>
                  {generatedToken.length < 1 && (
                    <div
                      role="menuitem"
                      data-slot="dropdown-menu-item"
                      data-variant="default"
                      onClick={generatedTokenHandler}
                      className=" cursor-pointer
                     focus:bg-accent
                      focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&amp;_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-s items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4"
                      data-orientation="vertical"
                      data-radix-collection-item=""
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-credit-card"
                        aria-hidden="true"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                        <line x1="2" x2="22" y1="10" y2="10"></line>
                      </svg>
                      Generate Token
                    </div>
                  )}
                  {generatedToken.length > 1 && (
                    <div
                      onClick={handleCopyHandler}
                      className={`${copied ? "hidden" : "block"} cursor-pointer
                      focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&amp;_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-s items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4`}
                      data-orientation="vertical"
                      data-radix-collection-item=""
                    >
                      {generatedToken}
                    </div>
                  )}
                  <div
                    role="menuitem"
                    data-slot="dropdown-menu-item"
                    data-variant="default"
                    className="focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&amp;_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4"
                    data-orientation="vertical"
                    data-radix-collection-item=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-bell"
                      aria-hidden="true"
                    >
                      <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                    </svg>
                    Notifications
                  </div>
                </div>
                <div
                  role="separator"
                  aria-orientation="horizontal"
                  data-slot="dropdown-menu-separator"
                  className="bg-border -mx-1 my-1 h-px"
                ></div>
                <div
                  onClick={() => {
                    logOutHandler();
                  }}
                  role="menuitem"
                  data-slot="dropdown-menu-item"
                  data-variant="default"
                  className="focus:bg-accent cursor-pointer focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&amp;_svg:not([class*='text-'])]:text-muted-foreground relative flex - items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 text-red-600!"
                  data-orientation="vertical"
                  data-radix-collection-item=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-log-out text-red-600!"
                    aria-hidden="true"
                  >
                    <path d="m16 17 5-5-5-5"></path>
                    <path d="M21 12H9"></path>
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  </svg>
                  Log out
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
