

import UserFollowing from "../model/userFollowing.model.js";


export const checkUserIsFollow = async (req , res) => {
    try {
        const userLogin = req.user
        const userFollow = req.params.userFollow

        const findUser = await UserFollowing.findOne({ userId : userLogin });

        if(!findUser){
          return res.status(200).json({
            message : 'check ok',
            isFollow : false
          })
        }

        if(findUser){
          const findUsersFollowing = findUser.usersFollowing

          const checkUserIsFollow = findUsersFollowing.some(
              (user) => user.userFollow.toString() === userFollow
            );
  
          return res.status(200).json({
              message : 'check ok',
              isFollow : checkUserIsFollow
          })
        }

       

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error
        })
    }
}

export const followUser = async (req, res) => {
  try {
    const userLogin = req.user;
    const userFollow = req.params.userFollow;
    const findUser = await UserFollowing.findOne({ userId : userLogin });

    if (!findUser) {
      const usersFollow = await UserFollowing.create({
        userId: userLogin,
        usersFollowing: [
          {
            userFollow: userFollow,
          },
        ],
      });

      return res.status(201).json({
        message: "Follow user success",
        followingUsers: usersFollow.usersFollowing,
      });
    }

    if (findUser) {
      const checkUserIsFollow = findUser.usersFollowing.some(
        (user) => user.userFollow.toString() === userFollow
      );
      if (checkUserIsFollow) {
        return res.status(200).json({
          message: "user followed",
        });
      }

      if (!checkUserIsFollow) {
        const newUsersFollowing = await UserFollowing.findOneAndUpdate(
          { userId: userLogin },
          {
            $addToSet: {
              usersFollowing: {
                userFollow: userFollow,
              },
            },
          },
          { new: true }
        );
        
        return res.status(201).json({
          message: "Follow user success",
          followingUsers: newUsersFollowing.usersFollowing,
        });
      }
    }

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const unfollowUser = async (req , res) => {
    try {
        const userLogin = req.user;
        const userFollow = req.params.userFollow;
        const findUser = await UserFollowing.findOne({ userId : userLogin });

        if(!findUser){
            return res.status(404).json({
                message : 'Not Found'
            })
        }

        if(findUser){
            const newUsersFollowing = await UserFollowing.findOneAndUpdate({userId} , {
                $pull : {
                    usersFollowing : {userFollow : userFollow}
                }
            } , {new : true})

            return res.status(200).json({
                message : 'unfollow user success',
                usersFollowing : newUsersFollowing.usersFollowing
            })
        }


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error
        })
    }
}

export const getDataUserFollowing = async (req , res) => {
  try {
    const userProfileId = req.params.userProfileId

    const findUserFollowing = await UserFollowing.findOne({userId : userProfileId}).populate('usersFollowing.userFollow').exec()

    if(!findUserFollowing){
      return res.status(200).json({
        message : 'Get Data Users Following Success',
        usersFollowing  : []
      })
    }

    if(findUserFollowing){
      return res.status(200).json({
        message : 'Get Data Users Following Success',
        usersFollowing  : findUserFollowing.usersFollowing
      })
    }

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message : error
    })
  }
}

export const getDataUserFollower = async (req , res) => {
  try {
    const userProfileId = req.params.userProfileId

    const findUsersFollower = await UserFollowing.find(
      {usersFollowing : {
        $elemMatch : {
          userFollow : userProfileId
        }
      }}).populate('userId')

    if(findUsersFollower.length === 0){
      return res.status(200).json({
        message : 'Get Data Users Follower Success',
        usersFollower : []
      })
    }

    if(findUsersFollower.length > 0){
      const usersFollower = findUsersFollower.map(user => (user.userId))

      return res.status(200).json({
        message : 'Get Data Users Follower Success',
        usersFollower : usersFollower
      })
    }

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message : error
    })
  }
}
