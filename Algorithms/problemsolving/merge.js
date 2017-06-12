
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
