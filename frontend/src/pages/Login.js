import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import axios from 'axios';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // To store error message
    const navigate = useNavigate(); // For redirecting to dashboard after login

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form from refreshing the page

        const credentials = { email, password };

        try {
            const response = await axios.post('http://localhost:2000/login', credentials, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                // Redirect to dashboard if login is successful
                navigate('/dashboard');
            }
        } catch (err) {
            if (err.response) {
                // If the error comes from the server (e.g., invalid credentials)
                setError(err.response.data || 'Error logging in');
            } else {
                setError('Network error or server is down');
            }
        }
    };


    return (
        <div className="area">
            <ul className="circles">
                {/* Circle animations */}
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            {/* Header with Navbar */}
            <header>
                <nav className="navbar">
                    <div className="container">
                        <img src="/assets/logos.png" alt="Logo" />
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="#contact">Contact Us</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Login Form */}
            <div id="headingLogin" className="pt-0">
                <div className="login-container mt-0">
                    <h3>Welcome Back</h3>
                    <p>Login to manage your shop effortlessly</p>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                id="username"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <i
                                className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'} show-password-icon`}
                                onClick={togglePasswordVisibility}
                            ></i>
                        </div>
                        <button type="submit">
                            <i className="fas fa-sign-in-alt"></i> Login
                        </button>
                    </form>
                    {error && <p className="error-message">{alert(error)}</p>} {/* Display error message */}
                    <div className="register-link">
                        <span>New here?</span> <Link to="/register">Create an account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
