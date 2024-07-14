/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getTopicByUserCreated } from "../../../services/topic";

import UserTopic from "../UserTopics";
import TopicForm from "../../NewsFeed/TopicForm";

const UserCreatedTopic = ({ userId }) => {
  const [userCreatedTopic, setUserCreatedTopic] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTopicByUserCreated(userId);
        const renderData = response.data.topics;
        setUserCreatedTopic(renderData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userId , userCreatedTopic]);

  //! Handle open form
  // Handle Modal
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const renderTopicData =
    userCreatedTopic === null ? (
      <p>Loading...</p>
    ) : userCreatedTopic.length === 0 ? (
      <div className="flex flex-col gap-2 justify-center items-center w-full h-[400px]">
        <p className="text-2xl">You have no topics</p>
        <p className="text-[#a0a0a0]">Create one here</p>
        <button
          className="font-bold bg-[#5143d9] text-white p-3 rounded-xl"
          onClick={showDrawer}
        >
          Create your trip
        </button>
        {open && <TopicForm onClose={onClose} open={open} />}
      </div>
    ) : (
      userCreatedTopic.map((topic) => (
        <div className="py-2" key={topic._id}>
          <UserTopic topic={topic} />
        </div>
      ))
    );
    const totalTopics = userCreatedTopic ? userCreatedTopic.length : 0;

  return (
    <div>
      <h1 className="text-lg">Total: {totalTopics}</h1>
      <div className="flex flex-col">{renderTopicData}</div>
    </div>
  );
};

export default UserCreatedTopic;
