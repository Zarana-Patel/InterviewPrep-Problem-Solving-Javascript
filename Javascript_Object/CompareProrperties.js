//How to compare two objects to determine the first object contains equivalent property values to the second object in JavaScript ?

let obj1 = {
    name: "John",
    age: 23,
    degree: "CS"
};
 
let obj2 = {
    name: "John",
    age: 23,
    degree: "CS"
};

const obj3 = { name: "John",degree: "CS" };
const obj4 = {name:"max",age: 23, degree: "CS"};

const compare = (obj1,obj2)=>{
    return(Object.keys(obj2)
                 .every((val)=>
                 obj1.hasOwnProperty(val) &&
                 obj1[val] === obj2[val]
          )
    )
};

console.log(compare(obj1,obj2));
console.log(compare(obj3,obj4));

//using JSON.stringify

const str_json1 = JSON.stringify(obj1);
const str_json2 = JSON.stringify(obj2);

console.log(str_json1 === str_json2);

//Object entries and for of

const compareprops = (obj1,obj2)=>{
    const obj1_entry = Object.entries(obj1);
    const obj2_entry = Object.entries(obj2);
      if(obj1_entry.length !== obj2_entry.length){
        return false;
      }
      for(const [key,value] of obj1_entry){
         if(!obj2.hasOwnProperty(key) || obj2[key] !== value)
         {
            return false;
         }
         else{
            return true;
         }
      }
}
console.log(compareprops(obj1,obj2));