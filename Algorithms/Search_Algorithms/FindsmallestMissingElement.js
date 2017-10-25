/**
 * Created by zaranapatel on 10/25/17.
 */

/*
 list = [0, 1, 2, 3, 4, 5, 6, 10]
 smallest missing element Output : 7

 1) If the first element is not same as its index then return first index
 2) Else get the middle index say mid
    a) If arr[mid] greater than mid then the required element lies in left half.
    b) Else the required element lies in right half.
 */

function findFirstMissing(list,start,end) {
    if (start > end){
        return end + 1;
    }
    if (start != list[start]){
        return start;
    }
    var mid = Math.floor((start + end) / 2);

    if (list[mid] == mid){
        return findFirstMissing(list, mid+1, end);
    }

    else{
        return findFirstMissing(list, start, mid);
    }

}
var list = [0, 1, 2, 3, 4, 5, 6, 10];
var n = list.length;
console.log(findFirstMissing(list, 0, n - 1));
