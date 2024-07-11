/* eslint-disable react/prop-types */
import { Dropdown } from "antd";
import { BsThreeDots } from "react-icons/bs";
import DeleteComment from "../DeleteComment";

const CommentThreeDotsDropDown = ({ userComment, topicId , handleSetUsersComment , handSetIsEdit }) => {
  const items = [
    {
      label: <span onClick={handSetIsEdit}>Edit Comment</span>,
      key: "0",
    },
    {
      label: <DeleteComment userComment={userComment} topicId={topicId} handleSetUsersComment={handleSetUsersComment} />,
      key: "1",
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
        style: { backgroundColor: "#E5E4E2", zIndex: 10 },
      }}
      trigger={["click"]}
    >
      <div className="w-[25px] h-[25px] flex items-center justify-center bg-[#dfdfdf] bg-opacity-60 rounded-full">
        <BsThreeDots />
      </div>
    </Dropdown>
  );
};

export default CommentThreeDotsDropDown;
