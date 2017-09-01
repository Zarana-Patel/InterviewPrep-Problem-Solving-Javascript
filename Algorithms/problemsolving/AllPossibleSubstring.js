/**
 * Created by zaranapatel on 6/12/17.
 */

/*
   Input : abc
 * Output :"a","ab", "abc","b", "bc", "c" */
function getSubString(str)
{
    var length = str.length;
    var arraylist = [];
    for(i = 0; i < length; i++)
    {
        for(j=i+1;j<=length;j++){
            var sub = str.slice(i,j);
            arraylist.push(sub);
        }
    }

    return arraylist;

}


console.log(getSubString('abc'));

console.log(getSubString('hello'));