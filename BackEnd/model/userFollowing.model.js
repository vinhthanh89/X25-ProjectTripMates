import mongoose from "mongoose";

const UserFollowing = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    require: true,
  },
  usersFollowing: [
    {
      userFollow: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        require: true,
      },
    },
  ],
});

export default mongoose.model("userFollowings", UserFollowing);
