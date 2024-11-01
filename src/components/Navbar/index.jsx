// Navbar.jsx
import { Logo, Menu, MenuItem, Nav } from './index.styled';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
    const { isAuthenticated, logout } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <Nav>
            <Logo>Online Shop</Logo>
            <Menu>
                <MenuItem><Link to="/" style={{ color: 'white' }}>Početna</Link></MenuItem>
                <MenuItem><Link to="/products" style={{ color: 'white' }}>Proizvodi</Link></MenuItem>
                <MenuItem><Link to="/cart" style={{ color: 'white' }}>🛒</Link></MenuItem>

                {isAuthenticated ? (
                    <>
                        <MenuItem>
                            <button onClick={handleLogout} style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}>
                                Odjava
                            </button>
                        </MenuItem>
                    </>
                ) : (
                    <MenuItem><Link to="/login" style={{ color: 'white' }}>Prijava</Link></MenuItem>
                )}
            </Menu>
        </Nav>
    );
}
