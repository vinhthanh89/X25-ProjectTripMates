import { useEffect, useState } from "react";
import Continents from "../Continents";
import { fetchTopicData } from "../../../services/topic";
import Topic from "../Topic";

const Content = () => {
  const [topicData , setTopicData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTopicData()
        setTopicData(response.data.dataTopic)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

  const renderTopicData = topicData ? topicData.map((topic) => {
    return (
      <div key={topic._id}>
        <Topic topic={topic} />
      </div>
    )
  }) : <p>Data Loading ...</p>

  return (
    <div className="flex flex-col gap-2 pt-[1rem] px-[2rem] h-full overflow-y-scroll text-[#303030]">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Recent posts</h1>
        <div className="flex gap-6">
          <button className="font-bold p-2 rounded-lg focus:bg-[#303030] focus:text-white hover:bg-[#303030] hover:text-white transition duration-300 ease-in-out">
            Recents
          </button>
          <button className="font-bold p-2 rounded-lg focus:bg-[#303030] focus:text-white hover:bg-[#303030] hover:text-white transition duration-300 ease-in-out">
            Popular
          </button>
          <Continents />
        </div>
      </div>
      <div
        className="grid grid-cols-2 gap-[10px]"
        style={{ "-ms-overflow-style": "none" }}
      >
        {renderTopicData}
        {/* {[0, 1, 2, 3, 4, 5].map((index) => (
          <Post key={index} />
        ))} */}
      </div>
    </div>
  );
};

export default Content;
