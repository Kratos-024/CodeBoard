export const HeroSection2 = () => {
  return (
    <section>
      <div className="relative bg-background ">
        <div className="absolute inset-0 w-full h-full">
          <div
            className="absolute -top-[148px] -left-4 w-72 h-72
               bg-purple-300 dark:bg-purple-500 rounded-full
             mix-blend-multiply dark:mix-blend-soft-light 
             filter blur-xl opacity-70 animate-blob"
          ></div>
          <div className="absolute -top-[148px] -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-[164px] left-20 w-72 h-72 bg-pink-300 dark:bg-pink-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute -bottom-[164px] right-20 w-72 h-72 bg-blue-300 dark:bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
        </div>
        <div className="my-[112px] relative z-20 container px-4 py-6 mx-auto 2xl:max-w-[1400px]">
          <div
            className=" grid md:grid-cols-2 gap-8
             md:gap-12 items-center"
          >
            <div className=" ">
              <h2>Design with confidence</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Create stunning interface with our professionally desgined
                componebts that adpt to any device or screen size
              </p>

              <div className="flex flex-col mb-8">
                <label>Email</label>
                <div className="flex gap-7">
                  <input
                    placeholder="Enter your email"
                    className=" px-2 py-1 bg-muted-foreground/20 placeholder:text-sm rounded-md"
                  ></input>
                  <button
                    type="submit"
                    className="px-3 bg-primary 
                    text-primary-foreground 
text-sm t cursor-pointer
                     py-1 outline-none active:outline-1
                      hover:opacity-90 rounded-lg"
                  >
                    Subscribe
                  </button>
                </div>
                <span className="text-muted-foreground ">
                  Get notified about new features and updates. No spam.
                </span>
              </div>
              <div>
                <div className="text-sm">
                  <span className="text-muted-foreground ">
                    Get notified about new features and updates. No spam.
                  </span>
                  <div
                    className="flex flex-wrap justify-center
                 md:justify-start gap-2 mb-8"
                  >
                    <span
                      className="inline-flex items-center 
                  rounded-md bg-muted px-2 py-1 text-xs
                   font-medium"
                    >
                      React
                    </span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                      Next.js
                    </span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                      TypeScript
                    </span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                      Tailwind CSS
                    </span>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                      Radix UI
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex -space-x-2">
                <span
                  data-slot="avatar"
                  className="relative flex size-8 
            shrink-0 overflow-hidden rounded-full w-8 h-8"
                >
                  <img
                    data-slot="avatar-image"
                    className="aspect-square size-full"
                    width="32"
                    height="32"
                    alt="User 1"
                    src="https://github.com/shadcn.png"
                  ></img>
                </span>
                <span
                  data-slot="avatar"
                  className="relative flex size-8 
                shrink-0 overflow-hidden rounded-full w-8 h-8"
                >
                  <img
                    data-slot="avatar-image"
                    className="aspect-square size-full"
                    width="32"
                    height="32"
                    alt="User 2"
                    src="https://github.com/shadcn.png"
                  ></img>
                </span>
                <span
                  data-slot="avatar"
                  className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-8 h-8"
                >
                  <img
                    data-slot="avatar-image"
                    className="aspect-square size-full"
                    width="32"
                    height="32"
                    alt="User 3"
                    src="https://github.com/shadcn.png"
                  ></img>
                </span>{" "}
                <p className="text-sm ml-5 my-auto  text-muted-foreground">
                  Joined by <strong className="text-primary">2000+</strong>{" "}
                  developers
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-75"></div>
              <div className="relative bg-card rounded-xl overflow-hidden border shadow-xl">
                <div className="flex items-center justify-between border-b p-4">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs font-medium">
                    components/ui/button.tsx
                  </div>
                  <div></div>
                </div>
                <div className="p-4 font-mono text-xs overflow-hidden">
                  <pre className="text-left">
                    <code className="language-tsx">
                      {`import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border border-input bg-background",
        secondary: "bg-secondary text-secondary-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
