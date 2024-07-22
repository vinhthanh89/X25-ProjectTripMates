/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
// import { getDataUserFollowing } from "../../../../services/userFollowing";
// import { useSelector } from "react-redux";
// import Friend from "../Friend";

import Friend from "../Friend";

// const FriendList = () => {
//   const [friends, setFriends] = useState([]);
//   const userLogin = useSelector(state => state.user.user)

//   useEffect(() => {
//     const fetchFriends = async () => {
//       try {
//         const response = await getDataUserFollowing(userLogin._id)
//         console.log(response)
//         setFriends(response.data.usersFollowing)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     fetchFriends()
//   }, [userLogin._id])

// console.log(friends)
//  const renderFriend = friends.map((user) => {
//    const userFollow = user.userFollow;
//    return (
//      <div key={userFollow._id}>
//        <Friend user={userFollow} />
//      </div>
//    );
//  });

//   return (
//     <div className="flex flex-col gap-2 px-3 h-[80vh]">
//       <h1 className="font-bold">Friends</h1>
//       <div>
//         {renderFriend}
//       </div>
//     </div>
//   );
// };

// export default FriendList;

const FriendList = ({ friends, onSelectFriend }) => {

  const renderFriendsList = friends.map((user) => (
    <Friend key={user._id} user={user} onSelect={() => onSelectFriend(user)} />
  ));

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-black text-[18px]">Friends List</h1>
      {friends.length ? (
        renderFriendsList
      ) : (
        <div className="ring-1 ">You must follow a user to chat</div>
      )}
    </div>
  );
};

export default FriendList;
