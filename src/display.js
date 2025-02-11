
// This is a method to dynamically import images using require.context
// const icons = require.context('./assets/icons', false, /\.svg$/);
// function getIconPath(iconName) {
//     return icons(`./${iconName}.svg`);
// }


const getWeatherBtn = document.querySelector('#get-weather-btn');
const weatherIconElement = document.querySelector('.weather-icon > img');
const searchBar = document.querySelector('#location-input');
const dataElements = {
    'general': document.querySelectorAll('[data-type="general"]'),
    'periodic': document.querySelectorAll('[data-type="periodic"][data-period-type="current"]'),
}

console.log(dataElements);

//This is a method to dynamically import icons using JS dynamic import()
async function getIconPath(iconName) {
    const iconPromise = await import(`./assets/icons/${iconName}.svg`);
    return await iconPromise.default; 
}



export function initializeUI(fetchFunc) {

    getWeatherBtn.addEventListener('click', fetchFunc);

}





