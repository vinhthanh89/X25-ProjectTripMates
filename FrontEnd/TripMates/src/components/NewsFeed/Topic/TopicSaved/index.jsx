/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import {
  bookmarkTopic,
  checkBookmarkTopic,
  unBookmarkTopic,
} from "../../../../services/bookmark";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const TopicSaved = ({ topic }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

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
      triggerScaleEffect();
      setIsBookmarked(true);
      await bookmarkTopic({ topicId: topic._id });

      toast.success("bookmark topic success");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickRemoveBookmark = async () => {
    try {
      triggerScaleEffect();
      setIsBookmarked(false);
      await unBookmarkTopic({ topicId: topic._id });
    } catch (error) {
      console.log(error);
    }
  };

  const triggerScaleEffect = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 200); // Duration of the scale effect in milliseconds
  };
  const iconSize = 23;
  const iconStyle = {
    background: "transparent",
  };
  return (
    <div className="">
      {isBookmarked ? (
        <FaBookmark
          className={`cursor-pointer text-yellow-400 transform transition-transform ${
            isClicked ? "scale-125" : "scale-100"
          }`}
          size={iconSize}
          iconStyle={iconStyle}
          onClick={handleClickRemoveBookmark}
        />
      ) : (
        <FaBookmark
          className={`cursor-pointer text-[#545454] transform transition-transform ${
            isClicked ? "scale-125" : "scale-100"
          }`}
          size={iconSize}
          iconStyle={iconStyle}
          onClick={handleClickAddTopicToBookmark}
        />
      )}
    </div>
  );
};

export default TopicSaved;
