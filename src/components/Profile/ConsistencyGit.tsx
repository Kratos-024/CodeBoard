import { IoIosCalendar } from "react-icons/io";

import { ActivityCalendar } from "react-activity-calendar";

const data = [
  {
    date: "2024-06-23",
    count: 2,
    level: 1,
  },
  {
    date: "2024-08-02",
    count: 16,
    level: 4,
  },
  {
    date: "2024-11-29",
    count: 11,
    level: 3,
  },
  {
    date: "2024-12-29",
    count: 10,
    level: 4,
  },
];

function Calendar() {
  return <ActivityCalendar data={data} />;
}

export const UserOverview = () => {
  return (
    <section>
      <div className="bg-[#1E2530] rounded-lg">
        <div className="px-6 py-2">
          <div className="flex items-center gap-2">
            <IoIosCalendar className="w-[38px] h-[38px]" />
            <h2 className="text-lg">Activity Overview</h2>
          </div>
          <h3>Coding patterns for last 30 days</h3>
          <Calendar />
        </div>
      </div>
    </section>
  );
};
