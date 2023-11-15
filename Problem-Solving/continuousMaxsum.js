/**
 * Created by zaranapatel on 7/17/17.
 */

/*
  Arraylist input: [-1,-2,3,4,6,-8,7] Output : 13(Maxsum continuously is 3+4+6 = 13)
 Arraylist input: [-1,-2,3,4,6,-1,7] Output : 19 (Maxsum continously is 3+4+6+(-1)+7)
 */
function ContinuousMax(array){
    var maxnum = 0;
    var current = 0 , length = array.length;

    if(length ==0){
        return array;
    }
    else{
        for(var i=0;i<length;i++){
            current = Math.max(0,current+array[i]);
            maxnum = Math.max(current,maxnum);
        }
    }
    return maxnum;
}
console.log(ContinuousMax([-1,-2,3,4,6,-8,7]));