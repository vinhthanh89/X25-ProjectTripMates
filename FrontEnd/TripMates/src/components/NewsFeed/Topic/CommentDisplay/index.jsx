import { Button, Input, Modal, Space } from "antd";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const CommentDisplay = ({ addComment }) => {
  const fakeUser = {
    fullname: <p>User</p>,
    avatar: (
      <img
        src="./public/profile-user.png"
        className="w-[2rem] h-[2rem] object-cover rounded-full border"
        alt="User Avatar"
      />
    ),
  };

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editedComment, setEditedComment] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddComment = () => {
    if (commentText.trim() !== "") {
      const newComment = {
        user: fakeUser,
        text: commentText,
      };
      setComments([newComment, ...comments]);
      setCommentText("");
      addComment(1); 
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedComment(comments[index].text);
    setEditModalVisible(true);
  };

  const handleSaveEdit = () => {
    const updatedComments = [...comments];
    updatedComments[editingIndex] = {
      ...updatedComments[editingIndex],
      text: editedComment,
    };
    setComments(updatedComments);
    setEditModalVisible(false);
  };

  const handleDelete = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
    addComment(-1); 
  };

  return (
    <ul className="flex flex-col gap-5 px-2 py-4">
      <div className="user flex items-center gap-3">
        <Space.Compact
          style={{
            width: "100%",
            height: "3rem",
          }}
        >
          <Input
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment..."
            onPressEnter={handleAddComment}
            prefix={fakeUser.avatar}
          />
          <Button
            className="font-bold bg-[#5143d9] text-white rounded-xl h-full"
            onClick={handleAddComment}
          >
            Send
          </Button>
        </Space.Compact>
      </div>
      {comments
        .slice(0)
        .reverse()
        .map((comment, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="user flex items-center justify-between font-semibold pb-2">
              <div className="flex items-center gap-2 cursor-pointer">
                {comment.user.avatar}
                {comment.user.fullname}
              </div>
              <div className="flex gap-2 pr-2">
                <button onClick={() => handleEdit(index)}>
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(index)}>
                  <FaTrash />
                </button>
              </div>
            </div>
            <div className="comment-block border-b-2 pb-2">{comment.text}</div>
          </div>
        ))}

      {/* Edit Modal */}
      <Modal
        title="Edit Comment"
        open={editModalVisible}
        onOk={handleSaveEdit}
        onCancel={() => setEditModalVisible(false)}
      >
        <Input.TextArea
          value={editedComment}
          onChange={(e) => setEditedComment(e.target.value)}
          rows={4}
        />
      </Modal>
    </ul>
  );
};

export default CommentDisplay;
