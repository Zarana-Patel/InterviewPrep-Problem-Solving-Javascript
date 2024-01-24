const findLargestthree = (arr)=>{
     if(arr.length<=1){
        return arr;
     }
     else{
        const uniqueElements = Array.from(new Set(arr)).sort((a,b)=>b-a);
        const [firstLargestEle, secondLargestEle,  
            thirdLargestEle] = uniqueElements.slice(0, 3); 
       console.log(firstLargestEle);
       console.log(secondLargestEle);
       console.log(thirdLargestEle);
    }
}

findLargestthree([1,4,8,3,65,23,56,34,8]);

/* Find first 3 largest elements of the arraylist */

const find = (arr)=>{
     const firstLargest  = Math.max(...arr);
     arr = arr.filter((elem)=>elem !== firstLargest);
     const secondLargest = Math.max(...arr);
     arr = arr.filter((elem)=>elem !== secondLargest);
     const thirdLarget = Math.max(...arr);
     console.log(`First ${firstLargest} , Second: ${secondLargest}, Third : ${thirdLarget}`);

}
find([1,4,8,3,65,23,56,34,8]);