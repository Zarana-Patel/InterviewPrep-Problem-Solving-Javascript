
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
function mergeArray(arr1,arr2){
    let mergeArray = [];
    array1Item = arr1[0];
    array2Item = arr2[0];
    let i =1;
    let j=1;
    
    while(array1Item || array2Item){
        console.log(array1Item , array2Item);
       if(!arr2 ||  array1Item < array2Item){
         mergeArray.push(array1Item);
            array1Item = arr1[i];
            i++;
    }
    else{
    	    mergeArray.push(array2Item);
            array2Item = arr2[j];
            j++;
    }
   
}
 return mergeArray;
}
console.log(mergeArray([1,3,4,6],[2,3,7,8]));
*/
