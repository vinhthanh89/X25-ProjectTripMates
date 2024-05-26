import { useState, useEffect } from "react";
import Continents from "../Continents";
import Post from "../Post";

const Content = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  // Function to handle scrolling
  const handleScroll = () => {
    setScrollIndex((prevIndex) => (prevIndex + 1) % 6); // Assuming you have 4 posts
  };

  // Start the scrolling effect when component mounts
  useEffect(() => {
    const interval = setInterval(handleScroll, 2000); // Change the duration as needed
    return () => clearInterval(interval); // Cleanup function to clear interval
  }, []);

  return (
    <div className="flex flex-col gap-5 pt-[2rem] h-full overflow-y-scroll">
      {/* Ensure the container has a fixed height and enables scrolling */}
      <div className="flex flex-col gap-[1rem]">
        <h1 className="text-2xl font-semibold text-black">Explore</h1>
        <Continents />
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-black">Recent posts</h1>
      </div>
      <div
        className="grid grid-cols-2 gap-[10px]"
        style={{ "-ms-overflow-style": "none" }}
      >
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <Post key={index} /> // Render each post dynamically
        ))}
      </div>
    </div>
  );
};

export default Content;
