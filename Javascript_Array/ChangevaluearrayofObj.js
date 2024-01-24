let arr = [ 
    {"name": "Geeks", "roll": 1}, 
    {"name": "For", "roll": 2}, 
    {"name": "Geeks", "roll": 3} 
]; 

arr.forEach((element,index)=>{
    arr[index].name = "GHG";
    return arr;
})
console.log(arr);


arr.forEach((element,index)=>{
    arr[index] ={"name":"test","roll":3};
    return arr;
})
console.log(arr);