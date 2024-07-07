import { useEffect, useState } from "react";
import Topic from "../Topic";
import { fetchTopicsByUserFollow } from "../../../services/topic";

const FriendsFeeds = () => {
  const [topicData, setTopicData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTopicsByUserFollow();
        setTopicData(response.data.topics);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const renderTopicData = topicData ? (
    topicData.length > 0 ? (
      topicData.map((topic) => (
        <div key={topic._id}>
          <Topic topic={topic} />
        </div>
      ))
    ) : (
      <p>You are not following anyone</p>
    )
  ) : (
    <p>Loading ...</p>
  );

  return <>{renderTopicData}</>;
};

export default FriendsFeeds;

