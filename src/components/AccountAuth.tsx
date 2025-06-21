import { userAuthorized } from "../apis/UserAuth";

export const AccountAuth = () => {
  return (
    <section>
      <div className="bg-background">
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
          <div className="flex w-full max-w-sm flex-col gap-6">
            <a
              href="#"
              className="flex items-center gap-2 self-center font-medium"
            >
              <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
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
                  className="lucide lucide-gallery-vertical-end size-4"
                >
                  <path d="M7 2h10"></path>
                  <path d="M5 6h14"></path>
                  <rect width="18" height="12" x="3" y="10" rx="2"></rect>
                </svg>
              </div>
              Acme Inc.
            </a>
            <div className="flex flex-col gap-6">
              <div
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
              >
                <div
                  data-slot="card-header"
                  className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 text-center"
                >
                  <div data-slot="card-title" className="font-semibold text-xl">
                    Welcome back
                  </div>
                  <div
                    data-slot="card-description"
                    className="text-muted-foreground text-sm"
                  >
                    Login with your Apple or Google account
                  </div>
                </div>
                <div data-slot="card-content" className="px-6">
                  <form>
                    <div className="grid gap-6">
                      <div className="flex flex-col gap-4">
                        <div>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              userAuthorized();
                            }}
                            data-slot="button"
                            className="inline-flex z-50 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 w-full"
                          >
                            <img className="w-7" src="/github-94.png" />
                            Login with Github
                          </button>
                        </div>
                      </div>

                      <div className="text-center text-sm">
                        Don't have an account?
                        <a href="#" className="underline underline-offset-4">
                          Sign up
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                By clicking continue, you agree to our{" "}
                <a href="#">Terms of Service</a> <a href="#">Privacy Policy</a>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
