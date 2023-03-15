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

const reversestr =str=> [...str].reverse().join('');
console.log(reversestr("I am zara"));

const reversestr =str=> str.split('').reverse().join('');
console.log(reversestr("I am zara"));



//solution2
/*
 function reverse1(str){
 var arr,head,tail,temp;

 if(!str) return;

 head = 0;
 tail = str.length-1;

 while(head < tail){
 temp = arr[head];
 arr[head] = arr[tail];
 arr[tail] = temp;

 head++;
 tail--;
 }

 return arr.join('');
 }

 */
