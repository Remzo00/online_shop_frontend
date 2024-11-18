import axios from "axios";
import { API_URL } from "../../api";

export const addOrderToCart = async (cart) => {
  try {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    console.log("User ID:", userId);

    if (!userId) {
      console.error("User ID is missing");
      return;
    }

    const response = await axios.post(
      `${API_URL}/orders`,
      {
        userId,
        products: cart.map((item) => ({
          productId: item._id,
          quantity: item.quantity,
        })),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error adding product to cart: ",
      error.response || error.message
    );
    throw error;
  }
};
