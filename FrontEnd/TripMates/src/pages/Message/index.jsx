import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Content from "../../components/Message/Content";
import LeftSideBar from "../../components/Message/SideLeft";
import useSocketIO from "../../hooks/useSocketIO";
import { getDataUserFollowing } from "../../services/userFollowing";

const Message = () => {
  const userLogin = useSelector((state) => state.user.user);
  const socket = useSocketIO(userLogin._id);
  
  console.log(socket)
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messages, setMessages] = useState([]);

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

  // useEffect(() => {
  //   if (socket) {
  //     socket.on("receive_message", (message) => {
  //       setMessages((prevMessages) => [...prevMessages, message]);
  //     });
  //   }
  // }, [socket]);

  const handleSelectFriend = (friend) => {
    setSelectedFriend(friend);
    if (socket) {
      const roomId = [userLogin._id, friend._id].sort().join("");
      socket.emit("join_room", roomId);
    }
  };

  const handleSendMessage = (text) => {
    if (socket && selectedFriend) {
      const messageData = {
        senderId: userLogin._id,
        receiverId: selectedFriend._id,
        content: text,
        roomId: [userLogin._id, selectedFriend._id].sort().join(""),
      };
      console.log(messageData)
      socket.emit("send_message", messageData);
      setMessages((prevMessages) => [...prevMessages, messageData]);
      console.log(messages)
    }
  };

  return (
    <div className="grid grid-cols-7 bg-white h-[90vh] rounded-lg">
      <div className="col-span-2 h-full py-2">
        <LeftSideBar friends={friends} onSelectFriend={handleSelectFriend} />
      </div>
      <div className="col-span-5 h-full py-2">
        <Content
          selectedFriend={selectedFriend}
          messages={messages}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default Message;


