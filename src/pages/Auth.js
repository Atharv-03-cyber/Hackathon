import React, { useState } from 'react';
import './Auth.css';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [message, setMessage] = useState('');
    
    const handleLogin = (e) => {
        e.preventDefault();
        const storedPassword = localStorage.getItem(username);
        if (storedPassword && storedPassword === password) {
            setMessage('Login successful');
            
            window.location.href = '/home';
        } else {
            setMessage('Invalid credentials');
        }
    };
    
    const handleRegister = (e) => {
        e.preventDefault();
        if (!registerUsername || !registerPassword) {
            setMessage('Both fields are required');
            return;
        }
        // Check if the username already exists
        if (localStorage.getItem(registerUsername)) {
            setMessage('Username already exists');
            return;
        }
        // Store user credentials locally
        localStorage.setItem(registerUsername, registerPassword);
        setMessage('Registration successful');
        // Automatically log in the user
        setUsername(registerUsername);
        setPassword(registerPassword);
        setIsLogin(true);
    };
    
    return (
        <div className="auth">
            <div className="auth-container">
                <div className={`auth-form ${isLogin ? 'login' : 'register'}`}>
                    <h2>{isLogin ? 'Login' : 'Register'}</h2>
                    <form onSubmit={isLogin ? handleLogin : handleRegister}>
                        {!isLogin && (
                            <div className="form-group">
                                <label htmlFor="register-username">Username</label>
                                <input
                                    type="text"
                                    id="register-username"
                                    value={registerUsername}
                                    onChange={(e) => setRegisterUsername(e.target.value)}
                                    required
                                />
                            </div>
                        )}
                        {!isLogin && (
                            <div className="form-group">
                                <label htmlFor="register-password">Password</label>
                                <input
                                    type="password"
                                    id="register-password"
                                    value={registerPassword}
                                    onChange={(e) => setRegisterPassword(e.target.value)}
                                    required
                                />
                            </div>
                        )}
                        {isLogin && (
                            <div className="form-group">
                                <label htmlFor="login-username">Username</label>
                                <input
                                    type="text"
                                    id="login-username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                        )}
                        {isLogin && (
                            <div className="form-group">
                                <label htmlFor="login-password">Password</label>
                                <input
                                    type="password"
                                    id="login-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        )}
                        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
                        {message && <p className="message">{message}</p>}
                    </form>
                    <p>
                        {isLogin ? (
                            <>
                                Don't have an account?{' '}
                                <button onClick={() => setIsLogin(false)}>Register here</button>
                            </>
                        ) : (
                            <>
                                Already have an account?{' '}
                                <button onClick={() => setIsLogin(true)}>Login here</button>
                            </>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Auth;
