function formatDuration(seconds) {
  if (seconds < 0) {
    return 'Argument must be a non-negative integer.';
  } else if (seconds === 0) {
    return 'now';
  } 
}

module.exports = formatDuration;