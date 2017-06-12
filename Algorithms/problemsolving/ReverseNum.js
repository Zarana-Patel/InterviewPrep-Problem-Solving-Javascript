/**
 * Created by zaranapatel on 6/12/17.
 */
function reverse(num){
    var x = '';
    while(num > 0){
        x = x + num%10;
        num = Math.floor(num/10);
    }
    return x;
}
console.log(reverse(123));
