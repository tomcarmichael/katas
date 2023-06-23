const formatDuration = require('./duration-format');

describe("formatDuration function", () => {
  it("returns an error message when called with a negative integer", () => {
    expect(formatDuration(-10)).toEqual('Argument must be a non-negative integer.');

  })
  it("returns 'now' given an arg of 0", () =>{
    expect(formatDuration(0)).toEqual('now');
  });
  it("returns the number of seconds when input is < 60", () =>{

  })
})