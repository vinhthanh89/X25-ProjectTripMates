import Post from "../../components/NewsFeed/Post";
import LeftSideBar from "../../components/NewsFeed/SideLeft";
import RightSideBar from "../../components/NewsFeed/SideRight";
import "./index.css";
import { Outlet } from "react-router";

const NewsFeed = () => {
  return (
    <div className="bg-[#f2f2f2] text-[#303030]">
      <div className="grid grid-cols-6 gap-[1.2rem] h-screen p-5">
        <div className="col-span-1 sideBars poppins px-[10px] bg-white rounded">
          <LeftSideBar />
        </div>
        <div className="col-span-5 flex flex-col poppins px-[1.5rem] overflow-hidden bg-white rounded">
          {/* <Outlet /> */}
          <Post/>
        </div>
        {/* <div className="col-span-1 sideBars poppins px-[15px] shadow-lg ">
          <RightSideBar />
        </div> */}
      </div>
    </div>
  );
};

export default NewsFeed;
