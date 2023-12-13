import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();

    // Retrieve the index of the logged-in user from local storage
    const loggedInUserIndex = localStorage.getItem("loggedInUserIndex");
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Retrieve the user object based on the index
    const loggedInUser = loggedInUserIndex !== null ? users[loggedInUserIndex] : null;

    // Функція для виходу з акаунту
    const handleLogout = () => {
        if (loggedInUserIndex !== null) {
            // Remove the logged-in user from the array
            users.splice(loggedInUserIndex, 1);

            // Update the local storage with the modified users array
            localStorage.setItem("users", JSON.stringify(users));

            // Clear the information about the logged-in user
            localStorage.removeItem("loggedInUserIndex");

            // Redirect to the login page
            navigate("/login");

            // Log the sign-out message
            console.log(`${loggedInUser.name} has signed out.`);
        }
    };

    return (
        <section>
            <div className="success-box">
                Profile
                {loggedInUser && <h2>Welcome, {loggedInUser.name}</h2>}
                <button onClick={handleLogout}>Sign me out</button>
            </div>
        </section>
    );
}

export default Profile;
