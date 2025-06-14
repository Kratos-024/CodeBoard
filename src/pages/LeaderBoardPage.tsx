import { LeaderHeros } from "../components/LeaderHeros";
import Navbar from "../components/NavBar";

export const LeaderBoardPage = () => {
  return (
    <div
      className="bg-[#1e1f28] min-h-screen text-white
     w-full h-screen"
    >
      <Navbar />
      <LeaderHeros />
    </div>
  );
};
