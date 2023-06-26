function formatDuration(inputSeconds) {
  if (inputSeconds < 0) {
    return 'Argument must be a non-negative integer.';
  } else if (inputSeconds === 0) {
    return 'now'; 
  } else if (typeof inputSeconds != 'number') {
    return 'Argument must be a non-negative integer.';
  }

  const secondsPerYear = 31536000; // 60 * 60 * 24 * 365
  const secondsPerDay = 86400; // 60 * 60 * 24
  const secondsPerHour = 3600; // 60 * 60

  const years = Math.floor(inputSeconds / secondsPerYear);
  const days = (Math.floor(inputSeconds / secondsPerDay) % 365);
  const hours = (Math.floor(inputSeconds / secondsPerHour) % 24);
  const minutes = (Math.floor(inputSeconds / 60) % 60);
  const remainderSeconds = inputSeconds % 60;
  
  let formattedDuration = "";

  if (years === 1) { formattedDuration += `${years} year`}
  else if (years > 1) { formattedDuration += `${years} years`} 

  if (days) { 
    formattedDuration += `${days} day`
    if (days > 1) { formattedDuration += 's'}
    if (hours && (minutes || remainderSeconds) || (minutes && remainderSeconds)) { formattedDuration += `, ` }
    if ((hours && !minutes && !remainderSeconds) || (minutes && !hours && !remainderSeconds) || (remainderSeconds  && !hours && !minutes))  { formattedDuration += ` and ` }
  }

  if (hours) {
    formattedDuration += `${hours} hour`
    if (hours > 1) { formattedDuration += 's' }
    if (minutes && remainderSeconds) { formattedDuration += `, ` }
    if (!minutes && remainderSeconds) { formattedDuration += ` and ` }
  }

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