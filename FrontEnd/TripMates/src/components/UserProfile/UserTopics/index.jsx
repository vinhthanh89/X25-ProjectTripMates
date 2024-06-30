/* eslint-disable react/prop-types */

import { Dropdown } from "antd";
import { BsThreeDots } from "react-icons/bs";
import { MdPlace } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import ModalDeleteTopic from "../ModalDeleteTopic";
import ModalEditTopic from "../ModalEditTopic";
import ModalChangeTopicThumbnail from "../ModalChangeTopicThumbnail";

const UserTopic = ({ topic }) => {
  const userLogin = useSelector((state) => state.user.user);

  const navigate = useNavigate();

  const { _id, thumbnail, description, title, location, userCreated } = topic;

  const { continent, country, locationThumbnail, locationName } = location;

  const items = [
    {
      key: "0",
      label: (
        <>
          <ModalEditTopic topic={topic} />
        </>
      ),
    },
    {
      key: "1",
      label: (
        <>
          <ModalChangeTopicThumbnail topic={topic} />
        </>
      ),
    },
    {
      key: "2",
      label: (
        <>
          <ModalDeleteTopic topic={topic} />
        </>
      ),
    },
  ];

  return (
    <div className="flex border-[2px] rounded-[15px] h-[200px]">
      <div
        onClick={() => navigate(`/topic/${_id}`)}
        className="bgImage w-[35%] hover:opacity-80 "
      >
        <img
          src={thumbnail ? thumbnail : locationThumbnail}
          alt={country}
          className="rounded-l-[15px] cursor-pointer w-full h-full object-fill"
        />
      </div>
      <div className="info flex flex-col gap-2 px-[15px] py-[8px] w-[60%]">
        <h1
          onClick={() => navigate(`/topic/${_id}`)}
          title={title}
          className="text-ellipsis truncate text-2xl font-bold hover:opacity-50 cursor-pointer "
        >
          {title}
        </h1>
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-1 font-medium text-gray-400 text-base">
            <MdPlace />
            <p>{locationName}</p>
          </div>
          <div className="text-base text-[#5143d9] flex gap-2">
            <span>#{continent}</span>
            <span>{country ? `#${country}` : ""}</span>
          </div>
          <p
            title={description}
            className="text-ellipsis truncate text-sm font-light"
          >
            {description}
          </p>
          <div className="avatar-group -space-x-3">
            <div className="avatar w-9 border-white">
              <div className="w-full rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-full object-fill"
                />
              </div>
            </div>
            <div className="avatar w-9 border-white">
              <div className="w-full rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="w-full object-fill"
                />
              </div>
            </div>
            <div className="avatar placeholder w-9 border-white">
              <div className="w-full bg-[#f2f2f2] border-transparent text-[0.7rem]">
                <span>+2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[2rem] flex justify-center pt-2">
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomRight"
          trigger={["click"]}
        >
          <BsThreeDots
            onClick={(e) => e.preventDefault()}
            className={`text-[20px] cursor-pointer ${
              !(userLogin._id === userCreated._id) ? "hidden" : ""
            }`}
          />
        </Dropdown>
      </div>
    </div>
  );
};

export default UserTopic;
