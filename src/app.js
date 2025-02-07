const apiString = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Male?unitGroup=metric&key=AQDDMAMVYVMQ3HDRU8QNG3XF3"

export default async function simpleFetch() {
    const weather = await fetch(apiString);
    

    console.log(weather);
}