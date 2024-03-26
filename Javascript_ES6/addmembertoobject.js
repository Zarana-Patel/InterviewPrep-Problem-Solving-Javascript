let user ={
     name:'zarana',
     age:32
};

user.lastName = user.name ==='zarana'?'patel':'nolastname';
console.log(user);


//assign properties using object assign

let home = {
    type:'townHome',
    bedrooms :3
}
let bathrooms = 2;

Object.assign(home,{bathrooms:2});


console.log(home);


//check object has properties or not


if(home.hasOwnProperty ('type')){
    console.log('yes home has property called type');
}
else{
      console.log('no home does not have property called type');
}

///merge objects 


let obj1 = {
    food:'pizaa',
    animal:'cat'
}

let obj2 = {
      pet:'dog',
      yummyfood:'pasta'
}

let mergeObject = Object.assign(obj1,obj2);
let mergeObj = {...obj1,...obj2};

console.log(mergeObject);
console.log(mergeObj);

//access nested object properties using destructing es6

let data ={
    code:43,
    items:[{
        id:1,
        name:'foo'
    },
{
    id:2,
    name:'bar'
}]
}

const {items:[,{name: secondName}]} = data;

console.log(secondName);

let person = {
    name:'John',
    age:30,
    address:{
         city:"New York",
         state: 'NY'
    }
}
//ES5 version using for ..in
for(let key in person){
    console.log(`${key} : ${person[key]}`);

    if(typeof person[key] ==="object"){
          for(let nestedkey in person[key]){
               
                     console.log(`${nestedkey}:${person[key][nestedkey]}`);
                    
                
          }
    }
}

//ES6 verion using for ...of

for(const[key,value] of Object.entries(person)){
      console.log(`${key} : ${value}`);
      if(typeof value ==='object'){
           for(let [nestedkey,nestedval] of Object.entries(value)){
               console.log(`${nestedkey}:${nestedval}`);
           }
      }
}
//object iteration using map


let obj3 = {
      a:{
        x:3,
        y:5
      },
      b:{
        x:8,
        y:2
      }
}


const result = Object.entries(obj3).map(([k,v])=>{
       return {id:k,sum:v.x+v.y};
       
});
console.log(result);