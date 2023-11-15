/**
 * Created by zaranapatel on 7/9/17.
 */
function Duplicates(str){
    var unique={},dups={},val;
    for(var i =0;i<str.length;i++){
        val = str[i];
        if(val in unique){
            unique[val]++;
            dups[val] = unique[val];
        }
        else{
            unique[val]=1;
        }
    }
    console.log(dups);
}

Duplicates('Zarana');
