const arraylist = [1,6,2,5];

const pairs =(arr)=>arr.map((elm,index)=>arr.slice(index+1).map((element1)=>[elm,element1])).flat();
const pairssum =(arr)=>arr.map((elm,index)=>arr.slice(index+1).map((element1)=>[elm+element1])).flat(Infinity);

console.log(pairs(arraylist));

console.log(pairssum(arraylist));