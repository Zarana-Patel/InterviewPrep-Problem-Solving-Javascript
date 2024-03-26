function multiply(x){
    return function(y){
          return x * y;
    } 
}
const multiplytwonum = multiply(2);
console.log(multiplytwonum(3));


//Currying with arrow function


const add = x => y=> x+y;

const addnum = add(2);
console.log(addnum(3));