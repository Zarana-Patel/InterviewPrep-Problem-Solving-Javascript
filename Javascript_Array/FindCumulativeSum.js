/* Find cumulativeSum
1) using reduce
2) using forEach
3) using Map

*/

const arraylist = [1,3,7,2,5];

const sum = arraylist.reduce((accum,element)=>accum+element);
console.log(sum);


//Using forEach
let inputArray = [1,3,7,2,5];
let cummulativeSum = 0;
 
inputArray.forEach((element) => {
    cummulativeSum += element;
    return cummulativeSum;

});
console.log(cummulativeSum);

// Using Map 
let cumsum =0;
inputArray.map((element) => {
    cumsum += element;
    return cumsum;

});
console.log(cumsum);