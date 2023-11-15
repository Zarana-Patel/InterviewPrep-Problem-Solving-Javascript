/**
 * Created by zaranapatel on 6/12/17.
 */
function Palindrome(str){
    var revesestring = str.split('').reverse().join('');
    if(str === revesestring){
        return true;
    }
    else{
        return false;
    }
}
console.log(Palindrome('abc'));
console.log(Palindrome('aba'));