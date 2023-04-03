function caesarCipher(str) {
    let arrResult = [];

for (let i = 0; i < str.length; i++){
   
    let letterNumber = str[i].charCodeAt();
    if ( letterNumber >= 65 && letterNumber <= 90 || letterNumber >= 97 && letterNumber <= 122) {

    if (letterNumber == 122) {
        letterNumber = 97
    } else if (letterNumber == 90){
        letterNumber = 65
    } else {
        letterNumber = letterNumber + 1
    }}

    let cypherLetter = String.fromCharCode(letterNumber)
    arrResult.push(cypherLetter);

}
  let result = arrResult.join('')

 return result
}



 export  { caesarCipher };