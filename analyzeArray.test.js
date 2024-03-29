const analyzeArray = require('./analyzeArray.js');

test('analyze an array and return an object with the following properties: average, min, max, and length.', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({ average: 4, min: 1, max: 8, length: 6 });
  });