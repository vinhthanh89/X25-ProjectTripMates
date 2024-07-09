/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { IoIosHeart } from "react-icons/io";
import { useSelector } from "react-redux";
import { addNotification } from "../../../../services/notification";
import {
  getReactByTopicId,
  reactTopic,
  removeReact,
} from "../../../../services/react";
import AvatarFollower from "../../../UserProfile/AvatarFollower";

const TopicReact = ({ topic }) => {
  const iconSize = 25;
  const iconStyle = {
    background: "transparent",
  };
  const userLogin = useSelector((state) => state.user.user);

  const [topicReaction, setTopicReaction] = useState([]);
  const [isReact, setIsReact] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchReact = async () => {
      try {
        const response = await getReactByTopicId(topic._id);
        const reactions = response.data.reactions;
        setTopicReaction(reactions);
        setIsReact(response.data.isReact);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReact();
  }, [topic._id, userLogin]);

  const handleReactTopic = async () => {
    try {
      const [response] = await Promise.all([
        reactTopic(topic._id),
        addNotification(topic._id, { interaction: "react" }),
      ]);
      setIsReact(true);
      const newTopicReactions = response.data.reactions;
      setTopicReaction(newTopicReactions);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveReactTopic = async () => {
    try {
      const response = await removeReact(topic._id);
      const newTopicReactions = response.data.reactions;
      setTopicReaction(newTopicReactions);
      setIsReact(false);
    } catch (error) {
      console.log(error);
    }
  };

  const renderPeopleReactTopic = topicReaction.map((user) => {
    const { userId, _id } = user;
    return (
      <div key={_id}>
        <AvatarFollower user={userId} />
      </div>
    );
  });

  return (
    <div className="flex items-center gap-2">
      {isReact ? (
        <button onClick={handleRemoveReactTopic}>
          <IoIosHeart
            size={iconSize}
            style={iconStyle}
            className="text-[red]"
          />
        </button>
      ) : (
        <button onClick={handleReactTopic}>
          <IoIosHeart size={iconSize} style={iconStyle} />
        </button>
      )}
      <p onClick={showModal} className="w-2 cursor-pointer hover:underline">
        {topicReaction.length}
      </p>
      <Modal
        title="People Like Topic"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        style={{
          top: 20,
        }}
      >
        <div className="min-h-[300px] grid grid-cols-4">
          {renderPeopleReactTopic}
        </div>
      </Modal>
    </div>
  );
};

export default TopicReact;
