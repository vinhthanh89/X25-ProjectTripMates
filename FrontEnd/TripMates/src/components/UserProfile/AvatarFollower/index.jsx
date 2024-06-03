

const AvatarFollower = () => {
  return (
    <div>
              <div className="flex flex-col items-center gap-3 pt-[15px]">
          <img
            className="w-[70px] h-[70px] object-cover rounded-full"
            src={userProfile.avatar}
            alt=""
          />
          <div>
            <h1 className="text-lg font-bold">{userProfile.fullName}</h1>
          </div>
        </div>
    </div>
  )
}

export default AvatarFollower
