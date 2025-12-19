// index.js

// Countdown Timer: logs remaining time at intervals and stops at 0
function countdownTimer(seconds) {
  let remaining = seconds;

  const intervalId = setInterval(() => {
    console.log(remaining);
    remaining--;

    if (remaining === 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}

// Delayed Reminder: logs a reminder message after a specified delay
function delayedReminder(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

// Recurring Timer: logs the message repeatedly at fixed intervals until stopped
function recurringTimer(message, interval) {
  const intervalId = setInterval(() => {
    console.log(message);
  }, interval);

  // Return a function to stop the recurring timer
  return () => clearInterval(intervalId);
}

module.exports = {
  countdownTimer,
  delayedReminder,
  recurringTimer
};
