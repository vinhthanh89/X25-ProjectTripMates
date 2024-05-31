/* eslint-disable react/prop-types */
import { MdPlace } from "react-icons/md";
import {Modal} from 'antd'
import { useState } from "react";


import TopicDetail from "../TopicDetail";

const Post = ({ topic }) => {
  const { thumbnail, description, country, continent, title, userCreated } =
    topic;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

  return (
    <div
     className="flex flex-col gap-y-[1.2rem] rounded-lg shadow-xl p-4 cursor-pointer">
      <div className="relative" onClick={showModal}>
        <div className="absolute top-[5px] right-[5px] flex items-center gap-2">
          <div className="w-[4rem] h-[4rem]">
            <img
              src={userCreated.avatar}
              className="w-full h-full object-cover rounded-full border"
            />
          </div>
        </div>
        <img
          src={thumbnail}
          alt={country}
          className="rounded-[12px] cursor-pointer w-full h-[220px] object-fill"
        />
      </div>
      <div className="flex flex-col gap-[10px] text-black">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex flex-col gap-[5px]">
          <div className="flex items-center gap-1 font-medium text-gray-400">
            <MdPlace />
            <p>{country}</p>
          </div>
          <div className="text-sm text-[#5143d9]">
            <span>#{continent}</span>
            <span>#{country}</span>
          </div>
          <p className="text-sm font-medium">{description}</p>
        </div>
      </div>
      <Modal
      width={760}
      cancelButtonProps={{style :  {display : 'none'}}}
      okButtonProps={{style : {display : 'none'}}}
      // footer={null}
      open={isModalOpen} onCancel={handleCancel}>
          <TopicDetail
          topic={topic}
           />
      </Modal>
    </div>
  );
};

export default Post;
