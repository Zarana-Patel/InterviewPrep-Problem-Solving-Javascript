var arraylist = [1,9,12,567,32,12];
console.log("List of array ");
for(var i =0;i<=arraylist.length-1;i++){
    console.log(arraylist[i]);

}
arraylist.push(43);
arraylist.push(3);
arraylist.push(93);
arraylist.pop();
console.log("List of array after push/pop operation");
for(var i =0;i<=arraylist.length-1;i++){
    console.log(arraylist[i]);

}