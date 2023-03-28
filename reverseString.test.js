const reverseString = require('./reverseString.js');

test('reverse a string', () => {
    expect(reverseString("reverse")).toBe("esrever");
  });
  
  test('reverse a string', () => {
    expect(reverseString("reggae")).toBe("eagger");
  });