/* eslint-disable react/prop-types */
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

const Content = ({post}) => {

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col gap-4">
        {/* <span className="flex items-center gap-2 font-bold">
          <MdPlace />
          <img
            src="../../../../../../public/vietnam.png"
            alt=""
            className="w-[2rem] h-[2rem]"
          />
          Vietnam
        </span> */}
        {/* <h1 className="text-4xl font-bold">
          Top 10 places you should visit in Vietnam and make sure to take photos
          <div className="text-base">
            <span className="flex items-center gap-2 font-bold">
              <MdPlace />
              Vietnam
            </span>
          </div>
        </h1> */}
        {/* <div className="flex flex-col items-center gap-2 p-[1.5rem]">
          <img src={thumbnail} alt="Thumbnail" className="rounded" />
          <span className="text-gray-400">A picture taken in the Village</span>
        </div>
        {content.map((item, index) => (
          <div key={index} className="gap-2 p-[1.5rem]">
            <p className="text-lg">{item.text}</p>
          </div>
        ))} */}
        <FroalaEditorView model={post.content} />
      </div>
    </div>
  );
};

export default Content;
