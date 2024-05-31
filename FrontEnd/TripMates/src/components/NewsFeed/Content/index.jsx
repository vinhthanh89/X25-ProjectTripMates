import { useEffect, useState } from "react";
import Continents from "../Continents";
import Post from "../Post";
import { fetchTopicData } from "../../../services/topic";

const Content = () => {
  const [topicData , setTopicData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTopicData()
        console.log(response.data.dataTopic);
        setTopicData(response.data.dataTopic)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

  const renderTopicData = topicData.map((topic) => {
    return (
      <div key={topic._id}>
        <Post topic={topic} />
      </div>
    )
  })

  return (
    <div className="flex flex-col gap-5 pt-[2rem] h-full overflow-y-scroll">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-black">Recent posts</h1>
        <div className="flex gap-6 text-black">
          <button className="font-bold p-2 rounded-lg focus:bg-black focus:text-white hover:bg-black hover:text-white transition duration-300 ease-in-out">
            Recents
          </button>
          <button className="font-bold p-2 rounded-lg focus:bg-black focus:text-white hover:bg-black hover:text-white transition duration-300 ease-in-out">
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
