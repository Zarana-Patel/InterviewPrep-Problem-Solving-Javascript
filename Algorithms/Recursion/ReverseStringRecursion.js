/**
 * Created by zaranapatel on 6/12/17.
 */
function reversestring(str){
    if (str === ''){
        return str;
    }
    else
    {
        return reversestring(str.substr(1)) + str.charAt(0);
    }
}
console.log(reversestring('Hello'));