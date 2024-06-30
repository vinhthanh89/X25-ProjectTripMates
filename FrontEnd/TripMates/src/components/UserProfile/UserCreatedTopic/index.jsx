/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getTopicByUserCreated } from "../../../services/topic";

import UserTopic from "../UserTopics";

const UserCreatedTopic = ({ userId }) => {
  const [userCreatedTopic, setUserCreatedTopic] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTopicByUserCreated(userId);
        const renderData = response.data.topics
        setUserCreatedTopic(renderData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userId , userCreatedTopic]);

  const renderTopicData = userCreatedTopic ? (
    userCreatedTopic.map((topic) => {
      return (
        <div key={topic._id} >
          <UserTopic topic={topic} />
        </div>
      );
    })
  ) : (
    <p>Data Loading ...</p>
  );

  return <div className="flex flex-col gap-4">{renderTopicData}</div>;
};

export default UserCreatedTopic;
