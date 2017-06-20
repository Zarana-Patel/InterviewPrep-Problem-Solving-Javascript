/**
 * Created by zaranapatel on 6/12/17.
 * Missing elements within range 1 to 9
 * Input array list : [1,3,2,7,5,9]
 * Output : 4,6,8
 */
var arr = [1,3,2,7,5,9];
function missing(arr){
    var sortedarr = arr.slice().sort();
    var misselements = [];
    for(var i =0;i<sortedarr.length;i++){
        if(sortedarr[i] - sortedarr[i-1] != 1){
            var x = sortedarr[i] - sortedarr[i-1];
            var j =1;
            while (j < x){
                misselements.push(sortedarr[i-1] +j);
                j++ ;
            }
        }
    }
    console.log(misselements);
}
missing(arr);