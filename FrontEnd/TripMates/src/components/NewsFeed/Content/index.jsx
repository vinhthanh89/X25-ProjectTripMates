import { useEffect, useState } from "react";
import Continents from "../Continents";
import { fetchTopicData } from "../../../services/topic";
import Topic from "../Topic";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { MdStars } from "react-icons/md";

const Content = () => {
  const iconSize = 20;

  const [topicData, setTopicData] = useState(null);
  const [feedType, setFeedType] = useState("Recents");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTopicData();
        const topics = response.data.dataTopic
        const dataRender = topics.reverse()
        setTopicData(dataRender);
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
    <div className="flex flex-col gap-2 h-full overflow-y-scroll text-[#303030]">
      <div className="flex items-center justify-between sticky top-0 bg-white z-10 py-[1rem] w-full">
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
              feedType === "Popular"
                ? "bg-[#303030] text-white"
                : "hover:bg-[#303030] hover:text-white"
            }`}
            onClick={() => handleFeedTypeChange("Popular")}
          >
            <MdStars size={iconSize} />
            <p>Popular</p>
          </button>
          <Continents />
        </div>
      </div>
      <div
        className="grid grid-cols-3 gap-[1rem] px-[2rem] "
        style={{ "-ms-overflow-style": "none" }}
      >
        {renderTopicData}
      </div>
    </div>
  );
};

export default Content;
