/* Factorial NUmber
   input : 5
   output : 5 * 4 * 3 * 2 * 1 = 120
 */
function fact(num){
    if(num === 1){
        return 1;
    }
    else if(num === 0){
        return 0;
    }
    else{
        return num * fact(num-1);
    }

}

console.log(fact(5));

console.log(fact(1));

console.log(fact(3));

console.log(fact(0));