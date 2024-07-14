import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export default API;

export const getAllAnnouncements = async () => {
  const Token = localStorage.getItem("token");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.get(
      "http://localhost:8080/api/v1/announcement"
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error ocurred while getting all announcements", error);
  }
};

export const postAnnouncement = async (data) => {
  const Token = localStorage.getItem("token");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.post(
      "http://localhost:8080/api/v1/announcement",
      data
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error ocurred while saving new announcement", error);
  }
};

export const updateAnnouncement = async (data) => {
  const Token = localStorage.getItem("token");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.put(
      `http://localhost:8080/api/v1/announcement/${data?.announcementId}`,
      data
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error ocurred while updating announcement", error);
  }
};

export const deleteeAnnouncement = async (announcementId) => {
  const Token = localStorage.getItem("token");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.delete(
      `http://localhost:8080/api/v1/announcement/${announcementId}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error ocurred while deleting announcement", error);
  }
};
