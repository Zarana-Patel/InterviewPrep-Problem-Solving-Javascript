/* Find most ouccur element */

const FindOccurance = (arr)=>{
    let obj = {};
    let max = 0;
    let el;
    for(let i = 0;i<arr.length;i++){
          if(!obj[arr[i]]) obj[arr[i]] =1;
          else obj[arr[i]]++;
    }
    for(let key in obj){
         if (max < obj[key]){
             max = obj[key];
            el = key;
         }
    }
    console.log(el);
};


FindOccurance([1,2,4,5,2,4,1,1,1,5,3,8,9]);