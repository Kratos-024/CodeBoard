import { useState } from "react";
import { UserOverview } from "./ConsistencyGit";

export const UserInfo = () => {
  const [active, setActive] = useState(0);
  const activeHandler = (activeNumber: number) => {
    setActive(activeNumber);
  };
  return (
    <section>
      <div
        className="container mx-auto px-4 md:px-6
           2xl:max-w-[1400px]"
      >
        <div>
          <div className="flex gap-3 mt-9 items-center ">
            <img
              className="w-64 rounded-full"
              src="https://avatars.githubusercontent.com/u/149764409?v=4"
            />
            <div>
              <p
                className="b
               text-[#252C20] text-[48px] to-[#252C20]"
              >
                Tharun Sharma
              </p>
              <span
                className="b
               text-[#252C20] text-[21px] to-[#252C20]"
              >
                UserTHarun
              </span>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur optio voluptatibus odio similique repellendus
                eligendi
              </p>
              <div>
                <p>Followers 2</p>
                <p>Following 6</p>
              </div>
            </div>
          </div>

          <div
            className="flex gap-9  cursor-pointer relative
             bg-[#181d26] w-fit  mx-auto
           rounded-2xl px-1 py-1 "
          >
            <div
              className={`  w-[124px]
                 ml-2 mt-1
                  bg-accent-foreground
                   duration-300 ease-in-out
                     h-[48px] rounded-2xl 
                     z-20 top-0 left-0 
                     absolute ${
                       active === 0
                         ? " translate-x-0"
                         : active === 1
                         ? " translate-x-[138%]"
                         : "translate-x-[270%]"
                     }`}
            ></div>
            <button
              onClick={() => {
                activeHandler(0);
              }}
              className={` px-9 relative z-20 hover:opacity-90 py-3 cursor-pointer
                 text-white 
                  `}
            >
              Overview
            </button>
            <button
              onClick={() => {
                activeHandler(1);
              }}
              className="hover:opacity-90 relative z-20 
              cursor-pointer px-9 py-3 text-white  
              "
            >
              Activity
            </button>
            <button
              onClick={() => {
                activeHandler(3);
              }}
              className="hover:opacity-90 relative z-20 
              cursor-pointer px-9 py-3 text-white  
              "
            >
              Language
            </button>
          </div>
          <div className=" grid grid-cols-3">
            {" "}
            <div
              className="grid grid-cols-1 
           w-fit gap-5
             bg-[#151B23] p-6 text-white"
            >
              <div
                className="bg-[#1E2530]
               rounded-xl px-[64px] py-5 flex flex-col gap-2 shadow-inner"
              >
                <div className="text-xs text-slate-400 uppercase tracking-wide">
                  Hours Logged
                </div>
                <div className="text-3xl font-semibold">19.6 hrs</div>
                <div className="text-sm text-teal-400">Keep the rhythm 🎧</div>
              </div>

              <div className="bg-[#1E2530] rounded-xl p-5 flex flex-col gap-2 shadow-inner">
                <div className="text-xs text-slate-400 uppercase tracking-wide">
                  Late Grinds
                </div>
                <div className="text-3xl font-semibold">0 nights</div>
                <div className="text-sm text-orange-300">Balanced focus ⚖️</div>
              </div>

              <div className="bg-[#1E2530] rounded-xl p-5 flex flex-col gap-2 shadow-inner">
                <div className="text-xs text-slate-400 uppercase tracking-wide">
                  Tech Stack
                </div>
                <div className="text-3xl font-semibold">9 tools</div>
                <div className="text-sm text-purple-300">
                  Multi-skilled dev 🛠️
                </div>
              </div>

              <div className="bg-[#1E2530] rounded-xl p-5 flex flex-col gap-2 shadow-inner">
                <div className="text-xs text-slate-400 uppercase tracking-wide">
                  Consistency
                </div>
                <div className="text-3xl font-semibold">9 days</div>
                <div className="text-sm text-yellow-300">Daily grind 🔥</div>
              </div>
            </div>
            <div className="w-[560px] ">
              <UserOverview />
            </div>
            <div
              className="grid grid-cols-1 
           w-fit gap-5
             bg-[#151B23] p-6 text-white"
            >
              <div
                className="bg-[#1E2530]
               rounded-xl px-[64px] py-5 flex flex-col gap-2 shadow-inner"
              >
                <div className="text-xs text-slate-400 uppercase tracking-wide">
                  Hours Logged
                </div>
                <div className="text-3xl font-semibold">19.6 hrs</div>
                <div className="text-sm text-teal-400">Keep the rhythm 🎧</div>
              </div>

              <div className="bg-[#1E2530] rounded-xl p-5 flex flex-col gap-2 shadow-inner">
                <div className="text-xs text-slate-400 uppercase tracking-wide">
                  Late Grinds
                </div>
                <div className="text-3xl font-semibold">0 nights</div>
                <div className="text-sm text-orange-300">Balanced focus ⚖️</div>
              </div>

              <div className="bg-[#1E2530] rounded-xl p-5 flex flex-col gap-2 shadow-inner">
                <div className="text-xs text-slate-400 uppercase tracking-wide">
                  Tech Stack
                </div>
                <div className="text-3xl font-semibold">9 tools</div>
                <div className="text-sm text-purple-300">
                  Multi-skilled dev 🛠️
                </div>
              </div>

              <div className="bg-[#1E2530] rounded-xl p-5 flex flex-col gap-2 shadow-inner">
                <div className="text-xs text-slate-400 uppercase tracking-wide">
                  Consistency
                </div>
                <div className="text-3xl font-semibold">9 days</div>
                <div className="text-sm text-yellow-300">Daily grind 🔥</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
