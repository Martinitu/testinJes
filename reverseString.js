function reverseString(str) {
    let reverseString = [];
    
   for(let i = str.length - 1; i >= 0; i--) {
       
        reverseString.push(str[i]);
        
    };
   
    return reverseString.join('');

}

console.log(reverseString("reggae"))
  module.exports = reverseString;