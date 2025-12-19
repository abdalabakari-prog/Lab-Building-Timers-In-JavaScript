// index.js

// Countdown Timer: logs remaining time at regular intervals and stops at 0
function countdownTimer(seconds) {
  let remaining = seconds;

  const intervalId = setInterval(() => {
    console.log(remaining);
    remaining--;

    if (remaining < 0) {
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

// Recurring Timer: performs an action repeatedly at fixed intervals until stopped
function recurringTimer(action, interval) {
  const intervalId = setInterval(() => {
    action();
  }, interval);

  // Return a function to stop the recurring timer
  return () => clearInterval(intervalId);
}

// Export functions for Jest tests
module.exports = {
  countdownTimer,
  delayedReminder,
  recurringTimer
};
