import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [aadharNumber, setAadharNumber] = useState('');
    const [shopAddress, setShopAddress] = useState('');
    const [shopName, setShopName] = useState('');
    const navigate = useNavigate();
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phoneNumber':
                setPhoneNumber(value);
                break;
            case 'aadharNumber':
                setAadharNumber(value);
                break;
            case 'shopAddress':
                setShopAddress(value);
                break;
            case 'shopName':
                setShopName(value);
                break;
            default:
                break;
        }
    };

    const validateForm = (e) => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            e.preventDefault();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const data = {
            name,
            email,
            password,
            shopName,
            phoneNumber,
            aadharNumber,
            shopAddress,
        };

        try {
            // Making POST request using axios
            const response = await axios.post('http://localhost:2000/register', data);
            alert('Registration successful!');
            setTimeout(() => {
                navigate('/login'); // Redirect to login page after success
            }, 2000);
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Error registering user: ' + (error.response?.data || error.message));
        }
    };

    return (
        <>
        <div className="area">
            <ul className="circles">
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
        </div>
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

            <div id="headingLogin">
                <div className="registration-container">
                    <h3>Create Your Account</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                name="shopName"
                                value={shopName}
                                onChange={handleChange}
                                placeholder="Shop Name"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                name="aadharNumber"
                                value={aadharNumber}
                                onChange={handleChange}
                                placeholder="Aadhar Number"
                                pattern="[0-9]{12}"
                                title="Must be 12 digits"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                pattern="[0-9]{10}"
                                title="Must be 10 digits"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <textarea
                                name="shopAddress"
                                value={shopAddress}
                                onChange={handleChange}
                                placeholder="Shop Address"
                                required
                            ></textarea>
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder="Password"
                                minLength="8"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                placeholder="Confirm Password"
                                required
                            />
                        </div>
                        <button type="submit" className='mt-4'>
                            <i className="fas fa-user-plus"></i> Register
                        </button>
                        <div className="register-link pb-5">
                            <span>Already have an account?</span> <Link to="/login">Login here</Link>
                        </div>
                    </form>
                </div>
            </div>
            </>
    );
};

export default Register;
