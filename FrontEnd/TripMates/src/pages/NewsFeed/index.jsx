import Header from "../../components/NewsFeed/Header";
import LeftSideBar from "../../components/NewsFeed/SideLeft";
import RightSideBar from "../../components/NewsFeed/SideRight";
import "./index.css";
import { Outlet } from "react-router";

const NewsFeed = () => {
  return (
    <div className="bg-white text-[#303030]">
      <Header />
      <div className="grid grid-cols-6 gap-[1.2rem] h-screen">
        <div className="col-span-1 sideBars poppins px-[10px] shadow-lg">
          <LeftSideBar />
        </div>
        <div className="col-span-4 flex flex-col poppins px-[1.5rem] overflow-hidden shadow-2xl pt-[10px]">
          <Outlet />
        </div>
        <div className="col-span-1 sideBars poppins px-[15px] shadow-lg">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
