/**
 * Created by zaranapatel on 6/12/17.
 */
var exponent = function(num,expo){
    if(expo ===1){
        return num;
    }
    else{
        return num * exponent(num, expo-1);
    }
}

console.log(exponent(2,4));