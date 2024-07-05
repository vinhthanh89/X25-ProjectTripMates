// import { IoPaperPlane } from "react-icons/io5";
// import { BsEmojiSmile } from "react-icons/bs";
// import { Input } from "antd";
// import { useState } from 'react';
// import  EmojiPicker  from 'emoji-picker-react';
// const MessageInput = () => {
//   const inputStyle = { background: "none", padding: "0.6rem", fontWeight: "700", fontFamily: "inherit" }
//   const iconSize = 20
//   //! Handle Input
//   const [text, setText] = useState("")
//   //! Handle Emoji
//   const [open, setOpen] = useState(false)
//   const handleEmoji = e => {
//     console.log(e)
//     setText((prev) => prev + e.emoji)
//     setOpen(false)
//   }
//   //! Handle Send button
//   const handleSend = () => {
//     console.log("Message sent:", text);
//     setText(""); // Clear the input
//   };
//   return (
//     <div className="flex gap-3 px-2">
//       <Input
//         placeholder="Type a message..."
//         allowClear
//         style={inputStyle}
//         onChange={(e) => setText(e.target.value)}
//         value={text}
//       />
//       <div className="emoji flex items-center relative">
//         <BsEmojiSmile size={iconSize} onClick={() => setOpen((prev) => !prev)} />
//         <div className="emojiPicker absolute bottom-[3rem] right-0 z-50">
//           <EmojiPicker open={open} onEmojiClick={handleEmoji}  width={500} height={400}/>
//         </div>
//       </div>
//       <button className="flex justify-center items-center font-bold bg-[#5143d9] text-white w-[3rem] rounded-xl" onClick={handleSend}>
//         <IoPaperPlane size={iconSize}/>
//       </button>
//     </div>
//   );
// };

// export default MessageInput;

import { useState } from "react";
import { IoPaperPlane } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { Input } from "antd";
import EmojiPicker from "emoji-picker-react";

const MessageInput = ({ onSendMessage }) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleSend = () => {
    if (text.trim()) {
      onSendMessage(text);
      setText("");
    }
  };

  return (
    <div className="flex gap-3 px-2">
      <Input
        placeholder="Type a message..."
        allowClear
        style={{
          background: "none",
          padding: "0.6rem",
          fontWeight: "700",
          fontFamily: "inherit",
        }}
        onChange={(e) => setText(e.target.value)}
        value={text}
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
      <button
        className="flex justify-center items-center font-bold bg-[#5143d9] text-white w-[3rem] rounded-xl"
        onClick={handleSend}
      >
        <IoPaperPlane size={20} />
      </button>
    </div>
  );
};

export default MessageInput;
