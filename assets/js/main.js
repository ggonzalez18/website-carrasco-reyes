const url = 'https://ipapi.co/json/';

async function fetchAPI(apiURL) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

async function getMyIP() {
    let apiResponse = await fetchAPI(url);

    document.getElementById("ipModal").textContent = apiResponse.ip;
    document.getElementById("versionModal").textContent = apiResponse.version;
    document.getElementById("countryModal").textContent = apiResponse.country_name;
    document.getElementById("cityModal").textContent = apiResponse.city;
    document.getElementById("ispModal").textContent = apiResponse.org;
    document.getElementById("rawModal").textContent = apiResponse.data;
}

$(document).ready(function() {
    $("#getMyIPModal").on('show.bs.modal', function() {
        getMyIP();
    });
});