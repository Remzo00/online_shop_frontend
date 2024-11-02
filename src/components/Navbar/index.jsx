import { Logo, Menu, MenuItem, Nav, StyledLink, LogoutButton } from './index.styled';
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
                <MenuItem>
                    <StyledLink to="/">Početna</StyledLink>
                </MenuItem>
                <MenuItem>
                    <StyledLink to="/products">Proizvodi</StyledLink>
                </MenuItem>
                <MenuItem>
                    <StyledLink to="/cart">🛒</StyledLink>
                </MenuItem>

                {isAuthenticated ? (
                    <MenuItem>
                        <LogoutButton onClick={handleLogout}>Odjava</LogoutButton>
                    </MenuItem>
                ) : (
                    <MenuItem>
                        <StyledLink to="/login">Prijava</StyledLink>
                    </MenuItem>
                )}
            </Menu>
        </Nav>
    );
}
