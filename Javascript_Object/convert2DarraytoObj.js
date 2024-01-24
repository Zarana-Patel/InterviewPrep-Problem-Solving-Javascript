const array2D =[
    ["John", 12],
    ["Jack", 13],
    ["Matt", 14],
    ["Maxx", 15]
];

//using forEach

const convertArraytoObj = (array2D)=>{
    let obj = {};
    array2D.forEach((row)=>{
          let key = row[0];
          let value = row[1];
          obj[key] = value;
    });
    return obj;
}

console.log(convertArraytoObj(array2D));

//using reduce 

const covertArrObj = (array2D)=>{
    return array2D.reduce((acc,array2D)=>{
         let key = array2D[0];
         let value = array2D[1];
         acc[key] = value;
         return acc;
    },{});
}

console.log(covertArrObj(array2D));


// using flat method 

const usingflat = (array2D)=>{
    const obj = {};
    let key;
    let value;
    const flat = array2D.flat();
   for(let i=0;i<flat.length;i++){
        if(i % 2 === 0){
            key = flat[i];
            value = flat[i+1] ;         
        }
       obj[key] = value;       
   }
   return obj;
}
console.log(usingflat(array2D));