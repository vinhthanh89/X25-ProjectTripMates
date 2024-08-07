import cloudinary from "../configs/cloudinary.js";

import { getAvatarPublicId, handleUpload } from "../utils/handleUpload.js";
import User from "../model/user.model.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import { signAccessToken, signRefreshToken } from "../utils/jsonwebtoken.js";
import { validateData } from "../utils/validation.js";
import {
  changePasswordValidate,
  signupValidate,
} from "../validation/user.validate.js";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword } = req.body;

    const checkEmailExits = await User.findOne({ email });
    if (checkEmailExits) {
      return res.status(403).json({
        validateError: {
          name: "email",
          errorMessage: "Email already exists",
        },
      });
    }

    const validate = validateData(signupValidate, {
      fullName,
      email,
      password,
    });

    if (validate) {
      return res.status(403).json({
        validateError: validate,
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

    const findUser = await User.findById(newUser._id).select("-password");

    const accessToken = signAccessToken(findUser._id);
    const refreshToken = signRefreshToken(findUser._id);

    return res.status(201).json({
      message: "Sign up successfully",
      user: findUser,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await User.findOne({ email }).lean();
    if (!findUser) {
      return res.status(403).json({
        validateError: {
          name: "email",
          errorMessage: "Email does not exist",
        },
      });
    }

    const checkPassword = comparePassword(password, findUser.password);
    if (!checkPassword) {
      return res.status(403).json({
        validateError: {
          name: "password",
          errorMessage: "Password is wrong",
        },
      });
    }

    const accessToken = signAccessToken(findUser._id);
    const refreshToken = signRefreshToken(findUser._id);

    const { password: userPassword, ...returnUser } = findUser;

    return res.status(200).json({
      message: "Login Success",
      user: returnUser,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;

    const findUser = await User.findById(userId)
      .populate("follower")
      .select("-password");

    if (!findUser) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    return res.status(200).json({
      message: "Get User Successfully",
      findUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const editUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { fullName, birthday, gender, description } = req.body;
    const findUser = await User.findById(userId);
    if (!findUser) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    const userUpdated = await User.findByIdAndUpdate(
      userId,
      {
        fullName,
        birthday,
        gender,
        description,
      },
      { new: true }
    ).select("-password");

    return res.status(200).json({
      message: "User Update Successfully",
      userUpdated,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const changeUserPassword = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { oldPassword, password, confirmPassword } = req.body;

    const findUser = await User.findById(userId);
    if (!findUser) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    const checkPassword = comparePassword(oldPassword, findUser.password);

    if (!checkPassword) {
      return res.status(403).json({
        validateError: {
          name: "oldPassword",
          errorMessage: "Password is wrong",
        },
      });
    }

    const validate = validateData(changePasswordValidate, {
      password: password,
    });

    if (validate) {
      return res.status(403).json({
        validateError: validate,
      });
    }

    if (!(password === confirmPassword)) {
      return res.status(403).json({
        validateError: {
          name: "confirmPassword",
          errorMessage: "The new password does not match",
        },
      });
    }

    const hashedPassword = hashPassword(password);

    await User.findByIdAndUpdate(userId, { password: hashedPassword } , {new : true});

    return res.status(200).json({
      message: "Change Password Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const uploadUserAvatar = async (req, res) => {
  try {
    const userId = req.params.userId;
    const file = req.file;

    const b64 = Buffer.from(file.buffer).toString("base64");
    let dataURI = "data:" + file.mimetype + ";base64," + b64;

    const [result, findUser] = await Promise.all([
      handleUpload(dataURI),
      User.findById(userId).select("-password"),
    ]);

    if (!findUser) {
      if (result) {
        cloudinary.uploader.destroy(result.public_id);
      }

      return res.status(403).json({
        message: "User Id isn't exits",
      });
    }

    const oldAvatarPublicId = getAvatarPublicId(findUser.avatar);

    const userUploaded = await User.findByIdAndUpdate(
      findUser._id,
      { avatar: result.secure_url },
      { new: true }
    ).select("-password");

    if (oldAvatarPublicId !== "TripMates/profile-user_w32qio") {
      cloudinary.uploader.destroy(oldAvatarPublicId);
    }

    return res.status(200).json({
      message: "Upload Avatar Successfully",
      userUploaded,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};
