import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function AuthLayer({ children }) {
  const { isAuthenticated } = useContext(AppContext);

  // Ako nije autentifikovan, vrati ga na login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Ako je autentifikovan, prikaži decu (npr. Home, Navbar, itd.)
  return children;

  //   return isAuthenticated ? <Outlet /> : null;
}
