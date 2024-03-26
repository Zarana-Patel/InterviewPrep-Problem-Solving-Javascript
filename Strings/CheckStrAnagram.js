//check str is anagram of another str


const checkanagram =(str1,str2)=>{
     if(str1.length !== str2.length){
         return false;
     }
     else{
        let newstr1 = str1.split('').sort().join('');
        let newstr2 = str2.split('').sort().join('');
        if(newstr1 === newstr2){
          return true;
        }
        else{
          return false;
        }
     }
      
};

console.log(checkanagram("abc","cba"));

console.log(checkanagram("a gentleman","elegant man"));
