/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import { addComment } from "../../../services/comment";
import { addNotification } from "../../../services/notification";
import EmojiPicker from "emoji-picker-react";
import { BsEmojiSmile } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const CommentTextArea = ({ topic, addUserComment }) => {
  const userLogin = useSelector((state) => state.user.user);
  const [commentText, setCommentText] = useState("");
  const [openEmoji, setOpenEmoji] = useState(false);

  const handleAddComment = async () => {
    if (commentText.trim() === "") {
      return;
    }
    try {
      await addNotification(topic._id, { interaction: "comment" });
      const response = await addComment(topic._id, { comment: commentText });
      console.log(response);
      addUserComment(response.data.usersComment);
      setCommentText("");
    } catch (error) {
      console.log(error);
    }
  };


    const handleEmoji = (e) => {
      setCommentText((prev) => prev + e.emoji);
      setOpenEmoji(false);
    };
  return (
    <div className="flex flex-col gap-3 w-full border-2 rounded-[8px] p-4">
      <div
        className="flex items-center gap-2" 
      >
        <img
          className="w-[35px] h-[35px] rounded-full object-cover"
          src={userLogin.avatar}
          alt="User Avatar"
        />
        <p className="font-bold text-base">{userLogin.fullName}</p>
      </div>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add a comment here ..."
        type="text"
        className="resize-none w-full max-h-[200px] overflow-y-auto text-[16px] outline-none min-h-[100px] bg-transparent"
      />
      <hr />
      <div className="flex items-center justify-between">
        <BsEmojiSmile
          size={20}
          onClick={() => setOpenEmoji((prev) => !prev)}
          className="hover:scale-105 cursor-pointer"
        />
        <div className="emojiPicker absolute top-[18.7rem] right-[3.7rem] z-50">
          <EmojiPicker
            open={openEmoji}
            onEmojiClick={handleEmoji}
            width={420}
            height={300}
          />
        </div>
        <button
          onClick={handleAddComment}
          className={`bg-[#5143d9] text-white font-bold  text-[16px] rounded-xl py-1 px-2 ${
            commentText.trim() === "" ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={commentText.trim() === ""}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CommentTextArea;
