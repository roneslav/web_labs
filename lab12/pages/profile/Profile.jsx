import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("users")) || [];

    // Assuming user is an array and you want the first user's name
    const loggedInUserName = user.length > 0 ? user[0].name : null;

    // Функція для виходу з акаунту
    const handleLogout = () => {
        // Clear the user data in localStorage
        localStorage.removeItem("users");

        // Redirect to the login page
        navigate("/login");
    };

    return (
        <section>
            <div className='success-box'>
                Profile
                <h2>Welcome, {user}</h2>
                <button onClick={handleLogout}>Sign me out</button>
            </div>
        </section>
    );
}

export default Profile;
