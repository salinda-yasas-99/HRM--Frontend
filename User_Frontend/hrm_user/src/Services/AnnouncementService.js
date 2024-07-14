import axios from "axios";

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
      `http://localhost:8080/api/v1/announcement`
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("This is error", err);
  }
};
