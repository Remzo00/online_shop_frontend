import './App.css'
import { Navbar } from './components/Navbar'
import {  Routes, Route } from "react-router-dom";
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { CartPage } from './pages/CartPage'
import Login  from './pages/Login'
import Register from './pages/Register'
import AuthLayer from './layer';
import Profile from './pages/Profile';
function App() {
  return (
    <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/"
                    element={
                        <AuthLayer>
                            <Navbar /> 
                            <Home />
                        </AuthLayer>
                    }
                />
                <Route
                    path="/products"
                    element={
                        <AuthLayer>
                            <Navbar />
                            <Products />
                        </AuthLayer>
                    }
                />
                 <Route
                    path="/cart"
                    element={
                        <AuthLayer>
                            <Navbar />
                            <CartPage />
                        </AuthLayer>
                    }
                />
                 <Route
                    path="/profile"
                    element={
                        <AuthLayer>
                            <Navbar />
                            <Profile />
                        </AuthLayer>
                    }
                />
            </Routes>
        </>
  )
}

export default App
