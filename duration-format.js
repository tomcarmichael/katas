function formatDuration(seconds) {
  if (seconds < 0) {
    return 'Argument must be a non-negative integer.';
  } else if (seconds === 0) {
    return 'now';
  } else if (seconds < 60) {
    return `${seconds} seconds`;
  }
}

module.exports = formatDuration;