import { useState, useEffect, useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Reels = () => {
  const reelsData = [
    { user: "Amanda", video: "/Vietnam.mp4", profilePic: "./profile-user.png" },
    {
      user: "Mary Jane",
      video: "/Japan.mp4",
      profilePic: "./profile-user.png",
    },
    { user: "Jake Paul", video: "/Bali.mp4", profilePic: "./profile-user.png" },
  ];

  const iconSize = 25;
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    if (currentReelIndex >= 0 && currentReelIndex < reelsData.length) {
      videoRefs.current.forEach((video, index) => {
        if (index !== currentReelIndex && video) {
          video.pause();
        }
      });
    }
  }, [currentReelIndex]);

  const handleNext = () => {
    setCurrentReelIndex((prevIndex) =>
      Math.min(prevIndex + 1, reelsData.length - 1)
    );
  };

  const handlePrevious = () => {
    setCurrentReelIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const currentReel = reelsData[currentReelIndex] || reelsData[0];

  return (
    <div className="flex justify-center bg-gray-100 w-full">
      {reelsData.length > 0 && (
        <div className="flex flex-col items-center w-full h-[90vh] pt-5 bg-white rounded-lg shadow-md">
          <div className="flex justify-start w-[45rem] border-[lightgrey] border-b-2 py-2 mb-2">
            <div className="flex items-center cursor-pointer gap-4">
              <div className="w-[45px] h-[45px] rounded-full bg-white">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={currentReel.profilePic}
                  alt={`${currentReel.user}'s profile`}
                />
              </div>
              <div>
                <p className="text-lg font-bold">{currentReel.user}</p>
                <p className="text-md text-gray-500">1 hour ago</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 relative">
            <button
              className="p-2 bg-black bg-opacity-30 text-white rounded-full hover:bg-opacity-50 transition-all"
              onClick={handlePrevious}
              disabled={currentReelIndex === 0}
            >
              <FaArrowAltCircleLeft size={iconSize} />
            </button>
            <video
              ref={(element) => (videoRefs.current[currentReelIndex] = element)}
              className="aspect-[9/16] rounded-lg w-[45rem] h-[30rem] object-cover"
              controls
              src={currentReel.video}
              onPause={() => setCurrentReelIndex(currentReelIndex)}
            />
            <button
              className="p-2 bg-black bg-opacity-30 text-white rounded-full hover:bg-opacity-50 transition-all"
              onClick={handleNext}
              disabled={currentReelIndex === reelsData.length - 1}
            >
              <FaArrowAltCircleRight size={iconSize} />
            </button>
          </div>
        </div>
      )}
      {reelsData.length === 0 && <p>Loading...</p>}
    </div>
  );
};

export default Reels;
