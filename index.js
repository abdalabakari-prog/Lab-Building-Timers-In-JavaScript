// index.js

function countdownTimer(seconds) {
  let remaining = seconds;
  const intervalId = globalThis.setInterval(() => {
    if (remaining > 0) {
      console.log(remaining);
      remaining -= 1;
      if (remaining === 0) {
        globalThis.clearInterval(intervalId);
      }
    }
  }, 1000);
}

function delayedReminder(message, delay) {
  globalThis.setTimeout(() => {
    console.log(message);
  }, delay);
}

function recurringTimer(message, interval) {
  const intervalId = globalThis.setInterval(() => {
    console.log(message);
  }, interval);

  return function stopRecurringTimer() {
    globalThis.clearInterval(intervalId);
  };
}

module.exports = {
  countdownTimer,
  delayedReminder,
  recurringTimer
};
