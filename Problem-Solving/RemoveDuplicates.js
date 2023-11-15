/**
 * Created by zaranapatel on 6/12/17.
 * Input : [1,6,9,2,4,5,8,2,3,5,6]
 * Output : [ 1,6,9,2,4,5,8,3]
 */

 var arr = [1,6,9,2,4,5,8,2,3,5,6];

 function removeduplicates(arr){
 var tmp = [];
 for(var i = 0; i < arr.length; i++){
 if(tmp.indexOf(arr[i]) == -1){
 tmp.push(arr[i]);
 }
 }
 return tmp;
 }

 console.log(removeduplicates(arr));

 //remove duplicates without using additional buffer

 /*
  // remove duplicate in the string without addition buffer

  function removeDuplicate(str){
  var arr,i,j;

  if(!str) return str;

  arr = str.split('');

  for(i = 0; i < arr.length; i++){
  for(j = i+1; j < arr.length; j++){
  while(arr[i] === arr[j]){
  arr.splice(j,1);
  }
  }
  }
  return arr.join('');
  }

  */