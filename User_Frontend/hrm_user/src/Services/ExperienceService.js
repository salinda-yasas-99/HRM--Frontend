import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export default API;

export const getExpereienceByUser = async () => {
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
      `http://localhost:8080/api/v1/work-experiences/user/${userID}`
    );
    return response.data;
  } catch (error) {
    console.log("Error ocurred while getting expereience", error);
  }
};

export const AddExpereince = async (data) => {
  const Token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");
  data.employeeId = uid;
  console.log("this is data is exp", data);
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.post(
      "http://localhost:8080/api/v1/work-experiences",
      data
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error ocurred while saving expereince", error);
  }
};

export const DeleteExperience = async (expId) => {
  const Token = localStorage.getItem("token");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.delete(
      `http://localhost:8080/api/v1/work-experiences/${expId}`
    );
    return response.data;
  } catch (error) {
    console.log("Error ocurred while deleting announcement", error);
  }
};
