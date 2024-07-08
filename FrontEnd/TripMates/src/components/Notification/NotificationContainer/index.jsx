import { Dropdown } from "antd";
import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { getNotification } from "../../../services/notification";
import NotificationDisplay from "../NotificationDisplay";

const NotificationContainer = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const response = await getNotification();
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
    const key = notify._id;
    return {
      key: key,
      label: (
        <>
          <NotificationDisplay notify={notify} handleSetNotify={handleSetNotify} />
        </>
      ),
    };
  });

  const unreadNotificatons = notifications.filter(
    (notify) => notify.isRead === false
  );

  const iconSize = 20;
  const iconStyle = { background: "transparent" };
  return (
    <Dropdown
      menu={{
        items: notificationsMenu.reverse(),
      }}
      trigger={["click"]}
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
