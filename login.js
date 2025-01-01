// login.js
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username && password) {
     
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (7 * 24 * 60 * 60 * 1000));
        document.cookie = `username=${username}; expires=${expirationDate.toUTCString()}; path=/`;

        window.location.href = "index.html";  
    } else {
        alert("Please enter both username and password");
    }
});
