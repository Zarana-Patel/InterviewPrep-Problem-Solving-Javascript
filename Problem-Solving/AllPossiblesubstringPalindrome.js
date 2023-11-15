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
        for(j=i+1;j<= length;j++){
            var sub = str.slice(i,j);
            var reverse = sub.split('').reverse().join('');

            if(sub === reverse){

                arraylist.push(sub);
            }
        }
    }
    return arraylist;


}


console.log(getSubString('abaa'));