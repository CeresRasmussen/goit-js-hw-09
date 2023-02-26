// Описаний в документації
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] >= new Date()) {
      startButton.disabled = false;
      timeSetTimer = selectedDates[0];
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

let timeSetTimer = {};
let showTime = {};

document.querySelector('#datetime-picker');
flatpickr(document.querySelector('#datetime-picker'), options); // flatpickr
const startButton = document.querySelector('[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');
const divTimer = document.querySelector('.timer');

startButton.disabled = true;
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

// const timer = {
//   startTimer() {
//     intervalTimer = setInterval(() => {
//       if (timeSetTimer - new Date() < 0) {
//         clearInterval(intervalTimer);
//         return;
//       }
//       showTime = convertMs(timeSetTimer - new Date());
//       daysSpan.textContent = addLeadingZero(showTime.days);
//       hoursSpan.textContent = addLeadingZero(showTime.hours);
//       minutesSpan.textContent = addLeadingZero(showTime.minutes);
//       secondsSpan.textContent = addLeadingZero(showTime.seconds);
//     }, 1000);
//   },
// };

function timer(time) {
  const timerInterval = setInterval(() => {
    if (time - new Date() < 0) {
      Notiflix.Notify.success('The timer is over');
      clearInterval(timerInterval);
      return;
    }
    showTime = convertMs(time - new Date());
    daysSpan.textContent = addLeadingZero(showTime.days);
    hoursSpan.textContent = addLeadingZero(showTime.hours);
    minutesSpan.textContent = addLeadingZero(showTime.minutes);
    secondsSpan.textContent = addLeadingZero(showTime.seconds);
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

startButton.addEventListener('click', () => timer(timeSetTimer), {
  once: true,
});
