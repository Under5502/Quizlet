import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, username, role, image) => {
  //submit data
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("v1/participant", data);
};

const getAllUsers = () => {
  return axios.get("v1/participant/all");
};

const putUpdateUser = (id, username, role, image) => {
  //submit data
  const data = new FormData();

  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put("v1/participant", data);
};

const deleteUser = (userid) => {
  //submit data

  return axios.delete("v1/participant", { data: { id: userid } });
};

const getUserWithPaginate = (page, limit) => {
  //submit data

  return axios.get(`v1/participant?page=${page}&limit=${limit}`);
};

const postLogin = (email, password) => {
  //submit data

  return axios.post(`v1/login`, { email: email, password: password });
};

export {
  postCreateNewUser,
  getAllUsers,
  putUpdateUser,
  deleteUser,
  getUserWithPaginate,
  postLogin,
};
