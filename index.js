// index.js

// Countdown Timer: logs remaining time at regular intervals and stops at 0
function countdownTimer(seconds) {
  let remaining = seconds;

  const intervalId = setInterval(() => {
    if (remaining > 0) {
      console.log(remaining);
      remaining--;
    } else {
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
