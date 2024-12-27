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
    const [profilePicture, setProfilePicture] = useState(null);

    console.log(user);

    useEffect(() => {
        const fetchProfilePicture = async () => {
            if (user && user.id) {
                try {
                    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${user.id}/profile-picture`);
                    const data = response.json();
                    if (response.ok && data.profilePicture) {
                        setProfilePicture(`${process.env.REACT_APP_API_URL}/uploads/${data.profilePicture}`);
                        console.log('Profile Picture: ', profilePicture);
                    } else {
                        console.log(data);
                    }
                } catch (error) {
                    console.error('Error fetching profile picture: ', error)
                }
            }
        };

        fetchProfilePicture();
    }, [user]);

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

                <div>
                    {!user ? (
                        <div id='signup-login-box'>
                            <NavItem>
                                <NavLink className='nav-link' to='/auth-page'>Login or Sign Up</NavLink>
                            </NavItem>
                        </div>
                    ) : (
                        <NavItem>
                            <NavLink className='nav-link' to='/' onClick={logout}>Logout</NavLink>
                        </NavItem>
                    )}
                </div>
                <NavItem>
                    <NavLink to='/user-dashboard'>
                        <div id='hello-user-box'>
                            {user && user.username && user.firstName ? (
                                <div>
                                    <img 
                                        src={profilePicture}
                                        alt='User profile picture'
                                        className='profile-picture'
                                    />
                                    <p>{user.firstName}!</p>
                                </div>
                            ) : (
                                <p>Welcome, Guest!</p>
                            )}
                        </div>
                    </NavLink>
                </NavItem>
                
            </Nav>
        </Navbar>
    )
};

export default Header;