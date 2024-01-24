const arraylist = [1,6,5,7,9,23];

const ReverseArray = (arraylist)=>{
    const reverse = [];
        for(let i =arraylist.length-1;i>=0;i--){
              reverse.push(arraylist[i]);
        }
        return reverse;
};

console.log(ReverseArray(arraylist));

//using reverse method
const reverse_method = arraylist.reverse();
console.log(reverse_method);


//using map

let usingMap = arraylist.map((elem,index)=>arraylist[arraylist.length - 1 - index]);


console.log(usingMap);
