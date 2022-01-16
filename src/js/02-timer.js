import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css'
const timerBtn = document.querySelector("button[data-start]")
const inputData = document.querySelector("#datetime-picker")
const dayTimer = document.querySelector("[data-days]")

const hoursTimer = document.querySelector("[data-hours]")

const minutesTimer = document.querySelector("[data-minutes]")

const secondsTimer = document.querySelector("[data-seconds]")

let dataSelected = 0
timerBtn.disabled = true
let timeBefore = 0
let intervalId = 0

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        dataSelected = selectedDates[0]
        if (selectedDates[0] > new Date()) {
            timerBtn.disabled = false
        } else {
            alert('Please choose a date in the future')
            } 
    console.log(selectedDates[0]);
  },
}


const fp = flatpickr(inputData, options)

timerBtn.addEventListener('click', onStart)

inputData.addEventListener('input', onInput)

function onInput() {
    clearInterval(intervalId)
}

function onStart() {
    
    intervalId = setInterval(() => {
        timeBefore = dataSelected - new Date()
        if ((convertMs(timeBefore).seconds) === 0) {
            clearInterval(intervalId)
            alert("Время вышло!!!")
        }
        console.log(convertMs(timeBefore).minutes)
        dayTimer.textContent = pad(convertMs(timeBefore).days)
        hoursTimer.textContent = pad(convertMs(timeBefore).hours)
        minutesTimer.textContent = pad(convertMs(timeBefore).minutes)
        secondsTimer.textContent = pad(convertMs(timeBefore).seconds)
        

    }, 1000)
    
    timerBtn.disabled = true
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function pad(value) {
    return String(value).padStart(2, '0');
  }












