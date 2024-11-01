import axios from "axios";
import { API_URL } from "../../api";

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/user/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error during registration: ", error);
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, credentials);
    return response.data;
  } catch (error) {
    console.error("Error during login: ", error);
    throw error;
  }
};
