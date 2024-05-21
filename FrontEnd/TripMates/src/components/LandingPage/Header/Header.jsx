import { BiSolidUserCircle } from "react-icons/bi";
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <>
      <div className="flex justify-between w-full poppins">
        <div className="flex items-center gap-[5px]">
          <img src="./tripmates-favicon-color.png" className="w-[3rem]" />
          <h1 className="text-2xl text-black font-semibold">TripMates</h1>
        </div>
        <div>
          <div className="flex items-center gap-[1rem]">
            {/* Model 1 */}
            {/* <img
              src="./profile-user.png"
              alt=""
              className="w-[45px] h-[45px] rounded-lg"
            /> */}
            {/* Model 2 */}
            {/* <p className="text-xl text-[#717171] font-normal">
              Dont have an account?{" "}
              <Link className="underline">Register here</Link>
            </p> */}
            {/* Model 3 */}
            <h2 className="text-xl text-black font-bold">Guest</h2>
            <BiSolidUserCircle size={50} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
