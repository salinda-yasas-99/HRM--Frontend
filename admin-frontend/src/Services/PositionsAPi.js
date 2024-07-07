import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export default API;

export const getAllPositions = async () => {
  const Token = localStorage.getItem("token");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.get(
      "http://localhost:8080/api/v1/position/all"
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("This is error", err);
  }
};

export const DeletePositionById = async (positionID) => {
  const Token = localStorage.getItem("token");

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    // Construct the URL dynamically to include the employee ID
    const url = `http://localhost:8080/api/v1/position/delete/${positionID}`;

    const response = await authAxios.delete(url);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("This is error", err);
    throw err;
  }
};

export const AddPosition = async (position) => {
  const Token = localStorage.getItem("token");

  const addPosition = {
    positionName: position.positionName,
    positionDesc: position.positionDesc,
  };

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    // Construct the URL dynamically to include the employee ID
    const url = `http://localhost:8080/api/v1/position/add`;

    const response = await authAxios.post(url, addPosition);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("This is error", err);
    throw err;
  }
};

export const UpdatePositionByID = async (position, positionID) => {
  const Token = localStorage.getItem("token");

  const updtPosition = {
    positionName: position.positionName,
    positionDesc: position.positionDesc,
  };

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    withCredentials: true,
  });
  try {
    // Construct the URL dynamically to include the employee ID
    const url = `http://localhost:8080/api/v1/position/update/${positionID}`;

    const response = await authAxios.put(url, updtPosition);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("This is error", err);
    alert(err);
    throw err;
  }
};
