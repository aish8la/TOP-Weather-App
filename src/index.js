import "./styles.css";
import { initializeUI } from './display.js';
import simpleFetch from './app.js';
// import { addDays, format, addHours, roundToNearestHours, parseISO, set } from "date-fns";
// import { TZDate } from "@date-fns/tz";

initializeUI(simpleFetch);

/*

const date = "2025-02-09";
const time = format(new Date(), "HH:mm:ss");

const newtime = new TZDate(`${date}T${time}`, "Asia/Kolkata");

console.log("time in location", newtime.toString());
console.log("time in UTC", new Date(newtime).toISOString());

*/