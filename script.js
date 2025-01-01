// script.js
function bookTicket(movieName) {
  
    const url = `booking.html?movie=${encodeURIComponent(movieName)}`;
    window.location.href = url;
}
