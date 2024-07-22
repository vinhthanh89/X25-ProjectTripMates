import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { useNavigate, useParams } from "react-router";

import { getPostById } from "../../../services/post";
import Content from "./Components/Content";

const Post = () => {
  const urlParam = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPostById(urlParam.postId);
        console.log(response);
        setPost(response.data.findPost);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [urlParam.postId]);

  const { title, date, location, userCreated , topicId } = post
 
  const convertDate = dayjs(date, "YYYY-MM-DD").format("DD-MMMM-YYYY");

  return (
    //! UI 1
    // <div className="grid grid-cols-5 gap-[3rem] pt-5 px-5 bg-white rounded h-full overflow-y-scroll">
    //   <div className="col-span-4 flex flex-col gap-[2rem] overflow-auto">
    //     <Header />
    //     <Content />
    //   </div>
    //   <div className="col-span-1 overflow-auto">
    //     <Recommend />
    //   </div>
    //   </div>
    // <div className="gap-[3rem] pt-5 px-[3rem] bg-white rounded h-full overflow-y-scroll">
    //   <div className="col-span-4 flex flex-col gap-[2rem]">
    //     <Header />
    //     <Content />
    //   </div>
    // </div>

    <div className="gap-[3rem] pt-5 pb-[50px] px-[3rem] bg-white h-full overflow-y-scroll">
      <div className="col-span-4 flex flex-col gap-[2rem]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-5 border-b-2 pb-4">
            <button
              onClick={() => navigate(`/topic/${topicId}`)}
             className="flex items-center gap-2 hover:underline">
              <FaLongArrowAltLeft />
              Back
            </button>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-base">
              <img className="w-[30px] h-[30px] rounded-full" src={userCreated?.avatar} alt="" />
                <strong
                className="hover:opacity-70 cursor-pointer"
                onClick={() => navigate(`/user/${userCreated._id}`)}
                >{userCreated?.fullName}</strong>
              </div>
              <div className="flex gap-2">
                <span className="flex items-center gap-2 font-bold">
                  <MdPlace />
                  {location?.locationName}
                </span>
                |<span className="text-red-500 font-bold">Asia</span>|
                <span>{convertDate}</span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold">
          {title}
          </h1>
        </div>
        <Content post={post} />
      </div>
    </div>
  );
};

export default Post;
