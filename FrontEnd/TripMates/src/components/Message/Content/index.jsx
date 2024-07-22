/* eslint-disable react/prop-types */
// import Header from "./Header";
// import MessageInput from "./MessageInput";
// import TextBox from "./TextBox";

// const Content = () => {
//   return (
//     <div className="bg-white rounded-lg p-4">
//       <Header />
//       <TextBox />
//       <MessageInput/>
//     </div>
//   );
// };

// export default Content;

import TextBoxHeader from "./TextBoxHeader";
import MessageInput from "./MessageInput";
import TextBox from "./TextBox";

const Content = ({ selectedFriend, messages, onSendMessage , roomChatId }) => {
  if (!selectedFriend) {
    return (
      <div className="h-full flex items-center justify-center">
        Select a friend to start chatting
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white p-2 rounded-lg relative">
      <TextBoxHeader selectedFriend={selectedFriend}/>
      <TextBox messages={messages} selectedFriend={selectedFriend} roomChatId={roomChatId} />
      <MessageInput onSendMessage={onSendMessage} selectedFriend={selectedFriend} roomChatId={roomChatId} />
    </div>
  );
};

export default Content;
