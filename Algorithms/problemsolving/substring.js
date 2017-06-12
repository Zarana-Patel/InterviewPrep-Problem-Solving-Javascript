function getSubString(str)
{
    var length = str.length;
    var arraylist = [];
    for(i = 0; i < length; i++)
    {
        for(j=1;j<= length-i;j++){
            var sub = str.substring(i,i+j);
            arraylist.push(sub);
        }
    }

    return arraylist;

}


console.log(getSubString('fun'));