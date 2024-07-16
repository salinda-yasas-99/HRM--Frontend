import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export default API;

export const getExpereienceByUser = async (empId) => {
  const Token = localStorage.getItem("token");

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.get(
      `http://localhost:8080/api/v1/work-experiences/user/${empId}`
    );
    return response.data;
  } catch (error) {
    console.log("Error ocurred while getting expereience", error);
  }
};
