/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getTopicByUserCreated } from "../../../services/topic";
import Post from "../../NewsFeed/Post";

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
        <div key={topic._id}>
          <Post topic={topic} />
        </div>
      );
    })
  ) : (
    <p>Data Loading ...</p>
  );

  return <div>{renderTopicData}</div>;
};

export default UserCreatedTopic;
