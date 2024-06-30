/* eslint-disable react/prop-types */
import { Tag } from "antd";

const RenderPickUserTag = ({ pickedUser, removePickUser }) => {

  const renderPickedUserTag = pickedUser.map((user) => {
    return (
      <div key={user._id}>
        <Tag className="py-[5px]" closeIcon onClose={() => removePickUser(user.email)}>
          <span className="text-[13px]">{user.email}</span>
        </Tag>
      </div>
    );
  });

  return <>{renderPickedUserTag}</>;
};

export default RenderPickUserTag;
