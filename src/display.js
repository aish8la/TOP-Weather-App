
export default function initializeUI(fetchFunc) {
    const getWeatherBtn = document.querySelector('#get-weather-btn');
    getWeatherBtn.addEventListener('click', fetchFunc);
}



