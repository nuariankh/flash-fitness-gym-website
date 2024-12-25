import { useState } from "react";
import './SignUpLoginStyles.css';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [membership, setMembership] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const payload = {
                firstName,
                lastName,
                username,
                email,
                password,
                membership,
                profilePicture: profilePicture ? profilePicture.name : null, // Send just the filename if needed
            };

            const response = await fetch(`${process.env.REACT_APP_API_URL}/users/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(payload),
            })

            if (response.ok) {
                const data = await response.json();
                setMessage(data.message);
                setFirstName('');
                setLastName('');
                setUsername('');
                setEmail('');
                setPassword('');
                setMembership('');
                setProfilePicture(null);
            } else {
                const errorData = await response.json();
                setMessage(errorData.message || 'Something went wrong :(');
            }
        } catch (err) {
            setMessage('An error occured while processing your request');
        } finally {
            setLoading(false)
        }
};

    return (
        <div>
            <h2 className="form-group-heading">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="sign-up-login-form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="sign-up-login-form-group">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
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
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                <div className="sign-up-login-form-group">
                    <label>Membership:</label>
                    <select 
                        name="membership"
                        value={membership}
                        onChange={(e) => setMembership(e.target.value)}
                    >
                        <option value="Basic">Basic Membership</option>
                        <option value="Standard">Standard Membership</option>
                        <option value="Premium">Premium Membership</option>
                    </select>
                </div>
                <div className="sign-up-login-form-group">
                    <label>Profile Picture:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setProfilePicture(e.target.files[0])}
                    />
                </div>
                
                <div>
                    <button type="submit" disabled={loading} className="sign-up-login-button">
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                </div>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default SignUp;

