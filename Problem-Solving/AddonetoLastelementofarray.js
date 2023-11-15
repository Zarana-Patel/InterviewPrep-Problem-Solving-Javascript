

/* Add one into the last element of the Array
*  Input: [1,2,3]
*  Output: [1,2,4]
* */

function incrementLast(array) {
    return array.map(
        function(elt, i, arr) {
            return elt + (i === arr.length - 1);
        }
    );
}
console.log(incrementLast([1,2,3]));

/* solution 2

 var list = [1,2,3,5,6,8,9];


 var newlist = list.map(function(element,index,array){
 if (index === list.length-1){
 return element+1;
 }
 else{
 return element;
 }
 });
 console.log(newlist);


 */