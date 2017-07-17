/**
 * Created by zaranapatel on 7/10/17.
 */
/**
 * Created by zaranapatel on 6/22/17.
 */


var arraylist = ['car','cat','ball','apple'];

function arraytoObj (arraylist,searchkey){
    var obj = {};
    for(var i=0;i<arraylist.length;i++){

        if(!obj.hasOwnProperty(arraylist[i].charAt(0))){
            obj[arraylist[i].charAt(0)] = [arraylist[i]];
        }else{
            obj[arraylist[i].charAt(0)].push(arraylist[i]);
        }
    }
    return obj[searchkey];
}

console.log(arraytoObj(arraylist,'c'));

//solution2
/*
 var arr = ["cow","cat","bat"];

 function filter(char){
 return result = arr.filter(function(ele) {
 return  ele.charAt(0) == char;
 });
 }

 console.log(filter('c'));
 */