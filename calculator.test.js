import {subtract, add, multiply, divide } from "./calculator.js";


test('add a + b', () => {
   
    expect(add(2, 4)).toBe(6);
  });

  test('subtract a - b', () => {
      
    expect(subtract(10, 4)).toBe(6);
  });

  test('multiply a * b', () => {
      
    expect(multiply(10, 4)).toBe(40);
  });

  test('divide a / b', () => {
      
    expect(divide(40, 4)).toBe(10);
  });
  
