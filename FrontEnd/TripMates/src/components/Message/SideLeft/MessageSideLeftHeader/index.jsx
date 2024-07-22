

const MessageSideLeftHeader = () => {
    return (
      <div className="flex flex-col p-3 border-b-2">
        <input
          type="text"
          placeholder="Search a friend"
          className="input bg-transparent border-[lightgray] input-md font-bold"
        />
      </div>
    );
}

export default MessageSideLeftHeader