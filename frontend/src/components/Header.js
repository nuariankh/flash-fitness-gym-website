import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import './HeaderStyles.css'
import { NavLink, Link } from 'react-router-dom';
import FlashFitnessLogo from '../app/assets/img/logo/flash-fitness-logo.png';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from 'react';

/* 
LIGHT-BLUE: #7CD0FA
YELLOW: #FDC933
DARK-BLUE: #002339
*/

const Header = () => {

    const [username, setUsername] = useState('');

    useEffect(() => {
        const token = Cookies.get('jwtToken');  // Or get from localStorage
        console.log('Token:', token);  // Log the token to make sure it's a string
        if (token) {
            try {
                // Decode the JWT token to extract the username
                const decoded = jwtDecode(token);
                console.log('Decoded Token:', decoded);
                if (decoded && decoded.username) {
                    setUsername(decoded.username);  // Set the username if it exists in decoded
                } else {
                    console.warn('Username not found in token payload');
                }
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        }
    }, []);

    return (
        <Navbar dark sticky='top' expand='md' className="mb-0 m-0" style={{width: '100vw'}}>
            <NavbarBrand className="header-container">
                <Link to='/' style={{ textDecoration: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center'}}>
                    <img className="align-top" src={FlashFitnessLogo} alt="Flash Fitness Logo" style={{width: "5em", height: "5em"}} />
                    <h1 class="hero-header-text" style={{color: "#7CD0FA", fontSize: '1.5rem', marginRight: '0' }}>Flash Fitness</h1>
                </div>
                    
                </Link>
            </NavbarBrand>
            
            <Nav className="ms-auto m-3" navbar>
                <NavItem>
                    <NavLink className="nav-link" to='/'>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to='/workout-builder'>Workout Builder</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to='/classes'>Classes</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to='/trainers'>Trainers</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to='/about'>About</NavLink>
                </NavItem>
                <NavItem>
                    {username && <span>Welcome, {username}!</span>}
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Header;