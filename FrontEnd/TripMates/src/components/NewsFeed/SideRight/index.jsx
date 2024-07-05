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
      <div className="flex flex-col gap-[1rem]">
        <h1 className="text-lg font-bold">Explore</h1>
        <Continents />
      </div>
    </div>
  );
};

export default RightSideBar;
