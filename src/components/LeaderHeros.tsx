import { useState } from "react";

export const LeaderHeros = () => {
  const [active, setActive] = useState(0);
  const activeHandler = (activeNumber: number) => {
    setActive(activeNumber);
  };
  return (
    <section
      className="2xl:max-w-[1400px] mx-auto xl:max-w-[1280px]
    lg:max-w-[980px]"
    >
      <div className="mt-9  ">
        <div>
          <div
            className="flex gap-9 cursor-pointer relative bg-[#181d26] w-fit 
           rounded-2xl px-1 py-1  "
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
        <div className=" grid grid-cols-3">
          <TopLeaders />
          <TopLeaders />
          <TopLeaders />
        </div>
      </div>
    </section>
  );
};

const TopLeaders = () => {
  return (
    <div>
      <div className="text-white flex items-center flex-col gap-3">
        <div>
          <img
            className=" w-[96px] rounded-xl"
            src="https://i.pinimg.com/736x/df/c7/13/dfc7136726336c86fdd640243cea2a11.jpg"
          />
          <p>Brian Ngo</p>
        </div>
        <div>
          {" "}
          <img
            className=" w-[64px] rounded-xl"
            src="https://img.freepik.com/free-vector/trophy_78370-345.jpg"
          />
          <p>Earn 2,000 points</p>
        </div>
        <div className="flex flex-col">
          {" "}
          <div className="flex gap-2">
            <img
              className=" w-[28px] rounded-xl"
              src="./svgs/diamond-svgrepo-com.svg"
            />
            <span>50,000</span>
          </div>
          <span>Prize</span>
        </div>
      </div>
    </div>
  );
};
