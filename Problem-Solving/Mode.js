/**
 * Created by zaranapatel on 6/12/17.
 */
var list = [5,0,12,73,73,6,3,2,5,0];
var mode = [];
var sort=list.sort();

for(var i=0;i<sort.length;i++){
    if(sort[i] === sort[i+1]){
        mode.push(sort[i]);
    }
};
console.log(mode);
