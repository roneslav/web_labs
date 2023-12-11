import React, { useState } from 'react';


import './login.css'
import {Alert} from "react-bootstrap";
import HomePage from "../home/HomePage";
import {Navigate} from "react-router-dom";



function Login() {
    const [emaillog, setEmaillog] = useState("");
    const [passwordlog, setPasswordlog] = useState("");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);

    function handleLogin(e) {
        e.preventDefault();
        let mail = localStorage.getItem("Email").replace(/"/g, "");
        let pass = localStorage.getItem("Password").replace(/"/g, "");

        if (!emaillog || !passwordlog) {
            setFlag(true);
            alert("Please fill correct info");
        } else if (passwordlog !== pass || emaillog !==mail) {
            setFlag(true);
            alert("Enter valid email and password.")
        } else {
            setHome(!home);
            setFlag(false);
        }
    }

    return(
        <div className="container">
            {home ? (
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className='form-group'>
                    <label>Email</label>
                    <input type='email' className='form-control' placeholder='Enter email'
                           onChange={(event) => setEmaillog(event.target.value)}
                           required/>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' className='form-control' placeholder='Enter password'
                           onChange={(event) => setPasswordlog(event.target.value)}
                           required/>
                </div>
                <button type='submit' className='btn btn-dark btn-lg btn-block'>LOGIN ME</button>
            </form>
            ) : (
                <Navigate to={"/HomePage"} />
            )}
        </div>
    )
}

export default Login;