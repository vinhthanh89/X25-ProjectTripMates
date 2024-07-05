const Header = () => {
    return (
      <div className="flex flex-col p-3">
        <h1 className="font-bold mb-2">Chat</h1>
        <input
          type="text"
          placeholder="Search"
          className="input bg-transparent border-[lightgray] input-md font-bold"
        />
      </div>
    );
}

export default Header