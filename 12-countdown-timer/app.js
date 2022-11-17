const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2022, 10, 18, 11, 4, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 10, 4, 0);

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minute = format(futureDate.getMinutes());
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];
const day = futureDate.getDate();

giveaway.textContent = `Giveaway ends on ${year}, ${weekday} ${day} ${month}, ${hour}:${minute}`


// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {

    const today = new Date().getTime()
    const t = futureTime - today

    // values in ms
    const oneSec = 1000;
    const oneMin = 60 * oneSec;
    const oneHour = 60 * oneMin;
    const oneDay = 24 * oneHour;

    let days = Math.floor(t / oneDay);
    let hours = Math.floor(t / oneHour) % 24;
    let minutes = Math.floor(t / oneMin) % 60;
    let seconds = Math.floor(t / oneSec) % 60;

    const values = [days, hours, minutes, seconds];

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    })
    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class='expired'>sorry, this giveaway has expired</h4>`
    }

}

function format(item) {
    if (item < 10) {
        return item = `0${item}`
    }
    return item
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();