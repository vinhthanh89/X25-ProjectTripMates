import Header from "../../components/NewsFeed/Header";
import LeftSideBar from "../../components/NewsFeed/SideLeft";
import RightSideBar from "../../components/NewsFeed/SideRight";
import "./index.css";
import { Outlet } from "react-router";

const NewsFeed = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-5 gap-[1.2rem] h-screen bg-white">
        <div className="col-span-1 sideBars poppins px-[10px] shadow-xl">
          <LeftSideBar />
        </div>
        <div className="col-span-3 flex flex-col poppins px-[15px] overflow-hidden shadow-2xl">
          <Outlet />
        </div>
        <div className="col-span-1 sideBars poppins px-[20px] shadow-xl">
          <RightSideBar />
        </div>
      </div>
    </>
  );
};

export default NewsFeed;
