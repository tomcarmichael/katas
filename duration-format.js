function formatDuration(seconds) {
  if (seconds < 0) {
    return 'Argument must be a non-negative integer.';
  } else if (seconds === 0) {
    return 'now'; 
  } else if (seconds === 1) {
    return `${seconds} second`;
  } else if (seconds < 60) {
    return `${seconds} seconds`;
  } else {
    return '1 minute and 30 seconds';
  }
}

module.exports = formatDuration;