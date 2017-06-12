/**
 * Created by zaranapatel on 6/12/17.
 */
var range = function(start,end){
    if ( end - start ===2){
        return [start +1];
    }
    else{
        var list = range(start , end-1);
        list.push(end-1);
        return list;
    }
}

console.log(range(3,6));