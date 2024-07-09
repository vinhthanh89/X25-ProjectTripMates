import { useState } from "react";
import { FaBookmark } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const TopicSaved = ({iconSize, iconStyle}) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
     const toggleBookmark = () => {
       setIsBookmarked(!isBookmarked);
     };
  return (
    <div className="flex justify-end pt-2">
      <FaBookmark
        className={`cursor-pointer ${
          isBookmarked ? "text-yellow-400" : "text-[#545454]"
        }`}
        size={iconSize}
        iconStyle={iconStyle}
        onClick={toggleBookmark}
      />
    </div>
  );
}

export default TopicSaved