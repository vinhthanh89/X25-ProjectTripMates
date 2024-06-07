import cloudinary from "../configs/cloudinary.js";

export const handleUpload = async (file) => {
  const response = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
    folder: "TripMates",
    upload_preset: "resize image",
  });
  return response;
};

export const getAvatarPublicId = (avatarUrl) => {
  const splitedAvatar = avatarUrl.split("/").reverse();
  const fileName = splitedAvatar[0].split(".");

  const avatar = splitedAvatar[1] + "/" + fileName[0];

  return avatar
};
