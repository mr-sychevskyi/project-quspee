const tasksValue = document.querySelector('.tasks .tasks-done');

// Interval => 5 hours
const startDate = new Date("Dec 01, 2018 00:00:00").getTime();
const now = new Date().getTime();
const timePassed = Math.abs(now - startDate);
const hoursPassed = Math.floor(timePassed / (1000 * 60 * 60));

if (tasksValue) {
    tasksValue.innerText = 1029 + Math.floor(hoursPassed / 5);
}
