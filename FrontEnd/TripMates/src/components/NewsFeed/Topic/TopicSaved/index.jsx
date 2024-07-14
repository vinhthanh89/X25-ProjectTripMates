/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import {
  bookmarkTopic,
  checkBookmarkTopic,
  unBookmarkTopic,
} from "../../../../services/bookmark";
import toast from 'react-hot-toast'

// eslint-disable-next-line react/prop-types
const TopicSaved = ({ topic }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const checkBookmark = async () => {
      try {
        const response = await checkBookmarkTopic(topic._id);
        setIsBookmarked(response.data.checkBookmark);
      } catch (error) {
        console.log(error);
      }
    };
    checkBookmark();
  }, [topic._id]);

  const handleClickAddTopicToBookmark = async () => {
    try {
      await bookmarkTopic({ topicId: topic._id });
      setIsBookmarked(true);
      toast.success('bookmark topic success')
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickRemoveBookmark = async () => {
    try {
      await unBookmarkTopic({ topicId: topic._id });
      setIsBookmarked(false);
    } catch (error) {
      console.log(error);
    }
  };

  const iconSize = 23;
  const iconStyle = {
    background: "transparent",
  };
  return (
    <div className="">
      {isBookmarked ? (
        <FaBookmark
          className="cursor-pointer text-yellow-400"
          size={iconSize}
          iconStyle={iconStyle}
          onClick={handleClickRemoveBookmark}
        />
      ) : (
        <FaBookmark
          className="cursor-pointer text-[#545454]"
          size={iconSize}
          iconStyle={iconStyle}
          onClick={handleClickAddTopicToBookmark}
        />
      )}
    </div>
  );
};

export default TopicSaved;
