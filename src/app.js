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
    changeUnit(unitGroup) {
        this.unitGroup = unitGroup;
    },
    changeLocation(location) {
        this.locationString = location;
    }
}

export default async function fetchWeather() {
    try {
        const weather = await fetch(apiObj.apiString());
        const weatherData = await weather.json();
    
        const processedDataObj = processData(weatherData); 
        console.log(processedDataObj);
        return processedDataObj;
    } catch (error) {
        console.error(error);
    }

}

function processData(parsedJSON) {
    const jsonObj = parsedJSON;

    const requiredData = {
        general: {
            address: jsonObj.resolvedAddress,
            get currentTime() {
                return new TZDate( new Date(), "Europe/London")
            },
            get time() {
                return format(this.currentTime, "HH:mm:ss");
            },
            get date() {
                return format(this.currentTime, "do MMMM yyyy");
            },
            get greeting() {
                const hour = this.currentTime.getHours();
                let greet = "Good ";
                if(hour < 12) {
                    greet += "Morning";
                } else if (hour < 17) {
                    greet += "Afternoon";
                } else {
                    greet += "Evening";
                }
                return greet;
            }
        },
        
        timezone: jsonObj.timezone,
        current: {
            'condition': jsonObj.currentConditions.conditions,
            'time': jsonObj.currentConditions.datetime,
            'datetime': new TZDate( fromUnixTime(jsonObj.currentConditions.datetimeEpoch) , jsonObj.timezone),
            'feels-like': jsonObj.currentConditions.feelslike,
            'humidity': jsonObj.currentConditions.humidity,
            'weather-icon': jsonObj.currentConditions.icon,
            'temperature': jsonObj.currentConditions.temp,
            'wind-speed': jsonObj.currentConditions.windspeed
        },
        daily: [],
        hourly: [],
    }
    
    for (let i = 0; i < 7; i++) {
        const newObj = {
            date: format(jsonObj.days[i].datetime, "iii"),
            temperature: jsonObj.days[i].temp,
            condition: jsonObj.days[i].conditions, 
        }
        requiredData.daily.push(newObj);
    }

    const dateTimeZone = new TZDate( fromUnixTime(jsonObj.currentConditions.datetimeEpoch) , jsonObj.timezone);
    let dateIndex = 0;
    let hourIndex = new Number(format(dateTimeZone, "HH"));

    for (let i = 0; i < 7; i++) {

        const newObj = {
            hour: jsonObj.days[dateIndex].hours[hourIndex].datetime,
            datetime: new TZDate( fromUnixTime(jsonObj.days[dateIndex].hours[hourIndex].datetimeEpoch) , jsonObj.timezone),
            temperature: jsonObj.days[dateIndex].hours[hourIndex].temp,
            condition: jsonObj.days[dateIndex].hours[hourIndex].conditions, 
        }

        requiredData.hourly.push(newObj);

        if ( hourIndex === 23) {
            dateIndex++;
            hourIndex = 0;
            continue;
        }

        hourIndex++;
    }

    return requiredData;

}


