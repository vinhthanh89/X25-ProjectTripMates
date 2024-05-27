import LeftSideBar from "../../components/NewsFeed/SideLeft";
import RightSideBar from "../../components/NewsFeed/SideRight";
import Content from "../../components/NewsFeed/Content";
import "./index.css";

const NewsFeed = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-[1.2rem] h-screen bg-white">
        <div className="col-span-1 sideBars poppins px-[15px] shadow-xl">
          <LeftSideBar />
        </div>
        <div className="col-span-3 flex flex-col poppins px-[15px] overflow-hidden shadow-xl">
          <Content />          
        </div>
        <div className="col-span-1 sideBars poppins px-[15px] shadow-xl">
          <RightSideBar />
        </div>
      </div>
    </>
  );
};

export default NewsFeed;
