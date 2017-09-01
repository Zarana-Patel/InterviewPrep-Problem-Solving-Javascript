
//Merge two sorting array
var a = [1,3,5];
var b = [2,4,6];

var c = Uniquearray((a.concat(b)));
console.log(c.sort());
function Uniquearray(array){
		for(var i=0;i<array.length;i++){
    	for(var j=i+1;j<array.length;j++){
      	if(array[i] === array[j]){
        			array.splice(j--,1);
        }
      }
      return array;
    }


}
//Merge two sorting array Solution 2
/*
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
 function mergetwoarr(a,b){
 var merge = a.concat(b);
 var result =Quicksort(merge);
 return result;
 }
 console.log(mergetwoarr([1,2,3],[3,5,6,7]));
 */

