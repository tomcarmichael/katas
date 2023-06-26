function formatDuration(seconds) {
  if (seconds < 0) {
    return 'Argument must be a non-negative integer.';
  } else if (seconds === 0) {
    return 'now'; 
  } 

  const secondsPerYear = 31536000; // 60 * 60 * 24 * 365
  const secondsPerDay = 86400; // 60 * 60 * 24
  const secondsPerHour = 3600; // 60 * 60

  const years = Math.floor(seconds / secondsPerYear);
  const days = Math.floor(seconds / secondsPerDay);
  const hours = Math.floor(seconds / secondsPerHour);
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  
  let formattedDuration = "";

  if (years === 1) { formattedDuration += `${years} year`}
  else if (years > 1) { formattedDuration += `${years} years`} 

  if (days === 1) { formattedDuration += `${days} day`}
  else if (days > 1) { formattedDuration += `${days} days`} 

  if (hours === 1) { formattedDuration += `${hours} hour`}
  else if (hours > 1) { formattedDuration += `${hours} hours`}   

  if (minutes) { 
    formattedDuration += `${minutes} minute`
    if (minutes > 1) { formattedDuration += 's' }
    if (remainderSeconds) { formattedDuration += ` and ` }
  }

  if (remainderSeconds) {
    formattedDuration += `${remainderSeconds} second`
    if (remainderSeconds > 1) { formattedDuration += 's' }
  }

  return formattedDuration;

}

module.exports = formatDuration;