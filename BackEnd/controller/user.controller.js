

import User from "../model/user.model.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import { signAccessToken, signRefreshToken } from "../utils/jsonwebtoken.js";
import { validateData } from "../utils/validation.js";
import { signupValidate } from "../validation/user.validate.js";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword } = req.body;

    const checkEmailExits = await User.findOne({ email });
    if (checkEmailExits) {
      return res.status(403).json({
        message: "Email already exists",
      });
    }

    const validate = validateData(signupValidate, {
      fullName,
      email,
      password,
    });

    if (validate) {
      return res.status(403).json({
        message: validate,
      });
    }

    if (password !== confirmPassword) {
      return res.status(403).json({
        message: "Password does not match",
      });
    }

    const hashedPassword = hashPassword(password);

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    const returnUser = { 
        id : newUser._id ,
        fullName ,
        email
     };

    return res.status(201).json({
      message: "Sign up successfully",
      returnUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const login = async (req , res) => {
  try {
    const { email, password } = req.body;

    const findUser = await User.findOne({ email }).lean();
    if (!findUser) {
      return res.status(403).json({
        message: "Email does not exist",
      });
    }

    const checkPassword = comparePassword(password, findUser.password);
    if (!checkPassword) {
      return res.status(403).json({
        message: "Password isn't correct",
      });
    }

    const accessToken = signAccessToken(findUser._id);
    const refreshToken = signRefreshToken(findUser._id);

    const { password: userPassword, ...returnUser } = findUser;

    return res.status(200).json({
        message : "Login Success",
        user : returnUser,
        accessToken,
        refreshToken
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const getUserById = async (req , res) => {
  try {
    const userId = req.params.userId

    const findUser = await User.findById(userId).select('-password')
    if(!findUser){
      return res.status(404).json({
        message : "User Not Found"
      })
    }

    return res.status(200).json({
      message : "Get User Successfully",
      findUser
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message : error
    })
  }
}

export const editUser = async ( req , res) => {
  try {
    const userId = req.params.userId
    const {fullName , birthday , age , gender , description} = req.body

    const findUser = await User.findById(userId)
    if(!findUser){
      return res.status(404).json({
        message : "User Not Found"
      })
    }

    const userUpdated = await User.findByIdAndUpdate(userId , {
      fullName,
      birthday,
      age,
      gender,
      description
    }, {new : true})

    return res.status(200).json({
      message : "User Update Successfully",
      userUpdated
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message : error
    })
  }
}