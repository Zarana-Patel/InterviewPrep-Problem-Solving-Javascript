
//destructuring the object

let obj ={'a':1,'b':2,'c':{'c1':12,'c2':56,'c3':67}};

let {a,b,c:{c1,c2,c3}} =obj;
console.log(a,b,c1,c2,c3);

//combine 2 arraylist with spread operator

let array1= [1,3,65,76];
let array2=[8,2,7,3,56,3];

let newArray = [...array1,...array2];
console.log(newArray);

//arraylist with destructuring

let changespecificArrayvalues = [{a:1,b:4,c:6},{a:2,b:5,c:8},{a:3,b:6,c:7}];

let op = changespecificArrayvalues.map(({a,...rest},index)=>( {...rest,a:index+10}));

console.log(op);

//swap values

const arraylist = [1,34,7,8];
[arraylist[0],arraylist[3]] = [arraylist[3],arraylist[0]];

console.log(arraylist);

//to get subset of object

const obj1 = {a:1,b:2,c:3};

let subset =(({a,c})=>({a,c}))(obj1);
console.log(subset);

//array to object conversion

const arr = ["2019","09","02"];
let date = (([year,month,day])=>({year,month,day}))(arr);
console.log(date);

//nested array destructuting
let myArray = [1,2,[6,7],[8,9,10],[11]];

const [a3,b3,[c,d],[e,f,g],[h]]=myArray;
console.log([a3,b3,c,d,e,f,g,h]);

//nested object destructuting
const user = {  
    nested: { 
      a1: 'foo',
      b: [
        'first item',
        'second item',
        'third item',
      ]
    }
  }
  
const {nested:{a1,b:[first,third]}} = user;

console.log({a1,first,third});

const myobj = {firstName:'zarana',age1:30};
const {firstName,age1 ,[firstName + '_hello']: combine } = myobj;

console.log(combine);