import { useState, useEffect, useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Reels = () => {
  const videoSrc = ["/Vietnam.mp4", "/Japan.mp4", "/Bali.mp4"];
  const iconSize = 25;
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef([]);

  //! Pause video
  useEffect(() => {
    if (currentVideoIndex !== -1) {
      videoRefs.current.forEach((video, index) => {
        if (index !== currentVideoIndex && video) {
          video.pause();
        }
      });
    }
  }, [currentVideoIndex]);

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) =>
      Math.min(prevIndex + 1, videoSrc.length - 1)
    );
  };

  const handlePrevious = () => {
    setCurrentVideoIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="flex justify-center ring-1 bg-black">
      {videoSrc.length > 0 && (
        <div className="flex justify-between items-center w-[60rem] ">
          <button
            className="p-4 bg-[#303030] text-white rounded-lg"
            onClick={handlePrevious}
            disabled={currentVideoIndex === 0}
          >
            <FaArrowAltCircleLeft size={iconSize} />
          </button>
          <video
            ref={(element) => (videoRefs.current[currentVideoIndex] = element)}
            className="rounded-lg w-[50rem] h-[40rem] object-cover ring-1"
            controls
            src={videoSrc[currentVideoIndex]}
            onPause={() => setCurrentVideoIndex(-1)}
          />
          <button
            className="p-4 bg-[#303030] text-white rounded-lg"
            onClick={handleNext}
            disabled={currentVideoIndex === videoSrc.length - 1}
          >
            <FaArrowAltCircleRight size={iconSize} />
          </button>
        </div>
      )}
      {videoSrc.length === 0 && <p>Loading...</p>}
    </div>
  );
};

export default Reels;
