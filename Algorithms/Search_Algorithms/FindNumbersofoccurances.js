/**
 * Created by zaranapatel on 6/12/17.
 *
 * input : target 2
 * Output : 2 occurs 3 times in arraylist

 */
var binarySearch = function(a,t,b){
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

};
var target = 2;
var firstIndex = binarySearch([0,1,2,2,2,3,3,3,3,3,3,3,3,7,7,7,7,7],target,true);
if(firstIndex === -1){
    console.log(target);
}
else{
    var lastIndex = binarySearch([0,1,2,2,2,3,3,3,3,3,3,3,3,7,7,7,7,7],target,false);
    result = lastIndex-firstIndex +1;
    console.log(target + " occurs "+ result +" times in arraylist");
}

