var plusOne = function(digits) {
    for(var i=digits.length-1;i>=0;i--){
      digits[i]++;
      if(digits[i]>9){
         digits[i]=0;
      }
      else{
         console.log(digits);
        return digits;
      }
   }
   digits.unshift(1);
    return digits;
};


/*Example 1
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

*/
