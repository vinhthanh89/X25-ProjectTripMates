/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getTopicById } from "../../../services/topic";
// import UserJoined from "./UserJoined";
// import Milestone from "./Milestones";
import { Image } from "antd";
import { useSelector } from "react-redux";
import { calculateDifferenceDays } from "../../../utils/calculateDifferenceDays";
import CommentModal from "../../Comment/CommentModal";
import PostTableInTopicDetail from "../../PostTabelInTopicDetail";
import InviteUserJoinTripButton from "../../UserJoinTrip/InviteUserJoinTripButton";
import UserJoinTripAvatarGroup from "../../UserJoinTrip/UserJoinTripAvatarGroup";
import TopicReact from "../Topic/TopicReact";
import RenderComment from "./RenderComment";
// eslint-disable-next-line no-unused-vars

const TopicDetail = () => {
  const urlParam = useParams();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.user.user);

  const [topicDetail, setTopicDetail] = useState({
    _id: "",
    title: "",
    thumbnail: "",
    userCreated: {},
    description: "",
    startDate: "",
    endDate: "",
    userJoinTrip: [],
    location: {},
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTopicById(urlParam.topicId);
        setTopicDetail(response.data.findTopic);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [urlParam.topicId]);

  const {
    title,
    thumbnail,
    userCreated,
    description,
    startDate,
    endDate,
    location,
    createdAt,
  } = topicDetail;

  const { continent, country, locationThumbnail, locationName } = location;

  const daysDifference = calculateDifferenceDays(createdAt);

  const convertedStartDate = dayjs(startDate, "YYYY-MM-DD").format(
    "MMMM Do, YYYY"
  );
  const convertedEndDate = endDate
    ? dayjs(endDate, "YYYY-MM-DD").format("MMMM Do, YYYY")
    : "On Going";

  const handleSetTopicDetail = (newTopicDetail) => {
    setTopicDetail(newTopicDetail);
  };

  return (
    <>
      <div className="flex flex-col gap-[1rem] p-[1.5rem] bg-white overflow-y-scroll pb-[30px]">
        <div className="flex justify-between border-b-2 p-4 ">
          <div
            onClick={() => navigate(`/user/${userCreated._id}`)}
            className="flex items-center text-sm gap-[8px] cursor-pointer hover:opacity-80 w-fit"
          >
            <img
              src={userCreated.avatar}
              className="w-[3rem] h-[3rem] object-cover rounded-full"
            />
            <div className="flex flex-col text-xs">
              <p className="text-base font-semibold">{userCreated.fullName}</p>
              <p className="text-[grey]">{daysDifference}</p>
            </div>
          </div>
          {userLogin._id === userCreated._id && (
            <div className="">
              <InviteUserJoinTripButton
                topicDetail={topicDetail}
                handleSetTopicDetail={handleSetTopicDetail}
              />
            </div>
          )}

          {/* <UserJoined /> */}

          {/* userJoin */}
          {/* <UserJoinTripAvatarGroup /> */}
        </div>

        <p className="text-3xl font-bold">{title}</p>
        <div className="grid grid-cols-5 gap-5 ">
          <div className="col-span-2 flex justify-center items-center max-h-[270px]">
            <div className="flex justify-center items-center h-full">
              <Image
                src={thumbnail ? thumbnail : locationThumbnail}
                width="280px"
                height="280px"
                className="object-fill"
              />
            </div>
          </div>
          <div className="col-span-3 gap-2 text-[#303030]">
            <div className="flex items-center py-[5px]">
              <span className="text-base text-[#5143d9] font-bold">
                TripMates:
              </span>
              <div>
                <UserJoinTripAvatarGroup topicDetail={topicDetail} />
              </div>
            </div>
            <p>
              <span className="text-base text-[#5143d9] font-bold">
                Description:
              </span>{" "}
              {description}
            </p>
            <p className="text-base pt-[10px]">
              <span className="text-[#5143d9] font-bold">Location: </span>
              {continent ? (
                <span>
                  <a>{continent}</a>
                  <span> &gt;&gt; </span>
                </span>
              ) : (
                <></>
              )}
              {country ? (
                <span>
                  <a>{country}</a>
                  <span> &gt;&gt; </span>
                </span>
              ) : (
                <></>
              )}
              <span>{locationName}</span>
            </p>
            <div className="flex gap-3 text-base pt-[10px]">
              <p>
                <span className="text-[#5143d9] font-bold">From: </span>
                {convertedStartDate}
              </p>
              <p>
                <span className="text-[#5143d9] font-bold">Until: </span>
                {convertedEndDate ? convertedEndDate : <span>On going</span>}
              </p>
            </div>
          </div>
        </div>
        {/* {post?.length === 0 ? (
          <EmptyMilestone topicId={topicDetail._id} />
        ) : (
          <PostTableInTopicDetail topicId={urlParam.topicId} />
        )} */}
        <div className="react flex justify-end gap-[15px]">
          <TopicReact topic={topicDetail} />
          <CommentModal topic={topicDetail} />
        </div>
        <PostTableInTopicDetail
          topicId={urlParam.topicId}
          userCreated={userCreated}
        />
  
        {/* <RenderComment topic={topicDetail} /> */}
      </div>
    </>
  );
};

export default TopicDetail;
