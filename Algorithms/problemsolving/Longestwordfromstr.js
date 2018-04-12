function findLongestWord(str) {
  
  var strSplit = str.split(' ');
  var longestWord = strSplit.sort(function(a, b) { 
    return b.length - a.length;
  });
 
  return longestWord[0].length; 
};

console.log(findLongestWord("I love javascript coding!!"));


/* Solution 2 : 
function LongestWord(sen){
  var str = sen.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
console.log(LongestWord("Testing the web application"));

*/
