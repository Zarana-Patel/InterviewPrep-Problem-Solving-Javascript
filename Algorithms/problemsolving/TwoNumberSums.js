/**
 * Created by zaranapatel on 6/12/17.
 */
function twoSum(nums,target){
    var i, j = 0;
    var arrlength = nums.length;
    arraylist = [];
    for(i=0;i<arrlength;i++){
        var currentarr = nums[i] ;
        arrresult = currentarr+ ',';
        for(j=0;j<arrlength;j++){
            if((currentarr + nums[j]) === target){
                arrresult = arrresult+ nums[j];

                arraylist.push(arrresult);

                break;
            }
        }
    }
    return arraylist;
}



console.log(twoSum([1,4,2,3,6,-1,88,53],5));