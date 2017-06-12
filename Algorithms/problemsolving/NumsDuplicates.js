/**
 * Created by zaranapatel on 6/12/17.
 */
//solution 1
function Duplicates(nums){
    var unique = [];
    var dups =[];
    var count = 0;

    for(var i =0;i<nums.length;i++){
        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
            unique.push(nums[i]);
        }
        else{
            dups.push(nums[i]);
            count = count+1;
        }
    }
    console.log(unique);
    console.log(dups);
    console.log(count);
}

Duplicates([1,2,3,4,5,4]);
/* solution 2

 var arr = [9, 9, 9,9,111, 2, 3, 4, 4, 5, 7];
 var sorted_arr = arr.slice().sort();
 var duplicate = [];
 var unique = [];
 for (var i = 0; i < arr.length - 1; i++) {
 if (sorted_arr[i + 1] == sorted_arr[i]) {
 duplicate.push(sorted_arr[i]);
 }
 else{
 unique.push(sorted_arr[i]);
 }
 }
 console.log(duplicate);
 console.log(unique);
 */

/*solution 3
 var arr = [1,6,9,2,4,5,8,2,3,5,6];

 function removeduplicates(arr){
 var tmp = [];
 for(var i = 0; i < arr.length; i++){
 if(tmp.indexOf(arr[i]) == -1){
 tmp.push(arr[i]);
 }
 }
 return tmp;
 }

 console.log(removeduplicates(arr)); */