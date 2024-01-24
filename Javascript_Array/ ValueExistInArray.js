/*
     Value exists at a specific index in an array
*/

const arrValCheck = (arr,n)=>{
   if( arr.includes(n)){
       return arr.indexOf(n);
   }
   else{
        return false;
   }
};


console.log(arrValCheck([1,2,4,7],2));