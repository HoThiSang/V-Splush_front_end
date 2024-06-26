import React, { useEffect, useRef, useState } from 'react';
import axiosService from "../../services/configAxios";
import { Link, useNavigate } from "react-router-dom"

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [nameFocus, setNameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);
    const [addressFocus, setAddressFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

    const [validName, setValidName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPhone, setValidPhone] = useState(false);
    const [validAddress, setValidAddress] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [validConfirmPassword, setValidConfirmPassword] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        const USER_REGEX = /^[a-zA-Z0-9]+$/;
        const result = USER_REGEX.test(name);
        setValidName(result);
    }, [name])

    useEffect(() => {
        const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email])

    useEffect(() => {
        const PHONE_REGEX = /^\d{10}$/;
        const result = PHONE_REGEX.test(phone);
        setValidPhone(result);
    }, [phone])

    useEffect(() => {
        const ADDRESS_REGEX = /^[a-zA-Z0-9\s]+$/;
        const result = ADDRESS_REGEX.test(address);
        setValidAddress(result);
    }, [address])

    useEffect(() => {
        const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const result = PASSWORD_REGEX.test(password);
        setValidPassword(result);
    }, [password])

    useEffect(() => {
        setValidConfirmPassword(password === confirmPassword);
    }, [password, confirmPassword])

    useEffect(() => {
        setErrMsg('');
    },[name, email, phone, address, password, confirmPassword])

    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        try{
            const response = await axiosService.post("/register", {name, email, phone, address, password, confirmPassword});
            if (response.data.token) {
                localStorage.setItem('authToken', response.data.token);
                setName("");
                setEmail("");
                setPhone("");
                setAddress("");
                setPassword("");
                setConfirmPassword("");
                navigate("/login");
            } else {
                console.log(response.data.error);
            }
        } catch(e){
            console.log(e);
        }

    }

    return (
        <div className="registration-form">
            <form onSubmit={handleRegister} className='form-rigister'>
            <h2>Registration</h2>
                <div className="input-box">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        autoComplete="off"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setNameFocus(true)}
                        onBlur={() => setNameFocus(false)}
                        
                    />
                    {nameFocus && name && !validName && (
                        <p>Please enter a valid username.</p>
                    )}
                </div>

                <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}

                    />
                    {emailFocus && email && !validEmail && (
                        <p>Please enter a valid email address.</p>
                    )}
                </div>

                <div className="input-box">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone number"
                        autoComplete="off"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        onFocus={() => setPhoneFocus(true)}
                        onBlur={() => setPhoneFocus(false)}
                        
                    />
                    {phoneFocus && phone && !validPhone && (
                        <p>Please enter a valid phone number.</p>
                    )}
                </div>

                <div className="input-box">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        placeholder="Enter your address"
                        autoComplete="off"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        onFocus={() => setAddressFocus(true)}
                        onBlur={() => setAddressFocus(false)}
                        
                    />
                    {addressFocus && address && !validAddress && (
                        <p>Please enter a valid address.</p>
                    )}
                </div>

                <div className="input-box">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}
                       
                    />
                    {passwordFocus && password && !validPassword && (
                        <p>
                            Password must be at least 8 characters long and contain at least one
                            uppercase letter, one lowercase letter, one number, and one special
                            character.
                        </p>
                    )}
                </div>

                <div className="input-box">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        type="password"
                        id="confirm-password"
                        placeholder="Re-enter your password"
                        autoComplete="off"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onFocus={() => setConfirmPasswordFocus(true)}
                        onBlur={() => setConfirmPasswordFocus(false)}
                        
                    />
                    {confirmPasswordFocus && confirmPassword && !validConfirmPassword && (
                        <p>Passwords do not match.</p>
                    )}
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;