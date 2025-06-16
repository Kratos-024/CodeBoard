import ActivityCalendar from "react-activity-calendar";
import ReactTooltip from "react-tooltip";
import { IoIosCalendar } from "react-icons/io";
import { LanguageChart } from "./UserOverview";
import { Calendar, Clock, Trophy, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const theme = {
  light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

const generateData = () => {
  const data = [];
  const startDate = new Date("2025-03-26");
  const endDate = new Date("2025-06-15");

  for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split("T")[0];
    const count = Math.floor(Math.random() * 5);
    data.push({
      date: dateStr,
      count: count,
      level: count,
    });
  }
  return data;
};

const data = generateData();

export function UserGitCalendar() {
  const [blockSize, setBlockSize] = useState(28);

  useEffect(() => {
    const updateSize = () => {
      const isXL = window.matchMedia("(min-width: 1280px)").matches;
      setBlockSize(isXL ? 32 : 28);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div>
      <ActivityCalendar
        data={data}
        theme={theme}
        hideTotalCount={false}
        showWeekdayLabels={["sun", "mon", "tue", "wed", "thu", "fri", "sat"]}
        hideColorLegend={false}
        blockSize={28} // max-2xl: 28
        blockRadius={8}
        blockMargin={12}
        fontSize={21}
      />
      <ReactTooltip />
    </div>
  );
}

const ActivityInsights = () => {
  return (
    <div
      className=" dark:bg-primary-foreground/90  
     p-4 rounded-xl backdrop-blur-sm lg:w-[320px] 
        "
    >
      <div className="mb-6 ">
        <div className="flex items-center gap-2 mb-2 ">
          <Zap className="w-5 h-5 text-orange-400" />
          <h2 className="text-white font-semibold text-lg">
            Activity Insights
          </h2>
        </div>
        <p className="text-slate-300 text-sm">
          Patterns and trends in your coding
        </p>
      </div>

      <div className="space-y-9">
        <div className="flex flex-col gap-4  items-center justify-between">
          <div className="flex  items-center gap-3">
            <div className="p-2 bg-orange-500/20 rounded-lg">
              <Clock className="w-4 h-4 text-orange-400" />
            </div>
            <span className="text-slate-300 whitespace-nowrap  text-sm">
              Most Active Time
            </span>
          </div>
          <span className="text-white whitespace-nowrap font-medium">
            8:00 PM - 11:00 PM
          </span>
        </div>

        <div className="flex items-center flex-col gap-4 justify-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Calendar className="w-4 h-4 text-blue-400" />
            </div>
            <span className="text-slate-300 text-sm">Most Active Day</span>
          </div>
          <span className="text-white font-medium">Wednesday</span>
        </div>

        <div className="flex items-center flex-col gap-4 justify-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/20 rounded-lg">
              <Zap className="w-4 h-4 text-red-400" />
            </div>
            <span className="text-slate-300 text-sm">Current Streak</span>
          </div>
          <div className="text-right flex flex-col items-center">
            <div className="text-white font-medium">13 days</div>
            <div className="text-orange-400 text-xs">
              Keep the momentum going!
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col gap-4 justify-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <Trophy className="w-4 h-4 text-yellow-400" />
            </div>
            <span className="text-slate-300 text-sm">Longest Streak</span>
          </div>
          <div className="text-right flex flex-col items-center">
            <div className="text-white  font-medium">14 days</div>
            <div className="text-slate-400 text-xs ">Achieved on April 15</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const UserCommitChart = () => {
  return (
    <section className="2xl:w-full max-md:max-w-[620px]">
      <div
        className="dark:bg-primary-foreground/90 px-7 py-6
       rounded-lg "
      >
        <div className="py-2 px-4 ">
          <div className="flex  items-center gap-2">
            <IoIosCalendar className="w-[38px] h-[38px]" />
            <h2 className="text-xl ">Activity Overview</h2>
          </div>
          <h3 className="text-white text-[22px]">
            Coding patterns for last 30 days
          </h3>
          <div className="flex gap-6 mt-4  ">
            <UserGitCalendar />
          </div>
        </div>
      </div>
    </section>
  );
};

export const UserProgrammingLnaguageUsed = () => {
  return (
    <section className="2xl:max-w-full  xl:max-w-full  ">
      <div
        className="dark:bg-primary-foreground/90 
      rounded-lg mt-6"
      >
        <div className="px-9 py-6">
          <div className="flex items-center gap-2">
            <IoIosCalendar className="w-[38px] h-[38px]" />
            <h2 className="text-xl ">Activity Overview</h2>
          </div>
          <h3 className="text-white text-[22px]">
            Coding patterns for last 30 days
          </h3>
          <div
            className="flex gap-6 
           xl:max-w-[1280px] "
          >
            <LanguageChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityInsights;
