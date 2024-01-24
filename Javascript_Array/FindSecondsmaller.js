const FindNextSmaller =(arr)=>{
     if(arr.length<=1){
        return arr;
     }
     else{
        const sortedElements = arr.sort((a,b)=>a-b);
        console.log(sortedElements[1]);
     }
}
FindNextSmaller([1,6,3,8,34,89,56]);