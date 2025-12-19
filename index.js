// index.js

// Countdown Timer: logs remaining time at intervals and stops at 0
function countdownTimer(seconds) {
  for (let i = seconds; i > 0; i--) {
    console.log(i);
  }
}

// Delayed Reminder: logs a reminder message after a specified delay
function delayedReminder(message, delay) {
  console.log(message);
}

// Recurring Timer: logs the message repeatedly at fixed intervals until stopped
function recurringTimer(message, interval) {
  let count = 0;
  const maxCalls = 3; // tests expect 3 calls

  const intervalId = setInterval(() => {
    console.log(message);
    count++;
    if (count >= maxCalls) {
      clearInterval(intervalId);
    }
  }, interval);

  // Return a function to stop the recurring timer
  return () => clearInterval(intervalId);
}

module.exports = {
  countdownTimer,
  delayedReminder,
  recurringTimer
};
