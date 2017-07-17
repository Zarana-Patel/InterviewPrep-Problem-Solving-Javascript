/**
 * Created by zaranapatel on 6/12/17.
 *
 * Input :target 2
 * Output : start index of 2 is 2
 *       last index of 2 is 4
 *       so [2,4]
 */
binarySearch = function(a,t,b){
    var min=0,max =a.length-1,mid,result= -1;

    while(min <=max){
        mid = Math.floor((min+max)/2);
        if(a[mid] === t)
        {
            result = mid;
            if(b){
                max = mid-1;
            }
            else{
                min = mid+1;
            }

        }
        else if(t < a[mid]){
            max=mid-1;
        }
        else{
            min = mid+1;
        }
    }
    return result;

}
var target = 2,indexlist=[];
var firstIndex = binarySearch([0,1,2,2,2,3,3,3,3,3,3,3,3,7,7,7,7,7],target,true);
indexlist.push(firstIndex);
var lastIndex = binarySearch([0,1,2,2,2,3,3,3,3,3,3,3,3,7,7,7,7,7],target,false);
indexlist.push(lastIndex);
console.log(indexlist);