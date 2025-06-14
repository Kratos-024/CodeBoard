import { LeaderHeros } from "../components/LeaderHeros";
import Navbar from "../components/NavBar";

export const LeaderBoardPage = () => {
  return (
    <div className="bg-black w-full h-screen">
      <Navbar />
      <LeaderHeros />
    </div>
  );
};
