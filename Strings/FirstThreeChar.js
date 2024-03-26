//Different ways to find first three characters of the string.


// using slice

const str = "Tomorrow";

console.log(str.slice(0,3));

console.log(str.substring(0,3));


let newstr = "";
for(let i =0;i<3;i++){
        newstr += str[i];
}
console.log(newstr);