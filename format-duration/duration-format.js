function formatDuration(inputSeconds) {
   if (inputSeconds < 0 || typeof inputSeconds != 'number') {
    return 'Argument must be a non-negative integer.';
  } else if (inputSeconds === 0) {
    return 'now'; 
  }

  const divisions = {
    year: 31536000, // 60 * 60 * 24 * 365
    day: 86400, // 60 * 60 * 24
    hour: 3600, // 60 * 60
    minute: 60,
    second: 1
  }

  let durationsArray = [];

  for (key in divisions) {
    if (inputSeconds >= divisions[key]) {
      let val = Math.floor(inputSeconds / divisions[key])
      durationsArray.push(val += val > 1 ? ' ' + key + 's' : ' ' + key); 
      inputSeconds = inputSeconds % divisions[key];
    }
  }

  if (durationsArray.length === 1) { return durationsArray[0] }

  let commaSeparatedDurations = durationsArray.slice(0, -1).join(', ');
  const lastElement = durationsArray[durationsArray.length - 1];
  return commaSeparatedDurations += ` and ${lastElement}`;
}

module.exports = formatDuration;
