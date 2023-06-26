function formatDuration(inputSeconds) {
  if (inputSeconds < 0 || typeof inputSeconds != 'number') {
    return 'Argument must be a non-negative integer.';
  } else if (inputSeconds === 0) {
    return 'now'; 
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

  if (years) {
    formattedDuration += `${years} year${years > 1 ? 's' : ''}`;
    if ((days && (hours || minutes || remainderSeconds)) || 
        (hours && (minutes || remainderSeconds)) ||
        (minutes && remainderSeconds)) {
          formattedDuration += `, `;
        }
    if ((days && !hours && !minutes && !remainderSeconds) || 
        (hours && !days && !minutes && !remainderSeconds) || 
        (minutes && !days && !hours && !remainderSeconds) ||
        (remainderSeconds && !days && !hours && !minutes)) { 
          formattedDuration += ` and `;
        }
  } 

  if (days) { 
    formattedDuration += `${days} day${days > 1 ? 's' : ''}`;
    if ((hours && (minutes || remainderSeconds)) || (minutes && remainderSeconds)) {
          formattedDuration += `, `;
        }
    if ((hours && !minutes && !remainderSeconds) || (minutes && !hours && !remainderSeconds) ||
        (remainderSeconds  && !hours && !minutes)) {
          formattedDuration += ` and `;
        }
  }

  if (hours) {
    formattedDuration += `${hours} hour${hours > 1 ? 's' : ''}`;
    if (minutes && remainderSeconds) { formattedDuration += `, ` }
    if (!minutes && remainderSeconds) { formattedDuration += ` and ` }
  }

  if (minutes) { 
    formattedDuration += `${minutes} minute${minutes > 1 ? 's' : ''}`;
    if (remainderSeconds) { formattedDuration += ` and ` }
  }

  if (remainderSeconds) {
    formattedDuration += `${remainderSeconds} second${remainderSeconds > 1 ? 's' : ''}`;
  }

  return formattedDuration;
}

module.exports = formatDuration;
