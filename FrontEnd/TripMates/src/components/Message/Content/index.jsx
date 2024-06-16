import Header from "./Header";
import TextBox from "./TextBox";

const Content = () => {
  return (
    <div className="w-full h-full border-l-4">
      <div className="grid grid-rows-6">
        <div className="row-span-1 ">
          <Header />
        </div>
        <div className="row-span-5 ">
          <TextBox />
        </div>
      </div>
    </div>
  );
};

export default Content;
