/**
 * Created by zaranapatel on 6/12/17.
 */
function reverse(str){
   if(!str || str.length<2){
       return str;
   }
   else{
   
   }
    let reversestr = '';
   for(i=str.length-1;i>=0;i--){
      reversestr = reversestr+str[i];
   }
   return reversestr;
}
console.log(reverse('I am zara'));

//ES6 
/*
const reversestr =str=> [...str].reverse().join('');
console.log(reversestr("I am zara"));

const reversestr =str=> str.split('').reverse().join('');
console.log(reversestr("I am zara"));

*/

//solution2
/*
 function reverse1(str){
 var reverseString = function(s) {
      let left = 0;
   let right =s.length-1;
   while(left <right){
       temp = s[left];
       s[left]= s[right];
       s[right] = temp;
       left++;
       right--;
   }
    
};
 console.log(reverse1(["h","e","l","l","o"]);

 */
