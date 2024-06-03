import { useSelector } from "react-redux";

const Followers = () => {
  const user = useSelector((state) => state.user.user);

  const followers = new Array(20).fill(null).map((_, index) => ({
    id: index + 1,
    name: `Jack ${index + 1}`,
    avatar: user.avatar,
  }));

  return (
    <div>
      <div className="followers grid grid-cols-4 gap-4">
        {followers.map((follower) => (
          <div
            key={follower.id}
            className="flex flex-col items-center gap-2 text-lg"
          >
            <img src={follower.avatar} alt="" className="w-[30px] h-[30px]" />
            <p>{follower.name}</p>
          </div>
        ))}
      </div>      
    </div>
  );
};

export default Followers;
