//How to create Object properties

const obj = new Object();

//using dot notation

obj.name = "zarana";
obj.id = 1;

console.log(obj);

// using square bracket


obj["address"] = "124 main st";
console.log(obj);

//using spread operator
const newobj = {
    ...obj,
    zipcode:12456
};
console.log(newobj);

//using Object.assign 


const mergeobj = Object.assign({},obj,newobj);
console.log(mergeobj);