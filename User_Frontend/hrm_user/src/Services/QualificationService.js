import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export default API;

export const getQualificationByUser = async () => {
  const Token = localStorage.getItem("token");
  const userID = localStorage.getItem("uid");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.get(
      `http://localhost:8080/api/v1/qualification/user/${userID}`
    );
    return response.data;
  } catch (error) {
    console.log("Error ocurred while getting qualifications", error);
  }
};

export const AddQualification = async (data) => {
  const Token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");
  data.employeeId = uid;
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.post(
      "http://localhost:8080/api/v1/qualification",
      data
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error ocurred while saving new qualification", error);
  }
};

export const DeleteQualification = async (quliId) => {
  const Token = localStorage.getItem("token");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.delete(
      `http://localhost:8080/api/v1/qualification/${quliId}`
    );
    return response.data;
  } catch (error) {
    console.log("Error ocurred while deleting qualification", error);
  }
};
