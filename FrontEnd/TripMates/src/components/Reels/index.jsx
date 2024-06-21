import { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Reels = () => {
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(-1);
  const videoRefs = useRef([]);

  //! Fetch video
  useEffect(() => {
    fetchMoreVideos();
  }, []);
  // Pause video when currentVideoIndex changes
  useEffect(() => {
    if (currentVideoIndex !== -1 && videoRefs.current[currentVideoIndex]) {
      videoRefs.current[currentVideoIndex].pause();
    }
  }, [currentVideoIndex]);

  const fetchMoreVideos = () => {
    setTimeout(() => {
      const newVideos = Array.from({ length: 20 }, (_, i) => ({
        id: videos.length + i,
        src: `/Bali.mp4`,
      }));
      setVideos((prevVideos) => [...prevVideos, ...newVideos]);
      if (videos.length >= 30) {
        setHasMore(false);
      }
    }, 1500);
  };

  return (
    <div className="flex justify-center p-5"> 
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchMoreVideos}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        className="flex flex-col gap-12 w-full max-w-lg p-5"
      >
        {videos.map((video, index) => (
          <div key={video.id} className="gap-10 rounded-lg h-[calc(90vh-4rem)]">
            <video
              ref={(element) => (videoRefs.current[index] = element)}
              className="w-full h-full object-cover rounded-lg"
              controls
              src={video.src}
              onPause={() => setCurrentVideoIndex(-1)}
            />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Reels;
