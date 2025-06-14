import { IoIosCalendar } from "react-icons/io";

export const UserOverview = () => {
  //   const levels = [
  //     "bg-[#ebfbea]",
  //     "bg-[#c6f6d5] ",
  //     "bg-[#81e6d9]",
  //     "bg-[#38b2ac]",
  //     "bg-[#2c7a7b]",
  //   ];
  return (
    <section>
      <div className="bg-[#1E2530] rounded-lg">
        <div
          className=" px-6 py-2 
        "
        >
          <div className="flex  items-center gap-2">
            <IoIosCalendar className=" w-[38px] h-[38px]" />
            <h2 className=" text-lg">Activity Overview</h2>
          </div>
          <h3>Coding parterns for last 30 days</h3>
          <ContributionGrid />
        </div>
      </div>
    </section>
  );
};

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function ContributionGrid() {
  const year = 2025;
  const month = 5;

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();

  const startDayOfWeek = firstDay.getDay();
  const mondayBasedStart = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

  const totalSquares = mondayBasedStart + daysInMonth;
  const weeks = Math.ceil(totalSquares / 7);

  const renderGrid = () => {
    const squares = [];

    for (let i = 0; i < weeks * 7; i++) {
      const dayNumber = i - mondayBasedStart + 1;
      const isValidDay = dayNumber >= 1 && dayNumber <= daysInMonth;

      if (isValidDay) {
        // const date = new Date(year, month, dayNumber);
        // const dayOfWeek = date.getDay();
        // const mondayBasedDay = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
        // const dayLabel = days[mondayBasedDay];

        squares.push(
          <div
            key={i}
            className="relative group rounded-lg w-9 h-9 border-[1px] border-slate-600 bg-slate-800 hover:scale-105 duration-200 
            transition-transform ease-in-out"
          >
            <div
              className="absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 
            rounded shadow-lg -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              {dayNumber} {monthNames[month]}
            </div>
          </div>
        );
      } else {
        squares.push(<div key={i} className="w-9 h-9"></div>);
      }
    }

    return squares;
  };

  return (
    <div className="flex">
      <div className="flex flex-col justify-between mr-2">
        {days.map((day, idx) => (
          <div
            key={idx}
            className="h-9 text-slate-400 text-sm flex items-center"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-3">{renderGrid()}</div>
    </div>
  );
}
