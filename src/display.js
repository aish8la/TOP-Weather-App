import { fetchWeather, changeLocation, changeUnit } from "./app.js";

// This is a method to dynamically import images using require.context
// const icons = require.context('./assets/icons', false, /\.svg$/);
// function getIconPath(iconName) {
//     return icons(`./${iconName}.svg`);
// }


const getWeatherBtn = document.querySelector('#get-weather-btn');
const searchBar = document.querySelector('#location-input');
const unitSelection = document.querySelector('#unit-select');
const dataElements = {
    'general': document.querySelectorAll('[data-type="general"]'),
    'current': document.querySelectorAll('[data-type="current"]'),
    'periodic': document.querySelectorAll('[data-type="periodic"]'),
    'weather-icon': document.querySelector('[data-definition="weather-icon"][data-type="current"]'),
    'skeletonElements': document.querySelectorAll('.to-be-loaded')
};

export function updateDisplay(dataObj, iconURL) {

    dataElements["weather-icon"].src = iconURL;

    dataElements.general.forEach(element => {
        element.textContent = dataObj.general[element.dataset.definition];
    });

    dataElements.current.forEach(element => {
        if (element.tagName === "IMG") {
            return;
        }
        element.textContent = dataObj.current[element.dataset.definition];
    });

    dataElements.periodic.forEach(element => {
        const periodType = element.dataset.periodType;
        const periodIndex = element.dataset.periodIndex;
        const definition = element.dataset.definition;
        element.textContent = dataObj[periodType][periodIndex][definition];
    });
};


//This is a method to dynamically import icons using JS dynamic import()
async function getIconPath(iconName) {
    const iconPromise = await import(`./assets/icons/${iconName}.svg`);
    return await iconPromise.default; 
};

function toggleSkeleton() {
    dataElements.skeletonElements.forEach(elements => {
        elements.classList.toggle('loading');
    });
};

async function renderData() {
    setUnitGroup();
    toggleSkeleton();
    const data = await fetchWeather();
    const icon = await getIconPath(data.current["weather-icon"]);
    updateDisplay(data, icon);
    toggleSkeleton();
};

function getLocationWeather() {
    const searchString = searchBar.value;
    searchBar.value = "";
    changeLocation(searchString);
    renderData();
}

function setUnitGroup() {
    changeUnit(unitSelection.value);
}

export function initializeUI() {

    renderData();
    unitSelection.addEventListener('change', renderData);
    getWeatherBtn.addEventListener('click', getLocationWeather);

};





