const findSecondLargest = (arr)=>{
    if(arr.length <=1){
         return arr;
    }
    else{
        const uniqueElements = (Array.from(new Set(arr))).sort(); 
        console.log(uniqueElements[uniqueElements.length-2]);
    }
}

findSecondLargest([1,78,23,56,56,2,33]);