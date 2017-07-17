/**
 * Created by zaranapatel on 6/12/17.
 */
/*solution 1

 */
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
1) sort the array
2) if array [i] ==== array[i+1] then its duplicate number
   else its unique number


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

/*
 function findDups(list) {
 var uniques = {}, val;
 var dups = {};
 for (var i =0;i<list.length; i++) {
 val = list[i];
 if (val in uniques) {

 uniques[val]++;
 dups[val] = uniques[val];
 } else {
 uniques[val] = 1;
 }
 }
 console.log(uniques);
 console.log(dups);
 }

 var data = [1,2,3,4,5,2,3,2,6,8,9,9];
 findDups(data);   // returns  {2: 3, 3: 2, 9: 2}




 */