/**
 * Created by zaranapatel on 6/12/17.
 */
    //unshift - add the element from beginning of the arraylist
    //shift - remove the element from beginning of the arraylist
var arraylist = [1,9,12,567,32,12];
console.log("List of array ");
for(var i =0;i<=arraylist.length-1;i++){
    console.log(arraylist[i]);

}
arraylist.unshift(43);
arraylist.unshift(3);
arraylist.unshift(93);

console.log("List of array after unshift operation");
for(var i =0;i<=arraylist.length-1;i++){
    console.log(arraylist[i]);

}
console.log("List of array after shift operation ");
arraylist.shift();
for(var i =0;i<=arraylist.length-1;i++){
    console.log(arraylist[i]);


}
console.log("Length of the array:"+arraylist.length);