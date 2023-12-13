import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import './login.css';

function Login({setLoggedUser}) {
    const [emaillog, setEmaillog] = useState('');
    const [passwordlog, setPasswordlog] = useState('');
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);

    const loggedInUserIndex = localStorage.getItem("loggedInUserIndex");
    if (loggedInUserIndex) {
        return <Navigate to="/HomePage" />;
    }


    const handleLogin = (e) => {
        e.preventDefault();

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        if (existingUsers.length === 0) {
            setFlag(true);
            alert('No user data found. Please sign up.');
            return;
        }

        const user = existingUsers.find((user) => user.email === emaillog);

        if (!emaillog || !passwordlog || !user || user.password !== passwordlog) {
            setFlag(true);
            alert('Enter valid email and password.');
        } else {
            // setLoggedUser(existingUsers.indexOf(user));
            localStorage.setItem('loggedInUserIndex', existingUsers.indexOf(user));
            window.location.reload();
            setHome(!home);
            setFlag(false);

        }
    }

    return (
        <div className="container">
            {home ? (
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={(event) => setEmaillog(event.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={(event) => setPasswordlog(event.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-dark btn-lg btn-block">
                        LOGIN ME
                    </button>
                    <p>
                        You are not a member? <a href={'/'}>Sign up</a>
                    </p>
                </form>
            ) : (
                <Navigate to="/HomePage" />
            )}
        </div>
    );
}

export default Login;
