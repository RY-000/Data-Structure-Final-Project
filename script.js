function bookTicket(movieName) {
    // Redirect to the booking page with the selected movie name as a query parameter
    window.location.href = `booking.html?movie=${encodeURIComponent(movieName)}`;
}
