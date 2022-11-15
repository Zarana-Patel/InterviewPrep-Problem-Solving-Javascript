/*
1) Initialize min_idx to location 0 
2) Traverse and find minimum value in array
3) White traversing and find element smaller than min_idx one the swap both the value
4) Increment the min_idx to next element
5) Repeat until array sorted
Complexity :O(n^2)
*/


var SelectionSort = function(list){
   for(var i =0;i<list.length;i++){
      min = i;
      for(var j=i+1;j<list.length;j++){
          if(list[j]<list[i]){
              min =j;
          }
      }
      var temp = list[i];
      list[i] = list[min];
      list[min]= temp;
   }
   return list;

}

console.log(SelectionSort([9,65,34,55,12]));
