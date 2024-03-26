const newstr = "new ";
const position = 12;

let str = "This is our Home!!"

str = str.slice(0,position) + newstr + str.slice(position);

console.log(str);

//using splice 


let neworiginal = str.split('');

neworiginal.splice(position,0,newstr);

console.log(neworiginal.join(''));

