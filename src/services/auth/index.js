import axios from "axios";
import { API_URL } from "../../api";

export const register = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    console.log("Success:", data);
    return data;
  } catch (error) {
    console.error("Error during registration: ", error);
    throw error;
  }
};

export const login = () => {
  try {
    const response = axios.post(`${API_URL}/user/login`);
    return response.data;
  } catch (error) {
    console.error("Error during login: ", error);
    throw error;
  }
};
