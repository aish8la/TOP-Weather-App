import { addDays, format, addHours, roundToNearestHours } from "date-fns";

const apiObj = {
    "url": "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
    "apiKey": "AQDDMAMVYVMQ3HDRU8QNG3XF3",
    "unitGroup": "metric",
    "locationString": "India",
    apiString() {
        const unit = "unitGroup="+(this.unitGroup || "metric");
        const location = this.locationString || "Male";
        return `${this.url}${location}?${unit}&key=${this.apiKey}`;
    },
}

let weatherData = {};

export default async function fetchWeather() {
    const weather = await fetch(apiObj.apiString());
    weatherData = await weather.json();

    console.log(weatherData);
}

function processData(parsedJSON) {
    let jsonObj = parsedJSON;

    let requiredData = {
        address: jsonObj.resolvedAddress,
        timezone: jsonObj.timezone,
        currentConditions: {
            conditions: jsonObj.conditions,
            datetime: jsonObj.datetime,
            feelslike: jsonObj.feelslike,
            humidity: jsonObj.humidity,
            icon: jsonObj.icon,
            temperature: jsonObj.temp,
            windspeed: jsonObj.windspeed
        },
        days: [],
        hours: [],
    }
    
    for (let i = 0; i < 7; i++) {
        const newObj = {
            date: jsonObj.days[i].datetime,
            temperature: jsonObj.days[i].temp,
            conditions: jsonObj.days[i].conditions, 
        }
        requiredData.days.push(newObj);
    }
}

