import { useState, useContext } from "react";
import Cookies from 'js-cookie';
import UserContext from "../UserContext";
import { jwtDecode } from 'jwt-decode'; 



const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState('');

    const { login } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const data = await response.json();
                
                if (data.success && typeof data.token === 'string') {
                    login(data.token);

                    setMessage('Login successful');
                }
                
            } else {
                const errorData = await response.json();
                setMessage(errorData.message || 'Login failed, please try again.');
            }
        } catch (error) {
            setMessage('An error occured while processing your request: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2 className="form-group-heading">Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className="sign-up-login-form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="sign-up-login-form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
            <button type="submit" className="sign-up-login-button">Login</button>
            </form>

            {message && <p>{message}</p>}
        </div>
        
    );
};

export default Login;