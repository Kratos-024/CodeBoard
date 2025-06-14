import { useId } from "react";

export const HeroSection = () => {
  const p = [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <section>
      <div className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 w-full h-full bg-background">
          {/* <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={p}
            className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
          />{" "} */}
          <div className="absolute inset-0 w-full h-full">
            <div
              className="absolute top-0 -left-4 w-72 h-72
               bg-purple-300 dark:bg-purple-500 rounded-full
             mix-blend-multiply dark:mix-blend-soft-light 
             filter blur-xl opacity-70 animate-blob"
            ></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="absolute -bottom-8 right-20 w-72 h-72 bg-blue-300 dark:bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
          </div>
        </div>
        <div className="relative z-10">
          <div
            className="container mx-auto px-4 md:px-6
           2xl:max-w-[1400px]"
          >
            <div
              className="grid md:grid-cols-2 gap-8
             md:gap-12 items-center"
            >
              <div>
                <h2>Design with confidence</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Create stunning interface with our professionally desgined
                  componebts that adpt to any device or screen size
                </p>
                {/* <div>
            {" "}
            <div>
              <label>Email</label>
              <input
                data-slot="input"
                className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                id="email"
                placeholder="Enter your email"
                type="email"
              ></input>
            </div>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 "
              type="submit"
            >
              Subscribe
            </button>
          </div> */}
                <div className="max-w-md mx-auto md:mx-0 mb-8">
                  <div className="grid w-full items-center gap-1.5">
                    <label
                      data-slot="label"
                      className="flex items-center gap-2 text-sm leading-none font-medium select-none
             group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed 
             peer-disabled:opacity-50 text-left"
                    >
                      Email
                    </label>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                      <input
                        data-slot="input"
                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground 
                dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] 
                outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none 
                disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
                 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                      ></input>
                      <button
                        data-slot="button"
                        className="inline-flex items-center
                         justify-center
                  gap-2 whitespace-nowrap rounded-md text-sm 
                  font-medium transition-all
                
                  
                   dark:aria-invalid:ring-destructive/40 
                    shadow-xs hover:bg-primary/90 h-9 px-4 
                    py-2 "
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground text-left">
                      Get notified about new features and updates. No spam.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-left">
                  Get notified about new features and updates. No spam.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
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
                <div
                  className="flex items-center justify-center 
                  md:justify-start 
          gap-4"
                >
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
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Joined by{" "}
                    <span className="font-medium text-foreground">2,000+</span>{" "}
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
      </div>
    </section>
  );
};
export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
