/* 
Arr1  = [1,2,3,4,5,6];
Arr2 = [1,2,8,9,10,3];

output : arr [ 1,2,3,4,5,6,8,9,10];
*/

const UniqueArr = (arr1,arr2)=>{
        const merge = Array.from(new Set(arr1.concat(arr2)));
        console.log(merge);  
}
UniqueArr([1,2,3,4,5,6],[1,2,8,9,10,3]);


/* Solution 2 */

const uniqueArraylist = (arr1,arr2)=>{
      const uniqueset = new Set();
      const spreadArr = [...arr1,...arr2];
      spreadArr.forEach((element)=>{
         uniqueset.add(element);
      });
      console.log( Array.from(uniqueset));
}
uniqueArraylist([1,2,3,4,5,6],[1,2,8,9,10,3]);