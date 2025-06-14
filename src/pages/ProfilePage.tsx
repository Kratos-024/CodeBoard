import Navbar from "../components/NavBar";
import { ConsistencyGit } from "../components/Profile/ConsistencyGit";
import { UserInfo } from "../components/Profile/UserInfo";

export const ProfilePage = () => {
  return (
    <section className="">
      <div className="bg-[#151B23] w-full min-h-screen screen">
        <Navbar />
        <UserInfo />
      </div>
    </section>
  );
};
