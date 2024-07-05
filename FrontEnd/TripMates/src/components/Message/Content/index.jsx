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

import TextBox from "./TextBox";
import MessageInput from "./MessageInput";
import Header from "./Header";

const Content = ({ selectedFriend, messages, onSendMessage }) => {
  if (!selectedFriend) {
    return (
      <div className="h-full flex items-center justify-center">
        Select a friend to start chatting
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white p-2 rounded-lg">
      <Header selectedFriend={selectedFriend}/>
      <TextBox messages={messages} currentUserId={selectedFriend._id} />
      <MessageInput onSendMessage={onSendMessage} />
    </div>
  );
};

export default Content;
