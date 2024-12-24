/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { login, register } from "../services/auth";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [cart, setCart] = useState([]);

    const loginUser = async (credentials) => {
      try {
        const data = await login(credentials);
        setUser(data.user);
        setIsAuthenticated(true);
        localStorage.setItem('token', data.token.token);
        localStorage.setItem('userId', data.token.user._id);
      } catch (error) {
        console.error("Login failed", error);
      }
  };
  const registerUser = async (credentials) => {
    try {
        const data = await register(credentials);

        if (data && data._id) {
            setUser(data);
            setIsAuthenticated(true);

            console.log("Registration successful");
            alert("Registration successful!");
        } else {
            console.error("Invalid response format:", data);
            alert("Registration failed due to unexpected response.");
        }
    } catch (error) {
        console.error("Registration failed", error);
        alert("An error occurred during registration. Please try again.");
    }
};


    const addToCart = async (product) => {
      setCart(prevCart => {
          const existingProductIndex = prevCart.findIndex(item => item._id === product._id);
          
          if (existingProductIndex !== -1) {
              const newCart = [...prevCart];
              newCart[existingProductIndex].quantity += 1;
              return newCart;
          } else {
              return [...prevCart, { ...product, quantity: 1 }];
          }
      });
  };  

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item._id !== productId));
};

const updateQuantity = (productId, quantity) => {
    setCart((prevCart) => prevCart.map(item => item._id === productId ? { ...item, quantity } : item));
};

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('token');
        localStorage.removeItem('userId');    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        if (token && userId) {
          setUser({ _id: userId });
          setIsAuthenticated(true);
        }

        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    return(
        <AppContext.Provider value={{user, isAuthenticated, loginUser, registerUser, logout, cart, addToCart, removeFromCart, updateQuantity}}>
            {children}
        </AppContext.Provider>
    )
}