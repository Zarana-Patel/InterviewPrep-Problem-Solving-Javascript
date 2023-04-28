/**
 * Created by zaranapatel on 6/12/17.
 * Missing elements within range 1 to 9
 * Input array list : [1,3,2,7,5,9]
 * Output : 4,6,8
 */
var arr = [1,3,2,7,5,9];
function missing(arr){
    var sortedarr = arr.slice().sort();
    var misselements = [];
    for(var i =0;i<sortedarr.length;i++){
        if(sortedarr[i] - sortedarr[i-1] != 1){
            var x = sortedarr[i] - sortedarr[i-1];
            var j =1;
            while (j < x){
                misselements.push(sortedarr[i-1] +j);
                j++ ;
            }
        }
    }
    console.log(misselements);
}
missing(arr);


//Solution 2 (If the array is sorted)
/*
 1) check array is sorted or not .if not then sort the array
 2) find the difference between i and i+1 elements
 3) if difference is more than 1 then push the [i]+1 into new array
 4) that new array will be your missing element arraylist
 */
var numbers = [0,1,3,4,5,7,8]; // Missing 2,6
function missingarraylist(numbers){
    var missing = [];
    for ( var i = 0; i < numbers.length; i++ ) {
        var diff = numbers[i+1] - numbers[i];
        while( diff > 1 ){
            missing.push(numbers[i+1]-(diff-1));
            diff = diff-1;
        }
    }

    console.log( missing );
}

missingarraylist(numbers);

//Solution 3


function  missingNumber(arr, n){
    	let missingNumbers = [];
        if(n === 1){
            return arr[0];
        }
        if(n >1){
          let sortArray =arr.sort(function(a, b){return a - b});
          let minNumber = Math.min(...sortArray);
          let maxNumber = Math.max(...sortArray);
          for(let i=minNumber;i<maxNumber;i++){
              		if(sortArray.indexOf(i) < 0)
                    {
                      missingNumbers.push(i);
       				 }
                }
              }
       return missingNumbers;   
    }
