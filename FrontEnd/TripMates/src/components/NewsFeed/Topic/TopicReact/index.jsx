/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IoIosHeart } from "react-icons/io";
import {
  getReactByTopicId,
  reactTopic,
  removeReact,
} from "../../../../services/react";
import { Modal } from "antd";
import { useNavigate } from "react-router";
import AvatarFollower from "../../../UserProfile/AvatarFollower";
import { addNotification } from "../../../../services/notification";

const TopicReact = ({ topic }) => {
  const iconSize = 25;
  const iconStyle = {
    background: "transparent",
  };
  const userLogin = useSelector((state) => state.user.user);
  const navigate = useNavigate();

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
        const userExists = reactions.some(
          (reaction) => reaction.userId._id === userLogin._id
        );

        setIsReact(userExists ? true : false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReact();
  }, [topic._id, userLogin]);

  const handleReactTopic = async () => {
    try {
      await addNotification(topic._id, { interaction: "react" });
      const response = await reactTopic(topic._id);
      const newTopicReactions = response.data.reactions;
      setTopicReaction(newTopicReactions);
      setIsReact(true);
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
    // return (
    //   <div className="w-full h-[60px] flex gap-[10px] items-center" key={_id}>
    //       <div className="w-[40px] h-[40px]">
    //         <img
    //         className="w-full h-full rounded-full object-cover"
    //          src={userId.avatar} alt="" />
    //       </div>
    //       <p
    //         onClick={() => navigate(`/user/${userId._id}`)}
    //        className="text-[16px] font-bold cursor-pointer hover:opacity-60">{userId.fullName}</p>
    //   </div>
    // )
  });

  return (
    <div className="flex items-center gap-1">
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
          <IoIosHeart size={iconSize} style={iconStyle} className="" />
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
