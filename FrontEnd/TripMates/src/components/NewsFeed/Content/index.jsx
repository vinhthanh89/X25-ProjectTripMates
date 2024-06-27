import { useEffect, useState } from "react";
import Continents from "../Continents";
import { fetchDataTopics, fetchTopicData } from "../../../services/topic";
import Topic from "../Topic";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { MdStars } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";


const Content = () => {
  const iconSize = 20;

  const [topicData, setTopicData] = useState(null);
  const [feedType, setFeedType] = useState("Recents");

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
  }, []);

  const handleFeedTypeChange = (type) => {
    setFeedType(type);
  };

  const renderTopicData = topicData ? (
    topicData.map((topic) => (
      <div key={topic._id}>
        <Topic topic={topic} />
      </div>
    ))
  ) : (
    <p>Loading ...</p>
  );

  return (
    <div className="flex flex-col gap-2 h-full overflow-y-scroll text-[#303030] pb-[20px]">
      <div className="flex items-center justify-between z-2 py-[1rem] border-b-2">
        <h1 className="text-2xl font-semibold">{feedType} Feeds</h1>
        <div className="flex gap-6">
          <button
            className={`flex items-center gap-2 font-bold p-2 rounded-lg transition duration-300 ease-in-out ${
              feedType === "Recents"
                ? "bg-[#303030] text-white"
                : "hover:bg-[#303030] hover:text-white"
            }`}
            onClick={() => handleFeedTypeChange("Recents")}
          >
            <PiClockCounterClockwiseBold size={iconSize} />
            <p>Recents</p>
          </button>
          <button
            className={`flex items-center gap-2 font-bold p-2 rounded-lg transition duration-300 ease-in-out ${
              feedType === "Friends"
                ? "bg-[#303030] text-white"
                : "hover:bg-[#303030] hover:text-white"
            }`}
            onClick={() => handleFeedTypeChange("Friends")}
          >
            <FaUsers size={iconSize} />
            <p>Friends</p>
          </button>
          {/* <Continents /> */}
        </div>
      </div>
      <div
        className="grid grid-cols-2 gap-[1rem] py-[1rem]"
        // style={{ "-ms-overflow-style": "none" }}
      >
        {renderTopicData}
      </div>
    </div>
  );
};

export default Content;
