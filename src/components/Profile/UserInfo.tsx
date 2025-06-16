import { useState } from "react";
import { Award, Calendar, Coffee, Star } from "lucide-react";
import ActivityInsights, {
  UserCommitChart,
  UserProgrammingLnaguageUsed,
} from "./ConsistencyGit";
import "../../index.css";
const UserInfo = () => {
  return (
    <div
      className="flex gap-3 mt-9 
      2xl:max-w-[1400px] mx-auto
      max-lg:mb-[64px] xl:max-w-[1280px]
      lg:max-w-[980px] items-center "
    >
      <img
        className="w-64 max-lg:w-48 rounded-full"
        src="https://avatars.githubusercontent.com/u/149764409?v=4"
      />
      <div>
        <p
          className=" font-Roboto max-lg:text-[32px]
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
          className="ml-2 max-lg:text-[17px]
text-muted-foreground font-Roboto text-[21px] -[#252C20]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          optio voluptatibus odio similique repellendus eligendi
        </p>
        <div className="mt-3 ml-2 flex gap-5">
          <a href="#" className=" cursor-pointer">
            Followers 2
          </a>
          <a>Following 6</a>
        </div>
      </div>
    </div>
  );
};

const SideWaysScrollingButton = ({
  activeHandler,
  active,
}: {
  activeHandler: any;
  active: number;
}) => {
  return (
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
  );
};

export const UserStats = () => {
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
      <div className="mx-auto px-4 md:px-6">
        <div>
          <div>
            <UserInfo />
          </div>

          <div>
            <SideWaysScrollingButton
              active={active}
              activeHandler={activeHandler}
            />
          </div>
          <div
            className="2xl:max-w-[1400px] 
      max-md:gap-4  gap-9  mx-auto flex
       max-md:mt-6
         max-xl:max-w-[1080px] max-md:grid max-md:grid-cols-1 max-2xl:max-w-[1220px] max-md:w-full  
            "
          >
            {/* {First div of grid} */}
            {active === 0 && (
              <div
                className="flex max-md:max-w-full 
              max-md:mx-auto   
               max-md:grid max-md:grid-cols-2
                flex-col px-1  
                max-2xl:max-w-[340px] gap-6 
                items-center lg:mt-9"
              >
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

            {/* {Second div of grid} */}
            <div className="flex  mx-auto">
              {active === 0 && (
                <div
                  className="flex gap-2 max-2xl:max-w-[980px] max-:bg-red-300 
 flex-col mt-9 items-center"
                >
                  <UserCommitChart />
                </div>
              )}
              {active === 1 && (
                <div className="flex gap-7 xl:w-[1280px] lg:w-[980px] justify-center mt-9">
                  <UserCommitChart />
                  <ActivityInsights />
                </div>
              )}

              {active === 2 && (
                <div
                  className="flex gap-7 xl:w-full
                 lg:max-w-full justify-center mt-9"
                >
                  <UserProgrammingLnaguageUsed />
                </div>
              )}
            </div>

            {/* {Third div of grid} */}
            {active === 0 && (
              <div
                className="flex flex-col 2xl:max-w-full 
max-md:flex-row max-2xl:max-w-[340px] max-md:max-w-full
gap-6 items-center lg:mt-9 "
              >
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
    className="max-2xl:max-w-[340px]
max-md:w-[320px]  max-md:h-[180px] 
    lg:w-[210px]  px-6 py-7  
    dark:bg-primary-foreground/90
  rounded-xl shadow-2xl border border-gray-700"
  >
    <div className=" rounded-xl  flex flex-col gap-2 shadow-inner">
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
    className="w-80 max-xl:w-64  max-md:hidden 
    dark:bg-primary-foreground/90
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
    className="w-80 p-6 max-xl:w-64 max-md:w-full mx-7
     border dark:bg-primary-foreground/90 
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

    <div className="space-y-5 gap-3 max-md:grid max-md:grid-cols-4">
      <div
        className=" bg-gradient-tertiary 
        rounded-xl 
      p-4 border border-gray-700"
      >
        <div
          className="flex justify-between 
        items-center max-md:items-start mb-3"
        >
          <span className="text-gray-300 font-medium">Daily Average</span>
          <span
            className="text-2xl font-bold
           max-md:text-[21px] text-white"
          >
            90h
          </span>
        </div>
        <div
          className="w-full bg-gray-700
         rounded-full h-2"
        >
          <div
            className="bg-gradient-to-r
             from-green-400 to-emerald-500
              h-2 rounded-full transition-all duration-700
               shadow-lg shadow-cyan-500/50"
            style={{ width: `90 * 100}%` }}
          ></div>
        </div>
      </div>
      <div
        className=" bg-gradient-tertiary 
        rounded-xl max-md:block
      p-4 border border-gray-700"
      >
        <div
          className="flex justify-between 
        items-center max-md:items-start mb-3"
        >
          <span className="text-gray-300 font-medium">Active Days</span>
          <span
            className="text-2xl font-bold
           max-md:text-[21px] text-white"
          >
            15 Days
          </span>
        </div>
        <div
          className="w-full bg-gray-700
         rounded-full h-2"
        >
          <div
            className="bg-gradient-to-r
             from-green-400 to-emerald-500
              h-2 rounded-full transition-all duration-700
               shadow-lg shadow-cyan-500/50"
            style={{ width: `90 * 100}%` }}
          >
            {" "}
          </div>{" "}
          <span
            className="text-2xl font-bold
         max-md:text-[11px] pb-1 text-white"
          >
            100% coverage
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 ">
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

      <div className="md:block bg-gradient-tertiary rounded-xl p-4 border max-md:hidden border-gray-700">
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
