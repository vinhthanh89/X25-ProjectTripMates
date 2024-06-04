/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getTopicByUserCreated } from "../../../services/topic";
import Topic from "../Topic";
const UserCreatedTopic = ({ userId }) => {
  const [userCreatedTopic, setUserCreatedTopic] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTopicByUserCreated(userId);
        setUserCreatedTopic(response.data.findTopicByUserId);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userId]);

  const renderTopicData = userCreatedTopic ? (
    userCreatedTopic.map((topic) => {
      return (
        <div key={topic._id} >
          <Topic topic={topic} />
        </div>
      );
    })
  ) : (
    <p>Data Loading ...</p>
  );

  return <div className="flex flex-col gap-4">{renderTopicData}</div>;
};

export default UserCreatedTopic;
