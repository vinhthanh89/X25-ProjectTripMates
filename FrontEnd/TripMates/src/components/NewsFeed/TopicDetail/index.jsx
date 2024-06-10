/* eslint-disable react/prop-types */
import { Table } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import dayjs from "dayjs";
import { getTopicById } from "../../../services/topic";
// eslint-disable-next-line no-unused-vars

const TopicDetail = () => {
  const urlParam = useParams();
  const navigate = useNavigate();

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
    location
  } = topicDetail;

  const { continent , country, locationThumbnail } = location;

  const convertedStartDate = dayjs(startDate, "YYYY-DD-MM").format(
    "MMMM Do, YYYY"
  );
  const convertedEndDate = dayjs(endDate, "YYYY-DD-MM").format("MMMM Do, YYYY");

  // Testing
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      width: 200,
    },
    {
      title: "Blog Title",
      dataIndex: "blog",
      width: 400,
    },
    {
      title: "Location",
      dataIndex: "location",
    },
  ];
  const data = [];
  for (let i = 0; i < 40; i++) {
    data.push({
      key: i,
      date: <p className="font-bold">{convertedStartDate}</p>,
      blog: "A beautiful day in Japan",
      location: (
        <p>
          {continent} &gt;&gt; {country}
        </p>
      ),
    });
  }
  return (
    <>
      <div className="flex flex-col gap-[1rem] px-[1.5rem] pt-[1rem]">
        <p className="text-3xl font-bold">{title}</p>
        <div className="flex items-end justify-between">
          <div
            onClick={() => navigate(`/user/${userCreated._id}`)}
            className="flex items-center text-sm gap-[8px] cursor-pointer hover:opacity-80"
          >
            <img
              src={userCreated.avatar}
              alt=""
              className="w-[25px] h-[25px] object-cover rounded-full"
            />
            <div className="flex flex-col text-xs">
              <p className="text-sm font-semibold">{userCreated.fullName}</p>
              <p>1 month ago</p>
            </div>
          </div>
          <p className="text-sm font-bold">
            <span className="text-[#5143d9]">Location : </span>
            {continent ? (
              <span>
                <a className="underline">{continent}</a>
              </span>
            ) : (
              <></>
            )}
            {country ? (
              <span>
                <span> &gt;&gt; </span>
                <a className="underline">{country}</a>
              </span>
            ) : (
              <></>
            )}
            {/* {locationDependent} */}
            {/* <a className="underline">{continent}</a> */}
            {/* <span> &gt;&gt; </span> */}
            {/* <a className="underline">{country}</a> */}
          </p>
        </div>
        <div className="w-full h-[2px] bg-[lightgray]"></div>
        <div className="grid grid-cols-2 gap-5 ">
          <div className="col-span-1">
            <div className="flex justify-center items-center ">
              <img
                className="w-[25rem] h-[220px] object-fill"
                src={thumbnail ? thumbnail : locationThumbnail}
                alt=""
              />
            </div>
          </div>
          <div className="col-span-1 gap-2 text-[#303030] ">
            <p className="pt-[10px]">
              {description} Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. A ab, reiciendis iure incidunt sint suscipit possimus quam
              voluptatibus doloremque est veniam voluptatum ad corporis ex,
              minima quisquam cumque totam beatae amet tempore unde, molestias
              laboriosam. Quaerat eius illum soluta quo ea. Hic officiis, illo
              sint consectetur ipsum.
            </p>
            <div className="flex justify-between text-sm font-bold pt-[10px]">
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
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 20,
          }}
          scroll={{
            y: 240,
          }}
        />
      </div>
    </>
  );
};

export default TopicDetail;
