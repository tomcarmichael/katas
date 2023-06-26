const formatDuration = require('./duration-format');

describe("formatDuration function", () => {
  it("returns an error message when called with a negative integer", () => {
    expect(formatDuration(-10)).toEqual('Argument must be a non-negative integer.');
    expect(formatDuration(-10000)).toEqual('Argument must be a non-negative integer.');
    expect(formatDuration(-0.1)).toEqual('Argument must be a non-negative integer.');
  })
  it(("returns an error message when called w a string"), () => {
    expect(formatDuration('10')).toEqual('Argument must be a non-negative integer.');
    expect(formatDuration('0')).toEqual('Argument must be a non-negative integer.');
  })
  it(("returns an error message when called w a bool"), () => {
    expect(formatDuration(true)).toEqual('Argument must be a non-negative integer.');
  })
  it(("returns an error message when called w an array"), () => {
    expect(formatDuration([1])).toEqual('Argument must be a non-negative integer.');
  })
  it("returns 'now' given an arg of 0", () => {
    expect(formatDuration(0)).toEqual('now');
  })
  it("returns the number of seconds when input is < 60", () => {
    expect(formatDuration(10)).toEqual('10 seconds');
    expect(formatDuration(59)).toEqual('59 seconds');
    expect(formatDuration(60)).not.toEqual('60 seconds');
  })
  it("returns '1 second' given arg of 1", () => {
    expect(formatDuration(1)).toEqual('1 second');
  })
  it("returns formatted duration of 1 minute and 30 seconds", () => {
    expect(formatDuration(90)).toEqual('1 minute and 30 seconds');
  })
  it("returns formatted duration of 1 minute and 20 seconds", () => {
    expect(formatDuration(80)).toEqual('1 minute and 20 seconds');
  })
  it("returns formatted duration of 1 minute", () => {
    expect(formatDuration(60)).toEqual('1 minute');
  })
  it("returns formatted duration given 3600", () => {
    expect(formatDuration(3600)).toEqual('1 hour');
  })
  it("returns formatted duration given 3662", () => {
    expect(formatDuration(3662)).toEqual('1 hour, 1 minute and 2 seconds');
  })
  it("returns formatted duration given 62", () => {
    expect(formatDuration(62)).toEqual('1 minute and 2 seconds');
  })
  it("returns formatted duration for 1 day", () => {
    expect(formatDuration(86400)).toEqual('1 day');
  })
  it("returns formatted duration given 90000", () => {
    expect(formatDuration(90000)).toEqual('1 day and 1 hour');
  })
  it("returns formatted duration given 86460", () => {
    expect(formatDuration(86460)).toEqual('1 day and 1 minute');
  })
  it("returns formatted duration given 86401", () => {
    expect(formatDuration(86401)).toEqual('1 day and 1 second');
  })
  it("returns formatted duration given 86461", () => {
    expect(formatDuration(86461)).toEqual('1 day, 1 minute and 1 second');
  })
  it("returns formatted duration given 90001", () => {
    expect(formatDuration(90001)).toEqual('1 day, 1 hour and 1 second');
  })
  it("returns formatted duration given 90061", () => {
    expect(formatDuration(90061)).toEqual('1 day, 1 hour, 1 minute and 1 second');
  })
  it("returns formatted duration for 1 year", () => {
    expect(formatDuration(31536000)).toEqual('1 year');
  })
  it("returns formatted duration for 1 year", () => {
    expect(formatDuration(31536000)).toEqual('1 year');
  })
  it("returns formatted duration for 1 year and 1 day", () => {
    expect(formatDuration(31622400)).toEqual('1 year and 1 day');
  })
  it("returns formatted duration for 31622401", () => {
    expect(formatDuration(31622401)).toEqual('1 year, 1 day and 1 second');
  })
  it("returns formatted duration for 31536060", () => {
    expect(formatDuration(31536060)).toEqual('1 year and 1 minute');
  })
  it("returns formatted duration for 31536061", () => {
    expect(formatDuration(31536061)).toEqual('1 year, 1 minute and 1 second');
  })
  it("returns formatted duration for 132030240", () => {
    expect(formatDuration(132030240)).toEqual('4 years, 68 days, 3 hours and 4 minutes');
  })
  it("returns formatted duration for 4229940", () => {
    expect(formatDuration(4229940)).toEqual('48 days, 22 hours and 59 minutes');
  })

  
  
})