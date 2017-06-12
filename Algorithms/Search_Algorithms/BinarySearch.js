/**
 * Created by zaranapatel on 6/12/17.
 */
var doSearch = function(arraylist,targetvalue){
    var min = 0 , max= arraylist.length -1, mid, element;
    while(min <=max){
        mid = Math.floor((min+max)/2);
        element = arraylist[mid];
        if(element > targetvalue){
            max = mid -1;
        }
        else if(element < targetvalue){
            min = mid+1;
        }
        else{
            return mid;
        }
    }
    return -1;

}
console.log(doSearch([1,3,5,8,11,23,34,45,56,67],45));