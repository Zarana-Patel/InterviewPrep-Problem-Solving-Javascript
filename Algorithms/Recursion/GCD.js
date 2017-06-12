/**
 * Created by zaranapatel on 6/12/17.
 */
function gcd(a,b){
    if(b){
        return (b, gcd(b%a));
    }
    else{
        return Math.abs(a);

    }

}
console.log(gcd(24,60));