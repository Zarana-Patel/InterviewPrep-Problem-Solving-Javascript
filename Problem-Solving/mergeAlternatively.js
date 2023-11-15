/* 
Problem Description : 
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, 
starting with word1. 
If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string.
*/

let mergeAlternately = function (word1, word2){
     let length = Math.max(word1.length , word2.length);
     let s = '';
     for(let i =0;i<length;i++){
        s+= word1[i] || '';
         s+= word2[i] || ''; 
     }
     return s;
};

console.log(mergeAlternately('eeeeeeabc','pbs'));
