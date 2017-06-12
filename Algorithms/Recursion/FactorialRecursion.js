/**
 * Created by zaranapatel on 6/12/17.
 */
function factorial(num){
    if(num  === 0){
        return 1;
    }
    else{
        return num *factorial(num - 1);

    }

}
console.log(factorial(3));
