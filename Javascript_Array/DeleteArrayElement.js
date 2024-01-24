/* --Delete middle element of the Array list --
  1) Using splice
  2) using spread operator
  3) using filter

*/
 
const middleElementfunc = (arraylist)=>{
    const middle = Math.floor(arraylist.length/2);
    arraylist.splice(middle,1);
    console.log(`Using splice to delete middle Element ${arraylist} `);
}
middleElementfunc([1,7,9,10,34,68]);


const usingFiltermiddleElmt = (arr)=>{
    const middle = Math.floor(arr.length/2);
    console.log(`Using Filter delete middle Element:`);
    console.log(arr.filter((element,index)=>index !== middle));
}

usingFiltermiddleElmt([1,7,19,40,4,6]);

const usingSpreadOpt =(arr)=>{
    const middle = Math.floor(arr.length/2);
    const newArr = [...arr.slice(0, middle),...arr.slice(middle+1 )];
    console.log(`Using Spread Operator to delete middle Element : ${newArr}`);
}
usingSpreadOpt([2,6,9,3,26]);



/* --Different ways to delete any element of the array --
      1) using Push
      2) using Pop - delete last element 
      3) using shift() - delete first element
      4) using splice
      5) using filter
      6) using delete  
*/

const arr  = [1,3,8,5,87,43];

const example = arr.filter((element)=>element !== arr[2]);
console.log(`Using filter to delete element at any index position: ${example}`);

let pushArr = [];
for(let i = 0;i<arr.length;i++){
      if(arr[i] !== 3){
        pushArr.push(arr[i]);
      }
}
console.log(`Using push to delete element: ${pushArr}`);

for(let i = 0;i<arr.length;i++){
      if(arr[i] === 1){
        arr.shift();
      }
}
console.log(`Using shift to delete first element of arraylist: ${arr}`);
arr.splice(2,1);
console.log(`Using splice to delete any element:${arr}`);



const arr1 = [2, 7, 9, 15, 19];
delete arr1[3];
console.log(`Using Delete Method to delete element of array ${arr1}`);