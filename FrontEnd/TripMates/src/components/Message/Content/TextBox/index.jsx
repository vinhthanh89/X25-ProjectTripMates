// import { useEffect, useRef } from "react";

// const TextBox = () => {
//   //! Handle chat
//   const endRef = useRef(null);

//   useEffect(() => {
//     endRef.current?.scrollIntoView({behaviour:"smooth"})
//   }, [])
//   return (
//     <div className="h-[72vh] overflow-scroll">
//       <div className="friendChat flex gap-3 p-3">
//         <div>
//           <img
//             className="w-[35px] h-[35px] object-cover rounded-full cursor-pointer"
//             src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//             alt=""
//           />
//         </div>
//         <div className="max-w-[70%]">
//           <p className="bg-[#e8e8e8] p-2 rounded-lg">
//             Hello Vietnam Lorem ipsum dolor sit, amet consectetur adipisicing
//             elit. Iusto cum quia tenetur, minus accusamus consequuntur cumque
//             doloremque, natus autem aliquid eius, pariatur exercitationem ut
//             esse impedit! Corporis repellendus officia et.
//           </p>
//           <span className="text-xs font-semibold text-[#b8b8b8]">16 June</span>
//           {/* <span className="text-xs font-semibold text-[#b8b8b8]">1m</span>
//           <span className="text-xs font-semibold text-[#b8b8b8]">1h</span>
//           <span className="text-xs font-semibold text-[#b8b8b8]">3d</span> */}
//         </div>
//       </div>

//       <div className="myChat flex flex-col items-end gap-1 py-3">
//         <p className="max-w-[70%] bg-[#5143d9] text-white p-2 rounded-lg">
//           Hello Vietnam Lorem ipsum dolor, sit amet consectetur aspernatur,
//           ratione unde! Unde obcaecati omnis totam odit! Lorem ipsum dolor sit
//           amet consectetur adipisicing elit. Repellat unde provident, veniam
//           sequi commodi tenetur! Accusantium, excepturi consequatur, expedita
//           illo rerum, esse harum sint impedit animi et saepe. Repellat, labore.
//         </p>
//         <span className="text-xs font-semibold text-[#b8b8b8]">1m ago</span>
//       </div>
//       <div ref={endRef}></div>
//     </div>
//   );
// };

// export default TextBox;


import { useEffect, useRef } from "react";

const TextBox = ({ messages, currentUserId }) => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-[72vh] overflow-scroll">
      {messages.map((message, index) => (
        <div
          key={index}
          className={
            message.senderId === currentUserId ? "myChat" : "friendChat"
          }
        >
        </div>
      ))}
      {/* <div ref={endRef}></div> */}
    </div>
  );
};

export default TextBox;