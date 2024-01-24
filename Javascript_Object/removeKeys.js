/* different way to remove keys from Obj */

const Obj={
    name:'joey',
    age:20,
    gender:'male'
};


let newObj = Object.keys(Obj).filter(key=>key !="gender").reduce((acc,key)=>{
    
    acc[key] = Obj[key];
    return acc;
},{});
console.log(newObj);