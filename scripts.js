document.addEventListener('DOMContentLoaded', () => {
    // Initialize the map for Rainier Valley
    const rainierMap = L.map('rainier-map').setView([47.5114, -122.2587], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(rainierMap);
    fetch('rainier_beach.geojson')
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data).addTo(rainierMap);
        });

    // Initialize the map for Tukwila
    const tukwilaMap = L.map('tukwila-map').setView([47.4747, -122.2755], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(tukwilaMap);
    fetch('tukwila.geojson')
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data).addTo(tukwilaMap);
        });
});
