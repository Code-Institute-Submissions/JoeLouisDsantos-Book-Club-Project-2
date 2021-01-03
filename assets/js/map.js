function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
            lat: 51.3168,
            lng: -0.5600,
        }
    });
    
    // Alphabetical characters used to label the markers.
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Add the locations.
    var locations = [
        { lat: 51.3203, lng: -0.5592 },
        { lat: 51.2368, lng: -0.5719 },
    ];
    // Marker for locations
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
    });
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}