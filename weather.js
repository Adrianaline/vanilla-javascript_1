const API_KEY = '260fee4642516e862d01d3c5c6010ec9';
const COORDS = 'coords';

function saveCoords(coordsOb) {
    localStorage.setItem(COORDS, JSON.stringify(coordsOb));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsOb = {
        latitude,
        longitude
    };
    saveCoords(coordsOb);
}

function handleGeoError() {
    console.log("Can't access geo location")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadCoords = localStorage.getItem(COORDS);
    if (loadCoords === null) {
        askForCoords();
    } else {
        // getWeather();
    }
}

function init() {
    loadCoords();
}

init();