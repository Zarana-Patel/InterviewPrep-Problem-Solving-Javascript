const arraylist = [1,6,2,6,3,8,23,46];
const arr = [6,3,7,9,3];

const merge = arraylist.concat(...arr);

console.log([...new Set(merge)]);
