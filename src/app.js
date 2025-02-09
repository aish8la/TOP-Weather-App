import { fromUnixTime, format } from "date-fns";
import { TZDate } from "@date-fns/tz";

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

    const processedDataObj = processData(weatherData); 
    return processedDataObj;
}

function processData(parsedJSON) {
    const jsonObj = parsedJSON;

    const requiredData = {
        address: jsonObj.resolvedAddress,
        timezone: jsonObj.timezone,
        currentConditions: {
            conditions: jsonObj.currentConditions.conditions,
            time: jsonObj.currentConditions.datetime,
            datetime: new TZDate( fromUnixTime(jsonObj.currentConditions.datetimeEpoch) , jsonObj.timezone),
            feelslike: jsonObj.currentConditions.feelslike,
            humidity: jsonObj.currentConditions.humidity,
            icon: jsonObj.currentConditions.icon,
            temperature: jsonObj.currentConditions.temp,
            windspeed: jsonObj.currentConditions.windspeed
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

    const dateTimeZone = new TZDate( fromUnixTime(jsonObj.currentConditions.datetimeEpoch) , jsonObj.timezone);
    let dateIndex = 0;
    let hourIndex = new Number(format(dateTimeZone, "HH"));

    for (let i = 0; i < 7; i++) {

        const newObj = {
            hour: jsonObj.days[dateIndex].hours[hourIndex].datetime,
            datetime: new TZDate( fromUnixTime(jsonObj.days[dateIndex].hours[hourIndex].datetimeEpoch) , jsonObj.timezone),
            temperature: jsonObj.days[dateIndex].hours[hourIndex].temp,
            conditions: jsonObj.days[dateIndex].hours[hourIndex].conditions, 
        }

        requiredData.hours.push(newObj);

        if ( hourIndex === 23) {
            dateIndex++;
            hourIndex = 0;
            continue;
        }

        hourIndex++;
    }

    return requiredData;

}


