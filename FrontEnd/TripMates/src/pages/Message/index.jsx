import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Content from "../../components/Message/Content";
import LeftSideBar from "../../components/Message/SideLeft";
import { checkRoomChatId } from "../../firebase/firebaseServices";
import { getDataUserFollowing } from "../../services/userFollowing";

const Message = () => {
  const userLogin = useSelector((state) => state.user.user);

  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [roomChatId, setRoomChatId] = useState(null);

  //! Fetch friends
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await getDataUserFollowing(userLogin._id);
        console.log("Friends data:", response.data);
        setFriends(response.data.usersFollowing);
      } catch (error) {
        console.error("Error fetching friends:", error);
      }
    };
    fetchFriends();
  }, [userLogin._id]);

  const handleSelectFriend = async (friend) => {
    setSelectedFriend(friend);
    const roomChatId = await checkRoomChatId(userLogin, friend);
    console.log(roomChatId);
    setRoomChatId(roomChatId);
  };

  return (
    <div className="grid grid-cols-9 bg-white rounded-lg">
      <div className="col-span-2 h-full py-2">
        <LeftSideBar friends={friends} onSelectFriend={handleSelectFriend} />
      </div>
      <div className="col-span-7 h-mes-container py-2">
        <Content roomChatId={roomChatId} selectedFriend={selectedFriend} />
      </div>
    </div>
  );
};

export default Message;
