const arraylist = [1,3,7,3,6];

arraylist.push(7);
console.log(arraylist);

const newArr = arraylist.concat(8,9);
console.log(newArr);

const test = [...arraylist,10,11];

console.log(test);

arraylist.splice(arraylist.length,0,12,13);
console.log(arraylist);


arraylist[arraylist.length] =16;
console.log(arraylist);