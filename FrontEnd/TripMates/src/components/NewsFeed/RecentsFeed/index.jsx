import { useEffect, useState } from "react";
import { fetchDataTopics } from "../../../services/topic";
import Topic from "../Topic";

const RecentsFeed = () => {

  const [topicData, setTopicData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDataTopics();
        setTopicData(response.data.topics);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [topicData]);

  const renderTopicData = topicData ? (
    topicData.map((topic) => (
      <div key={topic._id}>
        <Topic topic={topic} />
      </div>
    ))
  ) : (
    <p>Loading ...</p>
  );

  return <>{renderTopicData}</>;
};

export default RecentsFeed;
