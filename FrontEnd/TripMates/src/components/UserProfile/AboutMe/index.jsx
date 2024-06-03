/* eslint-disable react/prop-types */
import { FaUserEdit, FaCalendar } from "react-icons/fa";
import { IoIosMail, IoMdTransgender } from "react-icons/io";
import { useState } from "react";
import ModalUser from "../ModalUser";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const AboutMe = ({ userProfile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userLogin = useSelector((state) => state.user.user);
  const { email, gender, description, birthday } = userProfile;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const iconSize = 20;
  return (
    <div className="flex flex-col gap-2 border-b-[1.5px] px-[0.5rem] text-base">
      <div className="flex items-center">
        <ModalUser
          userProfile={userProfile}
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
        />
        <h1 className="font-bold mr-[20px]">About me</h1>
        {userLogin._id === userProfile._id ? (
          <div>
            <FaUserEdit
              onClick={openModal}
              className="cursor-pointer hover:opacity-80"
            />
          </div>
        ) : (
          <></>
        )}
      </div>
      <ul className="flex flex-col gap-4 py-[5px] text-sm">
        <li className="flex items-center gap-2">
          <div>
            <IoIosMail size={iconSize} />
          </div>
          <span>{email}</span>
        </li>
        <li className="flex items-center gap-2">
          <div>
            <FaCalendar size={iconSize} />
          </div>
          <span>{dayjs(birthday).format("DD-MMMM-YYYY")}</span>
        </li>
        <li className="flex items-center gap-2">
          <div>
            <IoMdTransgender size={iconSize} />
          </div>
          <span>{gender}</span>
        </li>
      </ul>
      <div>
        <p className="text-sm text-[#717171]">{description}</p>
      </div>
    </div>
  );
};

export default AboutMe;
