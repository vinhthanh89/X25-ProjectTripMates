/* eslint-disable react/prop-types */
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getTopicById } from "../../../services/topic";

// eslint-disable-next-line no-unused-vars
const TopicDetail = () => {
  const [topicDetail , setTopicDetail] = useState({
    title: '',
    thumbnail: '',
    userCreated: null,
    description: '',
    startDate: '',
    endDate: '',
    continent: '',
    country: '',
  })
  const urlParam = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTopicById(urlParam.topicId)
        setTopicDetail(response.data.findTopic)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [urlParam.topicId])
  
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
  return (
    <div>
      <p className="text-[30px]">{title}</p>
      <div className="w-full h-[2px] bg-[lightgray] mb-[10px]"></div>
      <div className="flex gap-[15px]">
        <div className="w-[50%] h-[220px]">
          <img className="w-full h-full object-fill" src={thumbnail} alt="" />
        </div>
        <div className="flex-1">
          <p>
            a trip by{" "}
            <span>
            {userCreated ? <a className="cursor-pointer text-[#7bc1d8] hover:opacity-70">{userCreated.fullName}</a> : " "}
            </span>
          </p>
          <p>
            <span className="text-[blue]">From : </span>
            {convertedStartDate}
          </p>
          <p>
            <span className="text-[blue]">Until : </span>
            {convertedEndDate}
          </p>
          <p>
            <span className="text-[blue]">Location : </span>
            <a className="text-[#5959f3]">{continent}</a>
            <span> &gt;&gt; </span>
            <a className="text-[#5959f3]">{country}</a>
          </p>
          <p className="mt-[5px]">
            {description} Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. A ab, reiciendis iure incidunt sint suscipit possimus quam
            voluptatibus doloremque est veniam voluptatum ad corporis ex, minima
            quisquam cumque totam beatae amet tempore unde, molestias
            laboriosam. Quaerat eius illum soluta quo ea. Hic officiis, illo
            sint consectetur ipsum sed facilis expedita!
          </p>
        </div>
      </div>
      <div className="mt-[10px]">
        <div className="text-[28px] text-[gray]">Milestone</div>
        <table className="w-full [&>tbody>*:nth-child(odd)]:bg-[#f2f2f2] [&>tbody>*:nth-child(even)]:bg-[#ddd]">
          <tr className="bg-[#04AA6D] h-[40px] text-[20px] text-left text-white ">
            <th className="w-[20%] pl-[5px]">Date</th>
            <th className="w-[55%]">Blog Title</th>
            <th className="w-[25%]">Location</th>
          </tr>
          <tbody>
            <tr className="h-[40px] text-[17px] border-y-[1px] border-[gray]">
              <td className="pl-[5px]">{convertedEndDate}</td>
              <td>Day 1 : Tokyo Night</td>
              <td>
                {continent} &gt;&gt; {country}
              </td>
            </tr>
            <tr className="h-[40px] text-[17px] border-y-[1px] border-[gray]">
              <td className="pl-[5px]">{convertedEndDate}</td>
              <td>Day 1 : Tokyo Night Tokyo NightTokyo NightTokyo NightTokyo Night</td>
              <td>
                {continent} &gt;&gt; {country}
              </td>
            </tr>
            <tr className="h-[40px] text-[17px] border-y-[1px] border-[gray]">
              <td className="pl-[5px]">{convertedEndDate}</td>
              <td>Day 1 : Tokyo Night</td>
              <td>
                {continent} &gt;&gt; {country}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopicDetail;
