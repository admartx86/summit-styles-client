import React, { useState } from 'react';
import axios from 'axios';

const MyAccount = () => {
  
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/login`,
            { username: loginUsername, password: loginPassword },
            { withCredentials: true }
            );
            console.log('Login post request successful', res.data);
        } catch (error) {
            console.log('Login post request failed', error);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/register`, 
            { username: registerUsername, password: registerPassword },
            { withCredentials: true }
            );
            console.log('Register post request successful', res.data);
        } catch (error) {
            console.log('Register post request failed', error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    value={registerUsername}
                    onChange={(e) => setRegisterUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );

};

export default MyAccount;