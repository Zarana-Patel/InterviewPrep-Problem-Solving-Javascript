//Fibonacci series

function myFunction(num) {
var fibArray = [0,1];

for(var i=fibArray.length; i<num; i++) {
    fibArray[i] = fibArray[i-2] + fibArray[i-1];
}

console.log(fibArray);
}
myFunction(8);
