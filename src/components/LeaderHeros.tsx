import { useState } from "react";
import { IoIosAlarm } from "react-icons/io";
import { GridPattern } from "./Feature";

export const LeaderHeros = () => {
  const [active, setActive] = useState(0);
  const activeHandler = (activeNumber: number) => {
    setActive(activeNumber);
  };
  const p = [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <section
      className="2xl:max-w-[1400px] mx-auto xl:max-w-[1280px]  
    lg:max-w-[980px]"
    >
      <div className="absolute inset-0 w-full h-screen bg-">
        <GridPattern
          width={20}
          height={20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />{" "}
      </div>
      <div className="mt-[96px]">
        <div>
          <div
            className="flex gap-9  cursor-pointer relative
             bg-[#181d26] w-fit  mx-auto
           rounded-2xl px-1 py-1 "
          >
            <div
              className={`  w-[112px] ml-2 mt-1 bg-accent-foreground duration-300 ease-in-out  h-[48px] rounded-2xl z-20 top-0 left-0 absolute ${
                active === 0 ? " translate-x-0" : "translate-x-[130%]"
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
              Daily
            </button>
            <button
              onClick={() => {
                activeHandler(1);
              }}
              className="hover:opacity-90 relative z-20 
              cursor-pointer px-9 py-3 text-white  
              "
            >
              Weekly
            </button>
          </div>
        </div>
        {/* <div className="grid grid-cols-3 mt-[96px]">
          <div className="mt-[96px]">
            <TopLeaders />
          </div>
          <div>
            <TopLeaders />
          </div>
          <div className="mt-[96px]">
            <TopLeaders />
          </div>
        </div> */}
      </div>
      <div className="t">
        <IoIosAlarm />
        <p>Ends in 55:24:11</p>
      </div>
      <div>
        <LeaderBoard />
      </div>
    </section>
  );
};

// const TopLeaders = () => {
//   return (
//     <div className=" relative">
//       <div className="text-white flex items-center flex-col gap-6">
//         <div className="flex flex-col items-center">
//           <img
//             className=" w-[96px] rounded-xl"
//             src="https://i.pinimg.com/736x/df/c7/13/dfc7136726336c86fdd640243cea2a11.jpg"
//           />
//           <p>Brian Ngo</p>
//         </div>
//         {/* <div
//           className="bg-[url('./poddium2.png')]
//          bg-cover bg-center h-[612px]  w-full p-2 bg-red-200"
//         > */}
//         <div className="relative z-10">
//           <div className="flex flex-col items-center">
//             <img
//               className=" w-[48px] rounded-xl"
//               src="https://img.freepik.com/free-vector/trophy_78370-345.jpg"
//             />
//             <p>Earn 2,000 points</p>
//           </div>
//           <div className="flex flex-col items-end">
//             <div className="flex gap-2">
//               <img
//                 className=" w-[28px] rounded-xl"
//                 src="./svgs/diamond-svgrepo-com.svg"
//               />
//               <span>50,000</span>
//             </div>
//           </div>
//         </div>
//         <div className="absolute -left-[124px] -top-[64px] h-[788px] w-[788px]">
//           <img className="" src="./poddium.png" />
//         </div>
//         {/* </div> */}
//       </div>
//     </div>
//   );
// };

const fakeUsers = Array.from({ length: 20 }, (_, i) => ({
  rank: i + 1,
  name: `User${i + 1}`,
  score: Math.floor(Math.random() * 10000),
  languages: ["JavaScript", "Python", "C++", "Go", "Rust"]
    .sort(() => 0.5 - Math.random())
    .slice(0, 2),
  lastSeen: `${Math.floor(Math.random() * 60)}m`,
}));

const LeaderBoard = () => {
  return (
    <div>
      <div className="border  border-slate-700 rounded-2xl overflow-hidden">
        <div className="px-6 bg-slate-800 py-4 border-b border-slate-700 bg-slate-750">
          <div className="grid grid-cols-12 gap-4 text-sm font-medium text-slate-400 uppercase tracking-wider">
            <div className="col-span-1">Rank</div>
            <div className="col-span-4">Developer</div>
            <div className="col-span-2">Score</div>
            <div className="col-span-4">Top Languages</div>
            <div className="col-span-1">Last in</div>
          </div>
        </div>
        {fakeUsers.map((user) => (
          <div
            key={user.rank}
            className="px-6 py-4 border-b
           border-slate-700"
          >
            <div
              className="grid grid-cols-12 gap-4 text-sm
             text-slate-200"
            >
              <div className="col-span-1">{user.rank}</div>
              <div className="col-span-4">{user.name}</div>
              <div className="col-span-2">{user.score}</div>
              <div className="col-span-4 flex gap-2">
                {user.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-2 py-1 rounded-md text-xs font-mono bg-yellow-500/10 text-yellow-500 border border-yellow-500/20"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              <div className="col-span-1">{user.lastSeen}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
