import { addDays, format } from "date-fns";

const apiObj = {
    "url": "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
    "apiKey": "AQDDMAMVYVMQ3HDRU8QNG3XF3",
    "unitGroup": "metric",
    "locationString": "Male",
    apiString() {
        const unit = "unitGroup="+(this.unitGroup || "metric");
        const location = this.locationString || "Male";
        return `${this.url}${location}?${unit}&key=${this.apiKey}`;
    },
}

export default async function simpleFetch() {
    const weather = await fetch(apiObj.apiString());
    const parsedWeather = await weather.json();

    console.log(parsedWeather);
}
