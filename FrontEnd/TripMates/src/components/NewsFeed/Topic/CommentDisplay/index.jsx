const CommentDisplay = () => {
     const fakeUser = {
       fullname: <p>User</p>,
       avatar: (
         <img
           src="./public/profile-user.png"
           className="w-[2rem] h-[2rem] object-cover rounded-full border"
           alt="User Avatar"
         />
       ),
     };
  return (
    <ul className="flex flex-col gap-3 p-5">
      <div className="user flex items-center gap-2 cursor-pointer font-semibold">
        {fakeUser.avatar}
        {fakeUser.fullname}
      </div>
      <div className="comment-block border-b-2 pb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, officiis,
        autem soluta eum obcaecati necessitatibus, eveniet ab quis maiores in
        eaque id excepturi nobis? Quam natus dolores officiis et ratione!
      </div>
    </ul>
  );
}

export default CommentDisplay