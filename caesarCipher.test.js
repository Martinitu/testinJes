import { caesarCipher } from "./caesarCipher.js";


test('Caesar Cipher a string', () => {
   
    expect(caesarCipher("defend the east wall of the castle")).toBe("efgfoe uif fbtu xbmm pg uif dbtumf");
  });


test('Caesar Cipher a string', () => {
   
    expect(caesarCipher("z")).toBe("a");
  });

  test('Caesar Cipher a string', () => {
   
    expect(caesarCipher("Defend the east wall of the castle.")).toBe("Efgfoe uif fbtu xbmm pg uif dbtumf.");
  });

  