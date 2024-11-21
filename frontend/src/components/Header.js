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
import { useState, useEffect, useContext } from 'react';
import UserContext from '../UserContext';

/* 
LIGHT-BLUE: #7CD0FA
YELLOW: #FDC933
DARK-BLUE: #002339
*/

const Header = () => {

    const {user, logout} = useContext(UserContext);

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
                    <NavLink className='nav-link' to='/'>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/workout-builder'>Workout Builder</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/classes'>Classes</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/trainers'>Trainers</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/about'>About</NavLink>
                </NavItem>

                <div id='signup-login-box'>
                    {!user ? (
                        <>
                            <NavItem>
                                <NavLink className='nav-link' to='/signup'>Sign Up</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/login'>Login</NavLink>
                            </NavItem>
                        </>
                    ) : (
                        <NavItem>
                            <NavLink className='nav-link' onClick={logout}>Logout</NavLink>
                        </NavItem>
                    )}
                </div>
                
                <div>
                    {user && user.username && user.firstname ? (
                        <p>{user.firstname}!</p>
                    ) : (
                        <p>Welcome, Guest!</p>
                    )}
                </div>
            </Nav>
        </Navbar>
    )
}

export default Header;