import { AiFillMessage } from "react-icons/ai";
import Continents from "../Continents";

const RightSideBar = () => {
  const friends = [
    {
      name: "Andrew Jefferson",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLA994hpL3PMmq0scCuWOu0LGsjef49dyXVg&s",
    },
    {
      name: "John Doe",
      avatar:
        "https://todaysparent.mblycdn.com/tp/resized/2017/09/900x900/Why-you-shouldnt-give-your-kid-praise-for-being-smart.jpg",
    },
    {
      name: "Jane Smith",
      avatar:
        "https://www.shutterstock.com/image-photo/young-asian-woman-professional-entrepreneur-600nw-2127014192.jpg",
    },
  ];
  
  return (
    <div className="flex flex-col gap-[2rem] font-bold pt-[1rem] w-full ">
      <ul className="friend-list flex flex-col gap-[1rem]">
        <h1 className="text-lg font-bold">Recently</h1>
        {friends.map((friend, index) => (
          <li key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-[2rem] h-[2rem] relative">
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="w-full h-full object-cover rounded-full border"
                />
              </div>
              <p className="text-sm">{friend.name}</p>
            </div>
            <div>
              <button className="hover:scale-110">
                <AiFillMessage className="text-[#303030]" />
              </button>
            </div>
          </li>
        ))}
      </ul>
      {/* <div className="recommend-list">
        <h1 className="text-lg font-bold">Top travelers</h1>
        <div className="grid grid-cols-2 gap-4 pt-[1rem]">
          {ImageStories.slice(0, 4).map((story, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-md transition-transform duration-300 hover:scale-105"
            >
              <img
                src={story.imageUrl}
                alt={`Traveler Story ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-end px-4 pb-4 bg-[#303030] bg-opacity-50 text-white">
                <p className="text-sm font-semibold">{`  ${story.name}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="flex flex-col gap-[1rem]">
        <h1 className="text-lg font-bold">Explore</h1>
        <Continents />
      </div>
    </div>
  );
};

export default RightSideBar;
