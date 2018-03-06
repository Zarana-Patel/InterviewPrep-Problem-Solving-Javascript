/**
 * Created by zaranapatel on 7/9/17.
 */

/*
   zara - returns false becuase a is repeat character
   Abhi - returns true becuase each characters are unique

 */
function unique(str){
    var ch;
    for (i = 0; i < str.length; i++) {
        ch = str[i];
        if (str.indexOf(ch, i + 1) > 0) {
            return false;
        }
    }

    return true;
}
console.log(unique("zara"));


//solution 2
/*
function determineUnqiue(str){
    var hash,i,char;

    if(!str) return true;

    hash = {};

    for(i=0;i<str.length;i++){
        char = str[i];
        if(hash[char]){
            return false;
        }
        hash[char] = true;
    }

    return true;

}
console.log(determineUnqiue('zarna'));
    */
/*Solution-3
var name = "javascript ";
function uniquestr(name){
	for(var i =0;i<name.length;i++){
if(name.lastIndexOf(name[i]) === name.indexOf(name[i])){
 	   return false;
}else{
   return true;
}
}
}
console.log(uniquestr(name));
*/
