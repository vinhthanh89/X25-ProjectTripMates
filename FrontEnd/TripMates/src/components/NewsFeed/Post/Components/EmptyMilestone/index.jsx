/* eslint-disable react/prop-types */


import { useNavigate } from "react-router";

const EmptyMilestone = ({topicId}) => {
  const navigate = useNavigate()


  return (
    <div className="flex flex-col items-center justify-center gap-[2rem] border-2 rounded p-10">
      <h1 className="text-2xl text-[grey]">No post</h1>
      <button 
      onClick={() => navigate(`/topic/createPost/${topicId}`)}
       className="font-bold text-white bg-[#5143d9] px-5 py-1 text-2xl text-center cursor-pointer outline-none border-none rounded-lg shadow-md active:bg-[#5143d9] active:scale-95">
        +
      </button>
      <p className="text-[grey]">Click here to create a post</p>
    </div>
  );
};

export default EmptyMilestone;
