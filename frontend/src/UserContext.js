import { createContext, useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            const decoded = jwtDecode(token);
            console.log('decoded:', decoded);
            setUser({
                username: decoded.username,
                email: decoded.email,
                firstname: decoded.firstname,
                lastname: decoded.lastname,
                membership: decoded.membership,
                admin: decoded.admin,
                id: decoded._id
            });
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('jwtToken', token);
        const decoded = jwtDecode(token);
        setUser({
            username: decoded.username,
            email: decoded.email,
            firstname: decoded.firstname,
            lastname: decoded.lastname,
            membership: decoded.membership,
            admin: decoded.admin
        });
    }

    const logout = () => {
        localStorage.removeItem('jwtToken');
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            { children }
        </UserContext.Provider>
    )
};

export default UserContext;