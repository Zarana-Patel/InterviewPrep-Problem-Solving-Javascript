/*  Check if an Array Contains only Unique Values */

const ArrayContainsUniqueElem = (arr)=>{
    const uniqueElements = Array.from(new Set(arr));
    if(uniqueElements.length === arr.length){
        return true;
    }
    else{
        return false;
    }
}
console.log(ArrayContainsUniqueElem([1,3,3,6,2,5,4]));

/* Approch 2*/

const Arrayunique =(arr)=>{
    if(arr.length<=1){
        return arr;
    }
    else{
       for(let i =0;i<arr.length;i++){
        if(arr.indexOf(arr[i]) !== i){
            return false;
        }
        else{
            return true;
        }
       }
    }
}
console.log(Arrayunique([1,3,6,2,5,4]));