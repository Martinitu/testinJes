const capitalize = require('./capitalize.js');

test('first letter in capital letter', () => {
    expect(capitalize("martin")).toBe("Martin");
  });
  
  test('first letter in capital letter', () => {
    expect(capitalize("julice")).toBe("Julice");
  });