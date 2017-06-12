/**
 * Created by zaranapatel on 6/12/17.
 */
function Quicksort(arrlist){

    if (arrlist <=1){
        return arrlist;
    }
    else{
        var sortedarray = [];
        var left =[];
        var right=[];
        var pivot = arrlist.pop();
        for(var i=0;i<arrlist.length;i++){
            if (arrlist[i]>=pivot){
                right.push(arrlist[i])
            }
            else{
                left.push(arrlist[i])
            }
        }
        return sortedarray.concat(Quicksort(left),pivot,Quicksort(right));
    }

}
var arraylist = [12,7,2,9,34,54];

console.log("Original array: " + arraylist);
var sorted = Quicksort(arraylist);
console.log("Sorted array: " + sorted);