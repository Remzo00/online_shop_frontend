import axios from "axios";
import { API_URL } from "../../api";
export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products: ", error);
    throw error;
  }
};

export const searchProducts = async (name) => {
  try {
    const response = await axios.get(`${API_URL}/search`, {
      params: { name },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching products: ", error);
    throw error;
  }
};
