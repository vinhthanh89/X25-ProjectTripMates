import { ConfigProvider, Dropdown, Empty } from "antd";
import { useEffect, useState } from "react";
import { FaBell, FaBellSlash } from "react-icons/fa";
import { getNotification } from "../../../services/notification";
import NotificationDisplay from "../NotificationDisplay";

const NotificationContainer = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const response = await getNotification();
        console.log(response);
        setNotifications(response.data.notifications);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotification();
  }, [notifications]);

  const handleSetNotify = (notifications) => {
    setNotifications(notifications);
  };

  const notificationsMenu = notifications.map((notify) => {
    const { _id } = notify;
    return {
      key: _id,
      label: (
        <NotificationDisplay
          notify={notify}
          handleSetNotify={handleSetNotify}
        />
      ),
    };
  });

  const emptyNotification = [
    {
      key: "emtpy",
      label: (
        <ConfigProvider
          theme={{
            token: {
              colorTextDescription: "#AB274F",
              fontSize: 18,
              opacityImage : 0.7
            },
          }}
        >
          <Empty
            description="No Notification" 
            image={<FaBellSlash />}
            imageStyle={{ fontSize: "40px", color: "#545454" }}
          />
        </ConfigProvider>
      ),
    },
  ];

  const unreadNotificatons = notifications.filter(
    (notify) => notify.isRead === false
  );

  const iconSize = 20;
  const iconStyle = { background: "transparent" };

  return (
    <Dropdown
      menu={{
        items:
          notifications.length > 0
            ? notificationsMenu.reverse()
            : emptyNotification,
        style: {
          minWidth : '300px',
          maxHeight: "420px",
          overflowY: "auto",
        },
      }}
      trigger={["click"]}
      placement="bottomRight"
    >
      <div className="relative">
        <button className="btn_all hover:scale-105 text-[#545454]">
          <FaBell size={iconSize} style={iconStyle} />
        </button>
        {unreadNotificatons.length > 0 && (
          <div className="absolute top-0 -right-1 w-[20px] h-[20px] flex items-center justify-center bg-[#f63c3c] text-[white] rounded-full">
            {unreadNotificatons.length}
          </div>
        )}
      </div>
    </Dropdown>
  );
};

export default NotificationContainer;
