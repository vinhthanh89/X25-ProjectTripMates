import { useState } from "react";
import Header from "../../components/LandingPage/Header/Header";
// import { Link } from "react-router-dom";
import SignUp from "../../components/LandingPage/Signup";
import Login from "../../components/LandingPage/Login";
import { FcGoogle } from "react-icons/fc";

const LandingPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <div className="w-screen h-screen px-28 py-5 bg-white">
        <Header />
        <section className="grid grid-cols-2 gap-[10rem] pt-[3rem]">
          <div className="col-span-1 flex flex-col gap-[1rem] text-6xl text-black font-bold poppins">
            <h1>Welcome travelers!</h1>
            <p className="text-xl text-[#717171] font-normal">
              Are you ready to dive into our community?
            </p>
            <div className="flex text-xl gap-[1rem]">
              {/* Add conditional class based on isLogin */}
              <button
                onClick={() => setIsLogin(true)}
                className={`hover:underline ${isLogin ? "underline" : ""}`}
              >
                Login
              </button>
              <span>|</span>
              {/* Add conditional class based on isLogin */}
              <button
                onClick={() => setIsLogin(false)}
                className={`hover:underline ${!isLogin ? "underline" : ""}`}
              >
                Sign up
              </button>
            </div>
            {isLogin ? <Login /> : <SignUp />}
            <button className="flex items-center gap-[10px] text-[#717171] text-sm font-light">
              Or sign in with <FcGoogle size={20} />
            </button>
            {/* <div>
              <Link className="flex justify-center btn_all w-[10rem] bg-black hover:bg-[#505050] hover:scale-105 hover_trans text-white">
                {isLogin ? "Login" : "Sign up"}
              </Link>
            </div> */}
          </div>
          <div className="col-span-1">
            <img src="./Travel-Black.jpg" className="w-[90%]" />
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;

