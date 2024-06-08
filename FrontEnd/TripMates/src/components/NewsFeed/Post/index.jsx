import Content from "./Components/Content";
import Header from "./Components/Header";
import Recommend from "./Components/Recommend";

const Post = () => {
    return (
      //! UI 1
    <div className="grid grid-cols-5 gap-[3rem] mt-5 px-5 h-full overflow-y-scroll">
      <div className="col-span-4 flex flex-col gap-[2rem] overflow-auto">
        <Header />
        <Content />
      </div>
      <div className="col-span-1 overflow-auto">
        <Recommend />
      </div>
      </div>
      
    //! UI2
    // <div className="mt-5 px-5 h-full overflow-y-scroll">
    //   <div className="flex flex-col gap-[2rem] overflow-auto">
    //     <Header />
    //     <Content />
    //   </div>
    // </div>
  );
};

export default Post;
