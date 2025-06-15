import { useState } from "react";
import { Award, Calendar, Coffee, Star } from "lucide-react";
import ActivityInsights, {
  UserCommitChart,
  UserProgrammingLnaguageUsed,
} from "./ConsistencyGit";
import "../../index.css";

export const UserInfo = () => {
  const [active, setActive] = useState(0);
  const activeHandler = (activeNumber: number) => {
    setActive(activeNumber);
  };
  const grindStats = [
    {
      header: "LATE GRINDS",
      work: "0 Nights",
      subHeader: "Balanced focus",
      icon: "🔥",
      color: "#F97316", // orange
    },
    {
      header: "EARLY RISER",
      work: "3 Mornings",
      subHeader: "Peak productivity",
      icon: "🌅",
      color: "#3B82F6", // blue
    },
    {
      header: "WEEKEND HUSTLE",
      work: "2 Days",
      subHeader: "Pushed limits",
      icon: "🚀",
      color: "#10B981", // green
    },
    {
      header: "ALL-NIGHTER",
      work: "1 Night",
      subHeader: "Extreme effort",
      icon: "🌙",
      color: "#8B5CF6", // purple
    },
  ];

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
                className=" font-Roboto
                dark:text-white font-semibold font-in  text-[48px] "
              >
                Tharun Sharma
              </p>
              <span
                className="ml-2
       text-muted-foreground font-Roboto text-[18px] -[#252C20]"
              >
                @usertharun
              </span>
              <p
                className="ml-2
       text-muted-foreground font-Roboto text-[21px] -[#252C20]"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur optio voluptatibus odio similique repellendus
                eligendi
              </p>
              <div className="mt-3 ml-2 flex gap-5">
                <a href="#" className=" cursor-pointer">
                  Followers 2
                </a>
                <a>Following 6</a>
              </div>
            </div>
          </div>

          <div
            className="flex gap-9 
 cursor-pointer relative dark:bg-primary-foreground/90  w-fit mx-auto rounded-2xl px-1 py-1 "
          >
            <div
              className={`w-[124px]  ml-2 mt-1 bg-gradient-tertiary
                 duration-300 ease-in-out h-[48px] 
                 rounded-2xl z-20 top-0 left-0 absolute ${
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
                activeHandler(2);
              }}
              className="hover:opacity-90 relative z-20 
              cursor-pointer px-9 py-3 text-white  
              "
            >
              Language
            </button>
          </div>

          <div className="flex gap-4  ">
            {active === 0 && (
              <div className="flex  flex-1 flex-col 2xl:w-80 gap-6 items-center 2xl:mt-6">
                {grindStats.map((item) => {
                  return (
                    <div>
                      <UserPerformanceComp
                        header={item.header}
                        subHeader={item.subHeader}
                        work={item.work}
                        icon={item.icon}
                        color={item.color}
                      />
                    </div>
                  );
                })}
              </div>
            )}
            <div className="xl:w-[780px] flex  mx-auto">
              {active === 0 && (
                <div
                  className="flex gap-2 flex-col 
       flex-1 items-center"
                >
                  <UserCommitChart />
                  <UserProgrammingLnaguageUsed />
                </div>
              )}
              {active === 1 && (
                <div
                  className="flex gap-2  
      items-center"
                >
                  <UserCommitChart />
                  <ActivityInsights />
                </div>
              )}
            </div>
            {active === 0 && (
              <div className="flex flex-col 2xl:w-80 gap-6 items-center 2xl:mt-6 ">
                <TopLanguage />
                <Performance />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const UserPerformanceComp = ({
  header,
  subHeader,
  work,
  icon,
  color,
}: {
  header: string;
  subHeader: string;
  work: string;
  icon: any;
  color: string;
}) => (
  <div
    className="w-48  px-6 py-7  dark:bg-primary-foreground/90
  rounded-xl shadow-2xl border border-gray-700"
  >
    <div className=" rounded-xl flex flex-col gap-2 shadow-inner">
      <div className="text-xs text-slate-400 uppercase tracking-wide">
        {header}
      </div>
      <div className={`bg-[${color}] text-3xl whitespace-nowrap font-semibold`}>
        {work}
      </div>
      <div className="text-sm text-teal-400">
        {subHeader} {icon}
      </div>
    </div>
  </div>
);

const TopLanguage = () => (
  <div
    className="w-full  p-6  dark:bg-primary-foreground/90
  rounded-xl shadow-2xl border border-gray-700"
  >
    <div className="flex items-center mb-4">
      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
        <Star className="w-5 h-5 text-white" />
      </div>
      <div>
        <h3 className="text-white font-semibold">Top Language</h3>
        <p className="text-gray-400 text-xs">During your streak</p>
      </div>
    </div>
    <div className="space-y-4">
      <div className="text-4xl font-bold text-white">Javascript</div>
      <div className="flex justify-between items-center">
        <div className="text-gray-300">
          <div className="text-lg font-semibold">15 days</div>
          <div className="text-xs text-gray-400">Days</div>
        </div>
        <div className="text-gray-300">
          <div className="text-lg font-semibold">90%</div>
          <div className="text-xs text-gray-400">Usage</div>
        </div>
      </div>
    </div>
  </div>
);

const Performance = () => (
  <div
    className="w-80 p-6  border dark:bg-primary-foreground/90 
  border-gray-700 rounded-2xl shadow-2xl"
  >
    <div className="flex items-center mb-6">
      <div
        className="w-10 h-10 bg-gradient-to-r from-cyan-400
       to-blue-500 rounded-lg flex items-center justify-center mr-3"
      >
        <Award className="w-5 h-5 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">Performance</h3>
        <p className="text-white text-sm">Coding metrics and achievements</p>
      </div>
    </div>

    <div className="space-y-5">
      <div className="bg-gradient-tertiary rounded-xl p-4 border border-gray-700">
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-300 font-medium">Daily Average</span>
          <span className="text-2xl font-bold text-white">90h</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-700 shadow-lg shadow-cyan-500/50"
            style={{ width: `90 * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gradient-tertiary rounded-xl p-3 border border-purple-500/30">
          <div className="flex items-center mb-2">
            <Calendar className="w-4 h-4 text-white mr-2" />
            <span className="text-gray-400 text-sm">Peak Day</span>
          </div>
          <div className="text-lg font-bold text-white">70</div>
          <div className="text-xs text-white">Your most productive day</div>
        </div>
        <div className="bg-gradient-tertiary rounded-xl p-3 border border-orange-500/30">
          <div className="flex items-center mb-2">
            <Coffee className="w-4 h-4 text-white mr-2" />
            <span className="text-gray-400 text-sm">Longest Session</span>
          </div>
          <div className="text-lg font-bold text-white">900h</div>
          <div className="text-xs text-white">That's a lot of caffeine!</div>
        </div>
      </div>

      {/* Active Days */}
      <div className="bg-gradient-tertiary rounded-xl p-4 border border-gray-700">
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-300 font-medium">Active Days</span>
          <span className="text-2xl font-bold text-white">15 days</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-700 shadow-lg shadow-green-500/50"
            style={{ width: `90 * 100}%` }}
          ></div>
        </div>
        <div className="text-xs text-white font-semibold mt-2">
          100% coverage
        </div>
      </div>
    </div>
  </div>
);
