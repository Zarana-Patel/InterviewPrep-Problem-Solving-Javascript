/**
 * Created by zaranapatel on 6/12/17.
 */
var prime = function(num){
    if (num <2){
        return false;
    }
    else{
        for(var i =2;i<num;i++){
            if(num%i ===0){
                return false;
            }
            else{
                return true;
            }
        }
    }
}
for(var i=0;i<100;i++){
    if(prime(i)){
        console.log(i);
    }
}