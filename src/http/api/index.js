import axios from "axios";
import { BASE_URL } from "../constant";
import { getToken } from "../tokenService";

const client = axios.create({
  baseURL: BASE_URL
});
client.interceptors.request.use(
  (request) => {
    const token = getToken();
    if (!!token) {
      request.headers.Authorization = `${token}`;
      request.headers["Access-Control-Allow-Origin"] =
        "http://localhost:3001";
      // request.headers.Accept = "application/form-data";
      // request.headers["Content-Type"] = "application/json";
    }

    return request;
  },

  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// const getUrlPaged =
//   (url) =>
//   ({ page, per_page }) =>
//     `${url}?page=${page}&per_page=${per_page}`;

export const Client = {
  get: (url, params) => client.get(url, params),
  post: (url, params) => client.post(url, params),
  delete: (url, params) => client.delete(url, params),
  patch: (url, params) => client.patch(url, params),
  put: (url, params) => client.put(url, params),
  userProfile: (params) => client.get("/api/auth/userProfile", params),


  attractionsUpdate: (params) => client.put("/auth/attractions/update", params),
  login: (params) => client.post("/api/auth/signIn", params),
  logout: (params) => client.post("/logout", params),
  uploadUserProfileImage: (params) => client.post("/upload/image", params),
  update: (params) => client.put("/users/update", params),
  deleteUser: (params) => client.delete(`/users/delete`, params),
  users: (url, params) => client.get(`/auth/user/${url}`, params),
  userList: (params) => client.get(`/users`, params),
  userDetail: (url, params) => client.get(`/users/${url}`, params),
  signIn: (params) => client.post("/users/create", params),
  addAttraction: (params) => client.post("/auth/attractions/create", params),
  allAttractions: (params) => client.get("/attractions", params),
  getAttractionsPaged: (params) => client.get("/attractions", { params }),
  getUsersPaged: (params) => client.get("/users", { params })
  // getUserPaged: (params) => client.get("/users", { params })
};