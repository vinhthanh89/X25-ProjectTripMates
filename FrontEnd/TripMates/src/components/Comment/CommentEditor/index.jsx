/* eslint-disable react/prop-types */
import { Button } from "antd";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { editComment } from "../../../services/comment";

const CommentEditor = ({
  userComment,
  topicId,
  handleSetUsersComment,
  handSetIsEdit,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [commentText, setCommentText] = useState(userComment.comment);
  const [openEmoji, setOpenEmoji] = useState(false);



  const handleEmoji = (e) => {
    setCommentText((prev) => prev + e.emoji);
    setOpenEmoji(false);
  };

  const handleCancelEdit = () => {
    handSetIsEdit();
    setCommentText(userComment.comment);
  };

  const handleEditComment = async () => {
    try {
        setIsLoading(true)
      const response = await editComment(topicId, {
        editedComment: commentText,
        commentId: userComment._id,
      });
      handleSetUsersComment(response.data.usersComment)
      handSetIsEdit();
    } catch (error) {
      console.log(error);
    } finally {
        setIsLoading(false)
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3 w-full border-2 rounded-[8px] p-4">
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
          <div>
            <Button
              onClick={handleCancelEdit}
              className="font-bold  text-[14px] border-none py-1 px-2 outline-none mr-[7px]"
            >
              Cancel
            </Button>
            <Button
              onClick={handleEditComment}
              loading={isLoading}
              className={`bg-[#5143d9] text-white font-bold  text-[16px] rounded-xl py-1 px-2 ${
                commentText.trim() === "" ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={commentText.trim() === ""}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentEditor;
