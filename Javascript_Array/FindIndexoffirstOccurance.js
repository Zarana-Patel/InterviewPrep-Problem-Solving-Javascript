/*
  Find first ouccurance of the sorted Arraylist
    [11,11,23,45,67,67,89,100]
    target : 67
    find index of : 67

    1) using Linear Search approach
    2) using index of method
    3) using find index of method
    4) Binary search
*/

const LinearSearch = (arrlist,target)=>{
       for(let i =0;i<arrlist.length;i++){
          if(arrlist[i] === target){
              return i;
          }
       }
}
console.log(LinearSearch([11,11,23,45,67,67,89,100],67));

//using index of method
const arraylist = [11,11,23,45,67,67,89,100];
const target =67;
console.log(arraylist.indexOf(target));

//using find index method
const index = arraylist.findIndex((element)=>element ===target);
console.log(index);

//Binary search Method


const binarySearch = (array, target) => {
    let startIndex = 0;
    let endIndex = array.length - 1;
    while(startIndex <= endIndex) {
      let middleIndex = Math.floor((startIndex + endIndex) / 2);
      if(target === array[middleIndex]) {
        return middleIndex;
      }
      if(target > array[middleIndex]) {
        startIndex = middleIndex + 1;
      }
      if(target < array[middleIndex]) {
        endIndex = middleIndex - 1;
      }
     
    }
    
    console.log("Target value not found in array");
}
   

console.log(binarySearch([1,3,5,8,11,23,34,45,56,67],0));