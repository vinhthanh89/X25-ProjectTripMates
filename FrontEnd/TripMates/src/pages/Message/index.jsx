import Content from "../../components/Message/Content";
import LeftSideBar from "../../components/Message/SideLeft";
const Message = () => {
  return (
      <div className="grid grid-cols-6 bg-[#f2f2f2] h-screen w-screen">
        <div className="col-span-1 h-full">
          <LeftSideBar />
        </div>
        <div className="col-span-5 h-full">
          <Content />
        </div>
      </div>
  );
};

export default Message;
