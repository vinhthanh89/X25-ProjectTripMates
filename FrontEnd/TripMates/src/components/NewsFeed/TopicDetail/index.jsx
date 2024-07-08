/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getTopicById } from "../../../services/topic";
// import UserJoined from "./UserJoined";
// import Milestone from "./Milestones";
import { Modal } from "antd";
import { MdOutlineClose } from "react-icons/md";
import PostTableInTopicDetail from "../../PostTabelInTopicDetail";
import UserJoinTripAvatarGroup from "../../UserJoinTrip/UserJoinTripAvatarGroup";
import InviteUserJoinTripButton from "../../UserJoinTrip/InviteUserJoinTripButton";
import { useSelector } from "react-redux";
import RenderComment from "./RenderComment";
// eslint-disable-next-line no-unused-vars

const TopicDetail = () => {
  const urlParam = useParams();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.user.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [topicDetail, setTopicDetail] = useState({
    _id: "",
    title: "",
    thumbnail: "",
    userCreated: {},
    description: "",
    startDate: "",
    endDate: "",
    userJoinTrip : [],
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
  } = topicDetail;

  const { continent, country, locationThumbnail, locationName } = location;

  const convertedStartDate = dayjs(startDate, "YYYY-MM-DD").format(
    "MMMM Do, YYYY"
  );
  const convertedEndDate = endDate
    ? dayjs(endDate, "YYYY-MM-DD").format("MMMM Do, YYYY")
    : "";

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
              alt=""
              className="w-[3rem] h-[3rem] object-cover rounded-full"
            />
            <div className="flex flex-col text-xs">
              <p className="text-base font-semibold">{userCreated.fullName}</p>
              <p className="text-[grey]">1 month ago</p>
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
              <img
                onClick={showModal}
                className="w-[25rem] h-full object-cover cursor-pointer"
                src={thumbnail ? thumbnail : locationThumbnail}
                alt=""
              />
              <Modal
                open={isModalOpen}
                okButtonProps={{ style: { display: "none" } }}
                cancelButtonProps={{ style: { display: "none" } }}
                onCancel={handleCancel}
                className="modal-topic-thumbnail"
                width="700px"
                style={{
                  top: 60,
                }}
                closable={true}
                closeIcon={
                  <div className=" text-black bg-[lightgray] text-[30px] bg-opacity-0">
                    <MdOutlineClose />
                  </div>
                }
              >
                <img
                  className="w-full object-fill"
                  src={thumbnail ? thumbnail : locationThumbnail}
                  alt=""
                />
              </Modal>
            </div>
          </div>
          <div className="col-span-3 gap-2 text-[#303030]">
            <div className="flex items-center py-[5px]">
              <span className="text-base text-[#5143d9] font-bold">
                TripMates :
              </span>
              <div>
                <UserJoinTripAvatarGroup topicDetail={topicDetail} />
              </div>
            </div>
            <p>
              <span className="text-base text-[#5143d9] font-bold">
                Description :{" "}
              </span>{" "}
              {description}
            </p>
            <p className="text-base font-bold pt-[10px]">
              <span className="text-[#5143d9]">Location : </span>
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
                {convertedEndDate ? (convertedEndDate) : (<span>On going</span>)}
              </p>
            </div>
          </div>
        </div>
        {/* {post?.length === 0 ? (
          <EmptyMilestone topicId={topicDetail._id} />
        ) : (
          <PostTableInTopicDetail topicId={urlParam.topicId} />
        )} */}
        <PostTableInTopicDetail
          topicId={urlParam.topicId}
          userCreated={userCreated}
        />
        <div className="react">
          <h1 className="text-md">
            <span className="text-red-500 font-bold">100</span> people loved this Topic
          </h1>
        </div>
        <RenderComment />
      </div>
    </>
  );
};

export default TopicDetail;
