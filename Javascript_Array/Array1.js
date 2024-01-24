//10 Questions of Array

/* -- 1. Create an array of given size -- */
const arraylist = new Array(3);
/* How to initialize Array */
const array1 = [];
const array2 = [1,2,3,4];
const array3= ["hi","hello","hola"];
const array4 = new Array();

/* -- 2. Way to interate over Array --
1) for()
2) map()
3) filter()
4) reduce()
5) every()
6) forEach()
7) while()
8) console.log()
9) some()
 */
for(let i =0;i<array2.length;i++){
     console.log(array2[i]);
}
const usingMap = array2.map((element)=>element);
console.log(`Using map:${usingMap}`);

const usingfilter = array2.filter((element)=>element>2);
console.log(`Using Filter:${usingfilter}`);

const usingreduce = array2.reduce((accumulator,current)=>{
            return accumulator +current;
});
console.log(`Using Reduce:${usingreduce}`);

const usingEvery = array2.every((element)=>element<40);
console.log(`Using Every:${usingEvery}`);

const usingForEach = array2.forEach((element,index)=>{
    console.log(`Using ForEach:${element}`);
    console.log(`Using ForEach element Index:${index}`);
});
const usingSome = array2.some((element)=>element >2);
console.log(`Using Some:${usingSome}`);

/* -- 3. Fill the array with zero values -- */
const arraywithZeroes  = new Array(3).fill(0);
console.log(arraywithZeroes);
/* -- 4. Create an array with specific size and pre-fill values -- */
const arr = new Array(5).fill(2,0,5);
console.log(arr);

/* -- 5. Check array includes value -- */
 console.log(array2.includes(2));

/*  -- 6. Write program to access elements in array-- 

1) using for (for,for of,forEach)
2) using fiter
3) using map
4) using destructuring method
*/
for(let i =0;i<array2.length;i++){
    console.log(`Element access using for method: ${array2[i]}`);
}
array2.forEach((element)=>{
    console.log(`Element access using forEach method: ${element}`);
});
for(let values of array2){
    console.log(`Element access using for of method: ${values}`);
}
const [first,second] = array2;
console.log(`Using destructuring of arraylist:${first}`);

/*  -- 7. Find the length of the arraylist. --
    1) array.length
    2) using for loop
*/
console.log(array2.length);

size = 0; 
for (let element of array2) { 
    size++; 
};
console.log(`Length by using for of loop -> ${size}`);

/*  -- 8. Check element is present in array or not --
        1) includes()
        2) indexOf()
        3) find()
*/

console.log(array2.includes(2));

console.log(array2.indexOf(2));
const results  = array2.find((element)=>element === 2);
if(results !=undefined ){
    console.log(`results are present`);
}
else {
    console.log('not fond');
}
/*  -- 9. Replace first and last elements of arraylist --
        1) using temporary variable
        2) using destructuring method
*/
const temp = array2[0];
array2[0] = array2[array2.length-1];
array2[array2.length-1] = temp;
console.log(array2);


[array2[0],array2[array2.length-1]] = [array2[array2.length-1],array2[0]];
console.log(array2);

/* -- 10. Populating arraylist 
        1) for loop & push()
        2) from()
        3) map()
        5) spread Operator
        
*/
let newArr = [];

for(let i =0;i<5;i++){
      newArr.push(i);
}
console.log(newArr);

const arrayfrmnewArr =Array.from(newArr);
console.log(arrayfrmnewArr);

const test= newArr.map(element=>element);
console.log(test);

const test2 = [...newArr];
console.log(test2);

console.log(newArr.fill(0,0,5));


