/* eslint-disable react/prop-types */
import { FaUserEdit } from "react-icons/fa";
import { CiMail, CiCalendar } from "react-icons/ci";
import {
  BsGenderAmbiguous,
  BsGenderFemale,
  BsGenderMale,
} from "react-icons/bs";
import { useState } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ModalUser from "../ModalUser";

import FollowButton from "../../Follow/FolllowButton";

const AboutMe = ({ userProfile, handleEditUser }) => {
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
    <div className="flex flex-col gap-2 px-[0.5rem] pb-[0.5rem] text-base">
      <div className="flex items-center gap-2">
        <ModalUser
          userProfile={userProfile}
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          handleEditUser={handleEditUser}
        />
        <h1 className="font-bold">About me</h1>
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
            <CiMail size={iconSize} />
          </div>
          <span>{email}</span>
        </li>
        <li className="flex items-center gap-2">
          <div>
            <CiCalendar size={iconSize} />
          </div>
          <span>{birthday ? dayjs(birthday).format("DD-MMMM-YYYY") : <></>}</span>
        </li>
        <li className="flex items-center gap-2">
          {(!gender && (
            <></>
          )) ||
            (gender === "Male" && (
              <div>
                <BsGenderMale size={iconSize} />
              </div>
            )) ||
            (gender === "Female" && (
              <div>
                <BsGenderFemale size={iconSize} />
              </div>
            ))}

          <span>{gender}</span>
        </li>
      </ul>
      <div>
        <p className="text-sm text-[#717171]">{description}</p>
      </div>
      {userLogin._id !== userProfile._id && (
        <div className="w-full">
          <FollowButton userProfile={userProfile} />
        </div>
      )}
    </div>
  );
};

export default AboutMe;
