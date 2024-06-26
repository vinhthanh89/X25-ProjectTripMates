/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getTopicById } from "../../../services/topic";
import UserJoined from "./UserJoined";
// import Milestone from "./Milestones";
import { Modal } from "antd";
import { MdOutlineClose } from "react-icons/md";
import PostTableInTopicDetail from "../../PostTabelInTopicDetail";
// eslint-disable-next-line no-unused-vars

const TopicDetail = () => {

  const urlParam = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [topicDetail, setTopicDetail] = useState({
    _id: "",
    title: "",
    thumbnail: "",
    userCreated: {},
    description: "",
    startDate: "",
    endDate: "",
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
    post,
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

  return (
    <>
      <div className="flex flex-col gap-[1rem] p-[1.5rem] bg-white overflow-y-scroll pb-[30px]">
        <div className="flex flex-col border-b-2 p-4 ">
          <div
            onClick={() => navigate(`/user/${userCreated._id}`)}
            className="flex items-center text-sm gap-[8px] cursor-pointer hover:opacity-80 "
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
          <UserJoined />
        </div>

        <p className="text-3xl font-bold">{title}</p>
        <div className="grid grid-cols-2 gap-5 ">
          <div className="col-span-1">
            <div className="flex justify-center items-center ">
              <img
                onClick={showModal}
                className="w-[25rem] h-[220px] object-fill cursor-pointer"
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
          <div className="col-span-1 gap-2 text-[#303030]">
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
            <div className="flex justify-between text-base pt-[10px]">
              <p>
                <span className="text-[#5143d9] font-bold">From: </span>
                {convertedStartDate}
              </p>
              <p>
                <span className="text-[#5143d9] font-bold">Until: </span>
                {convertedEndDate}
              </p>
            </div>
          </div>
        </div>
        {/* {post?.length === 0 ? (
          <EmptyMilestone topicId={topicDetail._id} />
        ) : (
          <PostTableInTopicDetail topicId={urlParam.topicId} />
        )} */}
        <PostTableInTopicDetail topicId={urlParam.topicId} userCreated={userCreated} />

      </div>
    </>
  );
};

export default TopicDetail;
