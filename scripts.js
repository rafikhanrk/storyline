document.addEventListener('DOMContentLoaded', function() {
    // Placeholder for Leaflet.js
    var map = L.map('map').setView([47.6062, -122.3321], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([47.5480, -122.2929]).addTo(map).bindPopup('Rainier Beach').openPopup();
    L.marker([47.4630, -122.2445]).addTo(map).bindPopup('Tukwila').openPopup();

    // Include navigation dynamically
    fetch('navigation.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        });
});
