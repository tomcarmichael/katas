const formatDuration = require('./duration-format');

describe("formatDuration function", () =>{
  it("returns 'now' given an arg of 0", () =>{
    expect(formatDuration(0)).toEqual('now');
  }) 
})