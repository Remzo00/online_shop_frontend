/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { login, register } from "../services/auth";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const loginUser = async (credentials) => {
        try {
          const data = await login(credentials);
          setUser(data.user);
          setIsAuthenticated(true);
          localStorage.setItem('token', data.token);
        } catch (error) {
          console.error("Login failed", error);
        }
    };

    const registerUser = async (credentials) => {
        try {
          const data = await register(credentials);
          setUser(data.user);
          setIsAuthenticated(true);
          localStorage.setItem('token', data.token);
        } catch (error) {
          console.error("Registration failed", error);
        }
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('token');
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          setIsAuthenticated(true);
        }
    }, []);

    return(
        <AppContext.Provider value={{user, isAuthenticated, loginUser, registerUser, logout}}>
            {children}
        </AppContext.Provider>
    )
}