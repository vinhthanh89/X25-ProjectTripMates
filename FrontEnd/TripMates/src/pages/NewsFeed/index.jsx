import LeftSideBar from "../../components/NewsFeed/SideLeft";
import RightSideBar from "../../components/NewsFeed/SideRight";
import { Outlet } from "react-router";

const NewsFeed = () => {
  return (
    <div className="grid grid-cols-6 bg-[#f2f2f2] text-[#303030] gap-[1.2rem] h-screen">
      <div className="col-span-1 flex flex-col items-center gap-[5rem] px-[10px] bg-white rounded">
        <LeftSideBar />
      </div>
      <div className="col-span-4 flex flex-col overflow-y-scroll">
        <Outlet />
      </div>
      <div className="col-span-1 flex flex-col items-center gap-[5rem] px-[1.5rem] bg-white rounded">
        <RightSideBar />
      </div>
</div>
  );
};

export default NewsFeed;
