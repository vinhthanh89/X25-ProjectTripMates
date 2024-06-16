/* eslint-disable react/prop-types */
// import { Table } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import dayjs from "dayjs";
import { getTopicById } from "../../../services/topic";
import EmptyMilestone from "../Post/Components/EmptyMilestone";
import { Modal } from "antd";
import { MdOutlineClose } from "react-icons/md";
// eslint-disable-next-line no-unused-vars

const TopicDetail = () => {
  const urlParam = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [topicDetail, setTopicDetail] = useState({
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
        console.log(response);
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
  // Testing
  // const columns = [
  //   {
  //     title: "Date",
  //     dataIndex: "date",
  //     width: 200,
  //   },
  //   {
  //     title: "Blog Title",
  //     dataIndex: "blog",
  //     width: 400,
  //   },
  //   {
  //     title: "Location",
  //     dataIndex: "location",
  //   },
  // ];
  // const data = [];
  // for (let i = 0; i < 40; i++) {
  //   data.push({
  //     key: i,
  //     date: <p className="font-bold">{convertedStartDate}</p>,
  //     blog: "A beautiful day in Japan",
  //     location: (
  //       <p>
  //         {continent} &gt;&gt; {country}
  //       </p>
  //     ),
  //   });
  // }
  return (
    <>
      <div className="flex flex-col gap-[1rem] p-[1.5rem] bg-white overflow-y-scroll">
        <div className="flex items-end justify-between border-b-2 p-4">
          <div
            onClick={() => navigate(`/user/${userCreated._id}`)}
            className="flex items-center text-sm gap-[8px] cursor-pointer hover:opacity-80"
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
                  className="w-full h-[500px] object-fill"
                 src={thumbnail ? thumbnail : locationThumbnail} />
              </Modal>
            </div>
          </div>
          <div className="col-span-1 gap-2 text-[#303030] ">
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
                  <a className="underline">{continent}</a>
                  <span> &gt;&gt; </span>
                </span>
              ) : (
                <></>
              )}
              {country ? (
                <span>
                  <a className="underline">{country}</a>
                  <span> &gt;&gt; </span>
                </span>
              ) : (
                <></>
              )}
              <span className="underline">{locationName}</span>
            </p>
            <div className="flex justify-between text-base font-bold pt-[10px]">
              <p>
                <span className="text-[#5143d9]">From: </span>
                {convertedStartDate}
              </p>
              <p>
                <span className="text-[#5143d9]">Until: </span>
                {convertedEndDate}
              </p>
            </div>
          </div>
        </div>
        {/* <Table
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 20,
          }}
          scroll={{
            y: 240,
          }}
        /> */}
        <EmptyMilestone />
      </div>
    </>
  );
};

export default TopicDetail;
