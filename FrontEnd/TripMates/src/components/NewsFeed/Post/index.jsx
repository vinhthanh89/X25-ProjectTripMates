import { MdPlace } from "react-icons/md";
const Post = () => {
  return (
    <div className="flex flex-col gap-y-[1.2rem] rounded-lg shadow-xl p-4 cursor-pointer">
      <div className="relative">
        <div className="absolute top-[5px] right-[5px] flex items-center gap-2">
          <div className="w-[4rem] h-[4rem]">
            <img
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover rounded-full border"
            />
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1624049321569-f483adecb8fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="rounded-[12px] cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-[10px] text-black">
        <h1 className="text-2xl font-bold">
          Welcome to the most beautiful lake in Canada!
        </h1>
        <div className="flex flex-col gap-[5px]">
          <div className="flex items-center gap-1 font-medium text-gray-400">
            <MdPlace />
            <p>Canada</p>
          </div>
          <div className="text-sm text-[#5143d9]">
            <span>#Europe</span>
            <span>#thisisabeach</span>
          </div>
          <p className="text-sm font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae numquam culpa sunt nemo fugiat odio voluptate voluptas, soluta mollitia asajkd hsakj dhash kdjaskj askdajskdj ajksdjkalsdj jlksadjkasjd alksdjlkasdj .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
