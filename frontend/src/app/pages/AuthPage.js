import { useState } from "react";
import SignUp from "../../components/SignUp";
import Login from "../../components/Login";
import './pageStyles.css';

const AuthPage = () => {
    const [activeForm, setActiveForm] = useState('login'); // Starts the default form to login

    return (
        <div className="auth-page-container">
            <div className="auth-toggle-buttons-box">
                <button onClick={() => setActiveForm('login')} className={activeForm === 'login' ? 'auth-page-button-active' : 'auth-page-button'}>Login</button>
                <button onClick={() => setActiveForm('signup')} className={activeForm === 'signup' ? 'auth-page-button-active' : 'auth-page-button'}>Sign Up</button>
            </div>

            <div className="auth-form-container">
                {activeForm === 'login' ? <Login /> : <SignUp />}
            </div>
        </div>
    );
};

export default AuthPage;