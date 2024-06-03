import { axiosAuthInstance, axiosInstance } from "./index.js";

export const login = ({ email, password }) => {
  return axiosInstance.post("/api/user/login", { email, password });
};

export const signup = ({ fullName, email, password, confirmPassword }) => {
  return axiosInstance.post("/api/user/signup", {
    fullName,
    email,
    password,
    confirmPassword,
  });
};

export const getUserById = (userId) => {
  return axiosAuthInstance.get(`/api/user/${userId}`);
};

export const editUser = (userId , formData ) => {
  return axiosAuthInstance.put(`/api/user/edit/${userId}` , formData )
}