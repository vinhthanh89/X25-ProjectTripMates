import Post from "../../components/NewsFeed/Post";
import LeftSideBar from "../../components/NewsFeed/SideLeft";
import RightSideBar from "../../components/NewsFeed/SideRight";
import "./index.css";
import { Outlet } from "react-router";

const NewsFeed = () => {
  return (

      <div className="grid bg-[#f2f2f2] text-[#303030] grid-cols-6 gap-[1.2rem] h-screen ring-1 relative">
        <div className="col-span-1 pt-[20px] pb-[80px] sideBars poppins px-[10px] bg-white rounded overflow-hidden">
          <LeftSideBar />
        </div>
        <div className="col-span-4 flex flex-col poppins overflow-y-scroll bg-white ring-1">
          <Outlet />
          {/* <Post/> */}
        </div>
        <div className="col-span-1 sideBars poppins px-[15px] shadow-lg ">
          <RightSideBar />
        </div>
      </div>
  );
};

export default NewsFeed;
