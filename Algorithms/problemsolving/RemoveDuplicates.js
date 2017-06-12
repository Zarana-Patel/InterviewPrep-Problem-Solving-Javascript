/**
 * Created by zaranapatel on 6/12/17.
 */
function RemoveDups(string){
    var unique = '';
    var dup = '';
    count = 0;
    for(var i=0;i<string.length;i++){
        if(string.indexOf(string[i]) == string.lastIndexOf(string[i])){
            unique = unique+string[i];
        }
        else{
            dup = dup+string[i];
            count = count+1;
        }

    }
    console.log(unique);
    console.log(dup);
    console.log(count);
}
RemoveDups('zarana');