// check-login.js
document.addEventListener("DOMContentLoaded", function() {
  
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
        const [name, value] = cookie.trim().split('=');
        acc[name] = value;
        return acc;
    }, {});

    const username = cookies.username;

    // If username cookie exists, show user info and a logout button
    if (username) {
        const userInfoElement = document.getElementById('user-info');
        userInfoElement.innerHTML = `Hello, ${username} <button onclick="logout()">Logout</button>`;
    }
});

// Logout function
function logout() {
    // Delete the cookie by setting an expiration date in the past
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

    // Reload the page to reflect the logout
    window.location.reload();
}
