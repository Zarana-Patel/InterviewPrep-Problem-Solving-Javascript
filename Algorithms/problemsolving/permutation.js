
//Permutation of the string

function getPermutations(str) {
    var len = str.length;
    var result = [];

    // Base Case
    if (len === 0) {
        result.push('');
        return result;
    }

    for (var i = 0; i < len; i++) {
        var before = str.substring(0, i);
        var after = str.substring(i + 1, len);
        var partials = getPermutations(before + after);

        for (var j = 0; j < partials.length; j++) {
            result.push(str.charAt(i) + partials[j]);
        }
    }
    return result;
}
console.log(getPermutations('abcd').join('\n')) ;

/*
* function getAllPermutations(string) {
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
 console.log(getAllPermutations('abc'))
 */