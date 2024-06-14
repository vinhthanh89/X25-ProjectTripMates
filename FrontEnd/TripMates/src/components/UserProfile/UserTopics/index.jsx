/* eslint-disable react/prop-types */

import { Dropdown } from "antd";
import { BsThreeDots } from "react-icons/bs";
import { MdPlace } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import ModalDeleteTopic from "../ModalDeleteTopic";
import ModalEditTopic from "../ModalEditTopic";

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
          <ModalDeleteTopic topic={topic} />
        </>
      ),
    },
  ];

  return (
    <div className="flex border-[2px] rounded-l-[15px] h-[200px]">
      <div
        onClick={() => navigate(`/topic/${_id}`)}
        className="bgImage w-[35%] hover:opacity-50 "
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
          className="line-clamp-2 text-2xl font-bold hover:opacity-50 cursor-pointer"
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
          <p title={description} className="line-clamp-2 text-sm font-light">
            {description}
          </p>
        </div>
      </div>

      <div className="w-[5%] flex justify-center">
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
