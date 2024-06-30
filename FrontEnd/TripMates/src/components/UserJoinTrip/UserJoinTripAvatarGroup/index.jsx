import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";

const UserJoinTripAvatarGroup = () => {
  return (
    <div>
      <Avatar.Group
        maxCount={5}
        maxStyle={{color: '#f56a00', backgroundColor: '#fde3cf'}}
      >
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />

        <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>

        <Avatar
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />

        <Avatar
          style={{ backgroundColor: "#1677ff" }}
          icon={<AntDesignOutlined />}
        />
      </Avatar.Group>
    </div>
  );
};

export default UserJoinTripAvatarGroup;
