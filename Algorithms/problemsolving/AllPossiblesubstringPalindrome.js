/**
 * Created by zaranapatel on 6/12/17.
 */

/*
All possible palindrome substrings

Input : abaa
Output : ["a", "aba", "b", "a", "aa", "a"]

 */
function getSubString(str){
    var length = str.length;
    var arraylist = [];
    var reverse = [];
    for(i = 0; i < length; i++)
    {
        for(j=1;j<= length-i;j++){
            var sub = str.substring(i,i+j);
            var reverse = sub.split('').reverse().join('');

            if(sub === reverse){

                arraylist.push(sub);
            }
        }
    }
    return arraylist;


}


console.log(getSubString('abaa'));