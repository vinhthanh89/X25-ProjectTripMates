// /* eslint-disable react/prop-types */
// const Friend = ({ user }) => {
//   console.log(user);
//   return (
//     <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-[#e8e8e8] border-b-2 w-full">
//       <div>
//         <img
//           className="w-[35px] h-[35px] object-cover rounded-full"
//           src={user.avatar}
//           alt=""
//         />
//       </div>
//       <p
//         title={user.fullName}
//         className="text-[15px] text-center font-bold line-clamp-2 break-words"
//       >
//         {user.fullName}
//       </p>
//     </div>
//   );
// };

// export default Friend;

// eslint-disable-next-line react/prop-types
const Friend = ({ user, onSelect }) => {
  // eslint-disable-next-line react/prop-types
  const { avatar, fullName } = user.userFollow;

  return (
    <div
      className="flex items-center gap-3 p-3 cursor-pointer hover:bg-[#e8e8e8] border-b-2 w-full"
      onClick={onSelect}
    >
      <div>
        <img
          className="w-[35px] h-[35px] object-cover rounded-full"
          src={avatar}
          alt=""
        />
      </div>
      <p
        title={fullName}
        className="text-[15px] text-center font-bold line-clamp-2 break-words"
      >
        {fullName}
      </p>
    </div>
  );
};

export default Friend;