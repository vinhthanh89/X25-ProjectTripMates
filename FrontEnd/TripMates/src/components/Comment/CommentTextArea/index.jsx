/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import { addComment } from "../../../services/comment";
import { addNotification } from "../../../services/notification";

// eslint-disable-next-line react/prop-types
const CommentTextArea = ({ topic, addUserComment }) => {
  const userLogin = useSelector((state) => state.user.user);
  const [commentText, setCommentText] = useState("");

  const handleAddComment = async () => {
    try {
      await addNotification(topic._id, { interaction: "comment" });

      const response = await addComment(topic._id, { comment: commentText });
      addUserComment(response.data.usersComment);
      setCommentText("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <div className="w-[40px]">
        <img
          className="w-[30px] h-[30px] rounded-full object-cover"
          src={userLogin.avatar}
        />
      </div>
      <div className="w-full border-solid border-[1px] border-[lightgray] rounded-[8px] pt-[5px] px-[5px]">
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment here ..."
          type="text"
          className="resize-none w-full max-h-[200px] overflow-y-auto text-[16px] outline-none min-h-[100px]"
        />
        <hr />
        <button
          onClick={handleAddComment}
          className="bg-[#5143d9] text-white font-bold px-[8px] text-[16px] rounded-xl py-[5px] float-right my-[5px]"
        >
          Send
        </button>
      </div>
    </div>

    // <ul className="flex flex-col gap-5 px-2 py-4">
    //   <div className="user flex items-center gap-3">
    //     <Space.Compact
    //       style={{
    //         width: "100%",
    //         height: "3rem",
    //       }}
    //     >
    //       <Input
    //         autoSize={{ minRows: 3, maxRows: 5 }}
    //         value={commentText}
    //         onChange={(e) => setCommentText(e.target.value)}
    //         placeholder="Add a comment..."
    //         onPressEnter={handleAddComment}
    //         prefix={fakeUser.avatar}
    //       />
    //       <Button
    //         className="font-bold bg-[#5143d9] text-white rounded-xl h-full"
    //         onClick={handleAddComment}
    //       >
    //         Send
    //       </Button>
    //     </Space.Compact>
    //   </div>
    //   {comments
    //     .slice(0)
    //     .reverse()
    //     .map((comment, index) => (
    //       <div key={index} className="flex flex-col gap-2">
    //         <div className="user flex items-center justify-between font-semibold pb-2">
    //           <div className="flex items-center gap-2 cursor-pointer">
    //             {comment.user.avatar}
    //             {comment.user.fullname}
    //           </div>
    //           <div className="flex gap-2 pr-2">
    //             <button onClick={() => handleEdit(index)}>
    //               <FaEdit />
    //             </button>
    //             <button onClick={() => handleDelete(index)}>
    //               <FaTrash />
    //             </button>
    //           </div>
    //         </div>
    //         <div className="comment-block border-b-2 pb-2">{comment.text}</div>
    //       </div>
    //     ))}

    //   {/* Edit Modal */}
    //   <Modal
    //     title="Edit Comment"
    //     open={editModalVisible}
    //     onOk={handleSaveEdit}
    //     onCancel={() => setEditModalVisible(false)}
    //   >
    //     <Input.TextArea
    //       value={editedComment}
    //       onChange={(e) => setEditedComment(e.target.value)}
    //       rows={4}
    //     />
    //   </Modal>
    // </ul>
  );
};

export default CommentTextArea;
