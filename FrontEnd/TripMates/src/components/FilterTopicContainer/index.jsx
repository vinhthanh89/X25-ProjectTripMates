import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  filterTopicByContinent,
  filterTopicByTitle,
} from "../../services/topic";
import Topic from "../NewsFeed/Topic";

const FilterTopicContainer = () => {
  const [searchParams] = useSearchParams();
  const [fitlerTopics, setFilterTopics] = useState([]);
  const [loading, setLoading] = useState(false);
  const queryContinent = searchParams.get("continent");
  const queryTitle = searchParams.get("keyword");

  useEffect(() => {
    const filterTopic = async () => {
      try {
        setLoading(true);
        if (queryContinent) {
          const response = await filterTopicByContinent(queryContinent);
          setFilterTopics(response.data.topics);
        }

        if (queryTitle) {
          const response = await filterTopicByTitle(queryTitle);
          setFilterTopics(response.data.topics);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    filterTopic();
  }, [queryContinent, queryTitle]);

  const renderTopicData = fitlerTopics.map((topic) => (
    <div key={topic._id}>
      <Topic topic={topic} />
    </div>
  ));

  return (
    <div className="pt-[1rem] pb-[2rem]">
      {loading ? (
        <>Loading ...</>
      ) : renderTopicData.length > 0 ? (
        <>
          <h1 className="flex gap-2 text-2xl font-semibold mb-[15px]">
            Topic filterd by:{" "}
            <p className="text-[#5143d9]">{queryContinent || queryTitle}</p>
          </h1>
          <div className="grid grid-cols-2 gap-[1rem] ">
            <>{renderTopicData}</>
          </div>
        </>
      ) : (
        <p className="text-[24px] font-semibold mb-[15px]">Topic Not Found</p>
      )}
    </div>
  );
};

export default FilterTopicContainer;
