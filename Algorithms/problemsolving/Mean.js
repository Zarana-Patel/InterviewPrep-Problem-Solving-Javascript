/**
 * Created by zaranapatel on 6/12/17.
 */
var list = [5,0,12,73];
var mean;
var temp=0;

for(var i=0;i<list.length;i++){
    temp = temp+list[i];
    mean = temp/(list.length+1);
}
console.log("Mean of the Arraylist is: " + mean);

