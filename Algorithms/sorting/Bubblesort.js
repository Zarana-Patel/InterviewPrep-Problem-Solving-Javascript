/**
 * Created by zaranapatel on 6/21/17.
 */
var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function BubbleSort(a)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

BubbleSort(a);
console.log(a);

/*
var bubbleSort = function(arr){
    for(var i =0;i<arr.length;i++){
         var swapped = false;
       for(var j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
       }
       if(swapped == false){
          break;
       }
    }
  return arr;
}

console.log(bubbleSort([9,65,34,55,12]));

*/
