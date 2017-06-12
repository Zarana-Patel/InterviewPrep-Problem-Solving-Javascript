/**
 * Created by zaranapatel on 6/12/17.
 */
function getAllPermutations(string) {
    var results = [];

    if (string.length === 1) {
        results.push(string);
        return results;
    }

    for (var i = 0; i < string.length; i++) {
        var firstChar = string[i];
        var charsLeft = string.substring(0, i) + string.substring(i + 1);
        var innerPermutations = getAllPermutations(charsLeft);
        for (var j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
        }
    }
    return results;
}
var palindrom = getAllPermutations('aba');

var array_palindrome = [];
var not_palindrome = []
for(var i = 0;i<palindrom.length;i++){
    var reverse = palindrom[i].split('').reverse().join('');
    if(palindrom[i] === reverse){
        array_palindrome.push(palindrom[i]);
    }
    else{
        not_palindrome.push(palindrom[i]);
    }

}
console.log('These are palindrome strings : '+array_palindrome);
console.log('These are palindrome strings : '+not_palindrome);