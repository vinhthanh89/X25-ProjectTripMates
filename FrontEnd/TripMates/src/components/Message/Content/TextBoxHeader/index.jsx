/* eslint-disable react/prop-types */
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router";
// import { FaCircle } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import { getDataUserFollowing } from "../../../../services/userFollowing";

// const Header = () => {

//   return (
//     <div className="border-b-2">
//       <div
//         className="flex items-center btn_all cursor-pointer gap-4"
//         // onClick={() => navigate(`/user/${friends._id}`)}
//       >
//         <div className="avatar">
//           <div className="rounded-full w-[40px]">
//             {/* <img src={friends.avatar} alt="" /> */}
//             <img
//               src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="flex flex-col">
//           {/* <p className="font-bold">{friends.fullName}</p> */}
//           <p className="font-bold">Vinh Thanh</p>
//           {/* //! Online
//           <span className="flex items-center gap-1 text-xs text-[#bbbbbb]">
//             <FaCircle style={{ background: "transparent", color: "green" }} />
//             Online
//           </span> */}
//           {/* //! Offline
//           <span className="flex items-center gap-1 text-xs text-[#bbbbbb]">
//             <FaCircle style={{ background: "transparent", color: "grey" }} />
//             Offline
//           </span> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


const TextBoxHeader = ({ selectedFriend }) => {
  return (
    <div className="border-b-2 sticky top-0">
      <div className="flex items-center btn_all cursor-pointer gap-4">
        <div className="avatar">
          <div className="rounded-full w-[40px]">
            <img
              src={
                selectedFriend
                  ? selectedFriend.userFollow.avatar
                  : "default-avatar-url"
              }
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">
            {selectedFriend
              ? selectedFriend.userFollow.fullName
              : "Select a friend"}
          </p>
          {/* You can add online/offline status here if available */}
        </div>
      </div>
    </div>
  );
};

export default TextBoxHeader;