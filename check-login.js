// check-login.js
document.addEventListener("DOMContentLoaded", function() {
    // Get cookies
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
        const [name, value] = cookie.trim().split('=');
        acc[name] = value;
        return acc;
    }, {});

    const username = cookies.username;

    const userInfoElement = document.getElementById('user-info');

    if (username) {
        // If logged in, show the user's name and the Logout button
        userInfoElement.innerHTML = `Hello, ${username} <button onclick="logout()">Logout</button>`;
    } else {
        // If not logged in, show the Login button
        userInfoElement.innerHTML = `<button onclick="login()">Login</button>`;
    }
});

// Login function
function login() {
    // For demo purposes, ask the user for a username
    const username = prompt("Enter your username:");

    if (username) {
        // Set a cookie with the user's name (username)
        document.cookie = `username=${username}; path=/`;

        // Reload the page to reflect the login
        window.location.reload();
    }
}

// Logout function
function logout() {
    // Delete the username cookie by setting an expiration date in the past
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

    // Reload the page to reflect the logout
    window.location.reload();
}
