const obj = [{
    name:'john',age:20
},
{
    name:'jane',
    age:56
},


{
    name:'joseph',
    age:67
}];

let arraylist = obj.map((obj)=>{
        return obj.age;
});
console.log(arraylist);

obj.forEach((o)=>{
    console.log(o.age);
})

const filteredAge = obj.filter((object)=>{
       if(object.age >=60){
          return object.age;
       }
});

console.log(filteredAge);


//how to create set 

const myArraylist = [1,2,3,3,5];
const mySet = new Set(myArraylist);
console.log(mySet);