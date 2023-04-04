function average(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]

    }

    return Math.round(sum / arr.length)
};
function min(arr){
   let sortedArray = arr.sort();
    return sortedArray[0]


};
function max(arr){
    let sortedArray = arr.sort();
    return sortedArray[sortedArray.length -1]
};


function analyzeArray(arr){
let result = {};
    result.average = average(arr)
    result.min = min(arr)
    result.max = max(arr) 
    result.length = arr.length
return result

}
console.log(analyzeArray([1,8,3,4,2,6]))
module.exports = analyzeArray;