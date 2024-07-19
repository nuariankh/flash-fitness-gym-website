import {
    Navbar,
    NavbarBrand,
    Container,
    Nav,
    NavItem,
    NavbarToggler,
    Collapse
} from 'reactstrap';
import './HeaderStyles.css'
import { NavLink, Link } from 'react-router-dom';
import FlashFitnessLogo from '../app/assets/img/logo/flash-fitness-logo.png';

/* 
LIGHT-BLUE: #7CD0FA
YELLOW: #FDC933
DARK-BLUE: #002339
*/

const Header = () => {

    return (
        <Navbar dark sticky='top' expand='md' className="mb-0 m-0" style={{width: '100vw'}}>
            <NavbarBrand className="header-container">
                <Link to='/' style={{ textDecoration: 'none' }}>
                <div style={{ display: 'flex' }}>
                    <img className="align-top header-logo" src={FlashFitnessLogo} alt="Flash Fitness Logo" style={{width: "100px", height: "100px"}} />
                    <h1 class="hero-header-text" style={{color: "#7CD0FA", fontSize: '2em', marginRight: '0' }}>Flash Fitness</h1>
                </div>
                    
                </Link>
            </NavbarBrand>
            
            <Nav className="ms-auto" navbar>
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
            </Nav>
        </Navbar>
    )
}

export default Header;