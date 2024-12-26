// login.js
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    // Get user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can replace this with a backend check)
    if (username && password) {
        // Save user info in cookies (expiration of 7 days)
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (7 * 24 * 60 * 60 * 1000)); // 7 days from now
        document.cookie = `username=${username}; expires=${expirationDate.toUTCString()}; path=/`;

        // Redirect to the homepage (or wherever you want after login)
        window.location.href = "index.html";  // Adjust if you have a specific page after login
    } else {
        alert("Please enter both username and password");
    }
});
