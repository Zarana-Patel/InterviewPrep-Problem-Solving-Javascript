/**
 * Created by zaranapatel on 6/12/17.
 * Output : return as string pairs["1,4" , "6,-1"]
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

/* Solution 2
   Arraylist inside another array Output : [[1,4],[6,-1],[4,1]]

function twoSum(nums,target){
    var i, j = 0;
    var arrlength = nums.length;
    arraylist = [];
    for(i=0;i<arrlength;i++){
        var currentarr = [];
        currentarr.push(nums[i]);
        for(j=0;j<arrlength;j++){
            if((nums[i]+ nums[j]) === target){
                currentarr.push(nums[j])

                arraylist.push(currentarr);

                break;
            }
        }
    }
    return arraylist;
}

console.log(twoSum([1,4,2,3,6,-1,88,53],5));

    */
/* Solution3   Using HashMap - Most efficient solution

 function twoSum(collection,target)
    {
       var sums = [];
       var hashTable =[];
    for (var i = 0; i < collection.length; i++)
    {
        var sumMinusElement = target - collection[i];
        if (hashTable[sumMinusElement.toString()] !== undefined)
        {
            sums.push([collection[i],sumMinusElement]);
        }
        hashTable[collection[i].toString()] = collection[i];
        }
        return sums;
    }
 console.log(twoSum([3, 5, 2, -4, 8, 11], 7));


 var twoSum = function(nums, target) {
 var hash = {};

 for(var i = 0; i < nums.length; i++) {
 var num = nums[i];
 if(hash[num] !== undefined) {
 return [hash[num], i]
 } else {
 hash[target - num] = i;
 }
 }

 return [];
 };
 */

