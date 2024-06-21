const UserJoined = () => {
  return (
    <div >
      <div className="avatar-group -space-x-3">
        <div className="avatar w-9 border-white">
          <div className="w-full rounded-full">
            <img
              src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full object-fill"
            />
          </div>
        </div>
        <div className="avatar w-9 border-white">
          <div className="w-full rounded-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              className="w-full object-fill"
            />
          </div>
        </div>
        <div className="avatar placeholder w-9 border-white">
          <div className="w-full bg-[#f2f2f2] border-transparent text-[0.7rem]">
            <span>+2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserJoined