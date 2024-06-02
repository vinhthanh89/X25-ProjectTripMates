import { useSelector } from "react-redux";
import { IoIosMail } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import Post from "../Post";

const UserProfile = () => {
  const user = useSelector((state) => state.user.user);
  const iconSize = 20;
  return (
    <>
      <div className="userProfile">
        <div className="flex flex-col items-center gap-3">
          <img
            className="w-[70px] h-[70px] object-cover rounded-full"
            src={user.avatar}
            alt=""
          />
          <div>
            <h1 className="text-xl font-bold">{user.fullName }</h1>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[20px] pt-[30px]">
          <div className="col-span-1 flex flex-col gap-2 px-[10px] border rounded-xl py-[1rem]">
            <div className="flex flex-col gap-2 border-b-[1.5px] px-[0.5rem]">
              <h1 className="text-lg font-bold">About me</h1>
              <div>
                <p className="text-sm text-[#717171]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae praesentium vel, excepturi, soluta dignissimos fuga
                </p>
              </div>
              <ul className="flex flex-col gap-2 py-[15px]">
                <li className="flex items-center gap-2">
                  <MdPlace size={iconSize} />
                  Ho Chi Minh
                </li>
                <li className="flex items-center gap-2">
                  <IoIosMail size={iconSize} />
                  {user.email}
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-lg font-bold">Topics</h1>
              <button className="flex btn_all gap-2 w-full transition duration-300 ease-in-out">
                <div className="flex items-start gap-2 w-full">
                  <img
                    className="w-[25px] h-[25px] object-cover rounded-lg"
                    src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <p className="text-base">I travel to London</p>
                </div>
              </button>
              <button className="flex btn_all gap-2 w-full transition duration-300 ease-in-out">
                <div className="flex items-start gap-2 w-full">
                  <img
                    className="w-[25px] h-[25px] object-cover rounded-lg"
                    src="https://plus.unsplash.com/premium_photo-1661854008793-8ce54b2e622b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <p className="text-base">Vietnam: top 10 things</p>
                </div>
              </button>
              <button className="flex btn_all gap-2 w-full transition duration-300 ease-in-out">
                <div className="flex items-start gap-2 w-full">
                  <img
                    className="w-[25px] h-[25px] object-cover rounded-lg"
                    src="https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <p className="text-base">Traveling the world</p>
                </div>
              </button>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-[10px]">
            <ul className="menu menu-vertical lg:menu-horizontal bg-white border h-[10%] rounded-box gap-10 px-[20px] w-[45%]">
              <button className="relative pb-2 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 before:ease-in-out hover:before:w-full focus:before:w-full">
                Post
              </button>
              <button className="relative pb-2 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 before:ease-in-out hover:before:w-full focus:before:w-full">
                Followers
              </button>
              <button className="relative pb-2 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-current before:transition-all before:duration-300 before:ease-in-out hover:before:w-full focus:before:w-full">
                Following
              </button>
            </ul>
            <div className="border rounded-xl h-[400px]">
              <h1>Post Component here</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
