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
  it("returns formatted duration given 86400", () => {
    expect(formatDuration(86400)).toEqual('1 day');
  })
  
})