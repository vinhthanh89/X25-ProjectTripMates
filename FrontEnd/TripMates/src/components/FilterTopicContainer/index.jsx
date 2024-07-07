import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { filterTopicByContinent } from "../../services/topic";
import Topic from "../NewsFeed/Topic";

const FilterTopicContainer = () => {
  const [searchParams] = useSearchParams();
  const [fitlerTopics, setFilterTopics] = useState(null);
  const queryContinent = searchParams.get("continent");

  useEffect(() => {
    const filterTopic = async () => {
      try {
        const response = await filterTopicByContinent(queryContinent);
        setFilterTopics(response.data.topics);
      } catch (error) {
        console.log(error);
      }
    };
    filterTopic();
  }, [queryContinent]);

  const renderTopicData =
    fitlerTopics?.length > 0 ? (
      fitlerTopics.map((topic) => (
        <div key={topic._id}>
          <Topic topic={topic} />
        </div>
      ))
    ) : (
      <p>Loading ...</p>
    );

  return (
    <div className="pt-[1rem] pb-[2rem]">
      {fitlerTopics?.length > 0 ? (
        <>
          <h1 className="text-[24px] font-semibold mb-[15px]">Filter Topic By : {queryContinent}</h1>
          <div className="grid grid-cols-2 gap-[1rem] ">
            <>{renderTopicData}</>
          </div>
        </>
      ) : (
        <p className="text-[24px] font-semibold mb-[15px]">Not Found Topic</p>
      )}
    </div>
  );
};

export default FilterTopicContainer;
