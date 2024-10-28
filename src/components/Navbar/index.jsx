import { Logo, Menu, MenuItem, Nav } from './index.styled';
import { Link } from 'react-router-dom';


export function Navbar() {
    return(
    <Nav>
        <Logo>Online Shop</Logo>
        <Menu>
        <MenuItem><Link to="/" style={{ color: 'white' }}>Početna</Link></MenuItem>
        <MenuItem><Link to="/products" style={{ color: 'white' }}>Proizvodi</Link></MenuItem>
            <MenuItem>O nama</MenuItem>
            <MenuItem>Kontakt</MenuItem>
            <MenuItem><Link to="/cart" style={{ color: 'white' }}>🛒</Link></MenuItem>
        </Menu>
    </Nav>
    )
}