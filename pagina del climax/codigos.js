const requestLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
};

const successCallback = position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(Latitude, {latitude}, Longitude, {longitude});
    // Aquí puedes hacer lo que necesites con la ubicación, como enviarla a un servidor o utilizarla en tu aplicación.
};

const errorCallback = error => {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.error("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.error("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.error("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.error("An unknown error occurred.");
            break;
    }
};

// Llama a la función para solicitar la ubicación actual
requestLocation();