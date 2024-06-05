/* eslint-disable react/prop-types */
import { Table } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";


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
    continent: "",
    country: "",
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
    continent,
    country,
  } = topicDetail;
  
  const convertedStartDate = moment(startDate).format("MMMM Do, YYYY");
  const convertedEndDate = moment(endDate).format("MMMM Do, YYYY");

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
    // <div className="flex flex-col gap-[1rem] px-[10px] pt-[1.5rem]">
    //   <p className="text-4xl font-bold">{title}</p>
    //   <div className="flex items-center gap-[8px]">
    //     <img
    //       src={user.avatar}
    //       alt=""
    //       className="w-[20px] h-[20px] object-cover rounded-full"
    //     />
    //     <p>
    //       {" "}
    //       <span className="font-semibold">
    //         {userCreated ? (
    //           <a className="cursor-pointer ">
    //             {userCreated.fullName}
    //           </a>
    //         ) : (
    //           " "
    //         )}
    //       </span>
    //     </p>
    //   </div>

    //   <div className="w-full h-[2px] bg-[lightgray]"></div>
    //   <div className="flex gap-[15px]">
    //     <div className="w-[25rem] h-[230px]">
    //       <img className="w-full h-full object-fill" src={thumbnail} alt="" />
    //     </div>
    //     <div className="flex-1 text-[#303030]">
    //       <div className="flex justify-between">
    //         <p>
    //           <span className="text-[#5143d9] font-bold">From: </span>
    //           {convertedStartDate}
    //         </p>
    //         <p>
    //           <span className="text-[#5143d9] font-bold">Until: </span>
    //           {convertedEndDate}
    //         </p>
    //       </div>
    //       <p>
    //         <span className="text-[#5143d9] font-bold">Location : </span>
    //         <a className="font-bold underline">{continent}</a>
    //         <span> &gt;&gt; </span>
    //         <a className="font-bold underline">{country}</a>
    //       </p>
    //       <p className="text-base pt-[10px]">
    //         {description} Lorem ipsum dolor, sit amet consectetur adipisicing
    //         elit. A ab, reiciendis iure incidunt sint suscipit possimus quam
    //         voluptatibus doloremque est veniam voluptatum ad corporis ex, minima
    //         quisquam cumque totam beatae amet tempore unde, molestias
    //         laboriosam. Quaerat eius illum soluta quo ea. Hic officiis, illo
    //         sint consectetur ipsum sed facilis expedita!
    //       </p>
    //     </div>
    //   </div>
    //   <div className="text-[#303030]">
    //     <div className="text-4xl text-[gray]">Milestone</div>
    //     <table className="w-[90%] [&>tbody>*:nth-child(odd)]:bg-[#f2f2f2] [&>tbody>*:nth-child(even)]:bg-[#ddd]">
    //       <tr className="bg-[#5f5f5f] h-[3.5rem] text-xl text-left text-white">
    //         <th className="w-[25%] px-[5px]">Date</th>
    //         <th className="w-[50%]">Blog Title</th>
    //         <th className="w-[25%]">Location</th>
    //       </tr>
    //       <tbody>
    //         <tr className="h-[4rem] text-lg font-medium border-y-[1px] border-[gray]">
    //           <td className="pl-[5px]">{convertedEndDate}</td>
    //           <td>Day 1 : Tokyo Night</td>
    //           <td>
    //             {continent} &gt;&gt; {country}
    //           </td>
    //         </tr>
    //         <tr className="h-[40px] text-[17px] border-y-[1px] border-[gray]">
    //           <td className="pl-[5px]">{convertedEndDate}</td>
    //           <td>Day 2 : A beautiful day at Tokyo with my wife Scarlet</td>
    //           <td>
    //             {continent} &gt;&gt; {country}
    //           </td>
    //         </tr>
    //         <tr className="h-[40px] text-[17px] border-y-[1px] border-[gray]">
    //           <td className="pl-[5px]">{convertedEndDate}</td>
    //           <td>Day 3 : Last day at Japan</td>
    //           <td>
    //             {continent} &gt;&gt; {country}
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
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
            <a className="underline">{continent}</a>
            <span> &gt;&gt; </span>
            <a className="underline">{country}</a>
          </p>
        </div>
        <div className="w-full h-[2px] bg-[lightgray]"></div>
        <div className="grid grid-cols-2 gap-5 ">
          <div className="col-span-1">
            <div className="flex justify-center items-center ">
              <img
                className="w-[25rem] h-[220px] object-fill"
                src={thumbnail}
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
        {/* <div className="text-[#303030]">
          <div className="text-4xl text-[gray]">Milestone</div>
          <table className="w-full [&>tbody>*:nth-child(odd)]:bg-[#f2f2f2] [&>tbody>*:nth-child(even)]:bg-[#ddd]">
            <tr className="bg-[#5f5f5f] h-[3.5rem] text-xl text-left text-white">
              <th className="w-[25%] px-[5px]">Date</th>
              <th className="w-[50%]">Blog Title</th>
              <th className="w-[25%]">Location</th>
            </tr>
            <tbody>
              <tr className="h-[4rem] text-lg font-medium border-y-[1px] border-[gray]">
                <td className="pl-[5px]">{convertedEndDate}</td>
                <td>Day 1 : Tokyo Night</td>
                <td>
                  {continent} &gt;&gt; {country}
                </td>
              </tr>
              <tr className="h-[40px] text-[17px] border-y-[1px] border-[gray]">
                <td className="pl-[5px]">{convertedEndDate}</td>
                <td>Day 2 : A beautiful day at Tokyo with my wife Scarlet</td>
                <td>
                  {continent} &gt;&gt; {country}
                </td>
              </tr>
              <tr className="h-[40px] text-[17px] border-y-[1px] border-[gray]">
                <td className="pl-[5px]">{convertedEndDate}</td>
                <td>Day 3 : Last day at Japan</td>
                <td>
                  {continent} &gt;&gt; {country}
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
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
