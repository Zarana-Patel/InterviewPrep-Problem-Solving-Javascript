/**
 * Created by zaranapatel on 7/9/17.
 */
function anagram(str1,str2){
    var s1 = str1.split('').sort().join('');
    var s2 = str2.split('').sort().join('');
    if(s1 === s2){
        return true;
    }
    else{
        return false;
    }

};
console.log(anagram('zara','aza'));