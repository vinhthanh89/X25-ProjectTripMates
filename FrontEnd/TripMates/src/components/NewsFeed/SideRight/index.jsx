import { AiFillMessage } from "react-icons/ai";

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

  const ImageStories = [
    {
      name: "John Smith",
      imageUrl:
        "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mary Jane",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661964344898-c5bfe7b6cb06?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Jake Paul",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661964414899-6528336922d9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Amanda",
      imageUrl:
        "https://images.unsplash.com/photo-1531737212413-667205e1cda7?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="flex flex-col gap-[2rem] font-bold pt-[1rem] w-full">
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
      <div className="recommend-list">
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
      </div>
    </div>
  );
};

export default RightSideBar;
