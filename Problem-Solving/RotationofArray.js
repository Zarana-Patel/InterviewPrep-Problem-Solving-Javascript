/**
 * Created by zaranapatel on 8/8/17.
 */
/*
  Input : arraylist [1,2,3,4,5,6,7,8] and d =3
  output : [4,5,6,7,8,1,2,3]
 Input : arraylist [1,2,3,4,5,6,7,8] and d =5
 output : [6,7,8,1,2,3,4,5]

 */



var arraylist = [1,2,3,4,5,6,7,8,9,10];

//output : [3,4,5,6,7,8,9,10,1,2];

function rotation(arraylist,d){
    results=[];
    var temp= arraylist.slice(d,arraylist.length);
    for(var i =0;i<arraylist.length;i++){
        if (i<d){
            results.push(arraylist[i]);
        }
    }
    results = temp.concat(results);
    console.log(results);
}

rotation(arraylist,5);