/* create cumulative sum array from arraylist 
    1) using reduce
    2) using forEach

*/

const arraylist = [1,2,4,6,8];


const cumulativeSum =(arraylist)=>{

       const newArraylist = [];
        arraylist.reduce((accum,element)=>{
              accum = accum +element;
              newArraylist.push(accum);
              return accum;
        },0);
        return newArraylist;
}

console.log(cumulativeSum(arraylist));

// using forEach (similar steps for map method)
const usingforEach = (arraylist)=>{
      const newArraylist = [];
      let sum = 0;
      arraylist.forEach((element)=>{
          sum = sum +element;
          newArraylist.push(sum);
      });
      return newArraylist;
};

console.log(usingforEach(arraylist));