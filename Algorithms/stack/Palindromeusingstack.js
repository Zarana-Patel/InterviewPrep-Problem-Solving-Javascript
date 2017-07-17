/**
 * Created by zaranapatel on 6/12/17.
 */
function isPalindrome(word) {
    var s = [];
    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length > 0) {
        rword += s.pop();
    }
    if (word == rword){
        return true;
    }
    else {
        return false;
    }
}

console.log(isPalindrome('abc'));
console.log(isPalindrome('aba'));