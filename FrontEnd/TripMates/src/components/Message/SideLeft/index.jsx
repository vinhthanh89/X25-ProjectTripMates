// import FriendList from "./FriendList"
// import Header from "./Header"

// const LeftSideBar = () => {

//   return (
//     <div className="flex flex-col gap-3 h-full bg-white rounded-l-lg p-2">
//       <Header/>
//       <FriendList  />
//     </div>
//   )
// }

// export default LeftSideBar
import FriendList from "./FriendList/index";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
const LeftSideBar = ({ friends, onSelectFriend }) => {
  return (
    <div className="flex flex-col gap-2 px-3 h-full bg-white rounded-l-lg p-2">
      <Header />
      <FriendList friends={friends} onSelectFriend={onSelectFriend} />
    </div>
  );
};

export default LeftSideBar;