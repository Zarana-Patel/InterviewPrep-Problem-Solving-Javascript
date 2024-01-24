/* Different ways to copy Arraylist into another list 
     1) Using push()
     2) Using map()
     3) Using spread 
     4) Using slice
     5) Using concat

*/

let arraylist = ["hello","hi","hola","Namaste"];
//Using Map
const mapArr = (arrylist)=>{
     let newArr = arraylist.map((element)=>element);
     console.log(`Copy array into NewArray using Map method:${newArr}`);
}
mapArr(arraylist);

//Using Push
const newPush = (arrylist)=>{
    let newArr = [];
    for(let i =0;i<arrylist.length;i++){
        newArr.push(arrylist[i]);
    }
    console.log(`Copy array into NewArray using for/push method:${newArr}`);
}
newPush(arraylist);

//Using spread
const spreadArr = [...arraylist];
console.log(`Copy array into NewArray using Spread method:${spreadArr}`);

//Using concat 
const concatArr = [].concat(arraylist);
console.log(`Copy array into new Array using Concat method:${concatArr}`);

//Using slice Method
const copiedArray = arraylist.slice();
console.log(`Copy array into new Array using Slice method:${copiedArray}`);

//Using Apply

const ApplyArray = Array.apply(null,arraylist);
console.log(`Copy array into new Array using Slice method:${ApplyArray}`);