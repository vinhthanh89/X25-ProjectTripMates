
import { Button, Input } from "antd";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { IoPaperPlane } from "react-icons/io5";
import { useSelector } from "react-redux";

import { addDocument } from "../../../../firebase/firebaseServices.js";

const MessageInput = ({ onSendMessage , selectedFriend , roomChatId }) => {
  const userLogin = useSelector(state => state.user.user)
  const [textMessage, setTextMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleEmoji = (e) => {
    setTextMessage((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleSend = () => {
   try {
      addDocument('chats' , {
        userId : userLogin._id,
        roomChatId : roomChatId,
        userFullName: userLogin.fullName,
        userAvatar : userLogin.avatar,
        chatText: textMessage
      })
   } catch (error) {
    console.log(error);
   }
   setTextMessage('')
  }

  return (
    <div className="flex gap-3 px-2 pt-[10px]">
      <Input
        placeholder="Type a message..."
        allowClear
        style={{
          background: "none",
          padding: "0.6rem",
          fontWeight: "700",
          fontFamily: "inherit",
        }}
        onChange={(e) => setTextMessage(e.target.value)}
        value={textMessage}
        onPressEnter={handleSend}
      />
      <div className="emoji flex items-center relative">
        <BsEmojiSmile size={20} onClick={() => setOpen((prev) => !prev)} />
        <div className="emojiPicker absolute bottom-[3rem] right-0 z-50">
          <EmojiPicker
            open={open}
            onEmojiClick={handleEmoji}
            width={500}
            height={400}
          />
        </div>
      </div>
      <Button
        disabled={textMessage.trim() === ""}
        className="flex justify-center items-center font-bold bg-[#5143d9] text-white w-[3rem] h-[3rem] rounded-xl"
        onClick={handleSend}
      >
        <IoPaperPlane size={20} />
      </Button>
    </div>
  );
};

export default MessageInput;
