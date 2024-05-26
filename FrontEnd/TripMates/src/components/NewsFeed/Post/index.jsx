import { BiSolidUserCircle } from "react-icons/bi";

const Post = () => {
  return (
    <div className="flex flex-col gap-y-[1.2rem] rounded-lg shadow-xl p-4 cursor-pointer">
      <div>
        <img
          src="https://images.unsplash.com/photo-1624049321569-f483adecb8fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="rounded-[12px] cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-[1rem]">
        <div className="flex items-center gap-2">
          <BiSolidUserCircle size={50} />
          <div>
            <h1 className="text-black font-bold text-lg">Quoc Chau</h1>
            <p className="text-gray-500 font-thin text-xs">2 hours ago</p>
          </div>
        </div>

        <div>
          <div className="text-sm text-[#5143d9]">
            <span>#Europe</span>
            <span>#thisisabeach</span>
          </div>
          <p className="text-black text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem unde numquam minus asperiores aliquam eligendi
            dolores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
