function  swap(str)
    {
       if(str.length <2){
          return str;
       }
       else{
          return (str.charAt(str.length-1)+str.substring(1,str.length-1)+str.charAt(0));
       }
        
    }
console.log(swap("yellow"));
console.log(swap("h"));
console.log(swap("hs"));
console.log(swap(""));
console.log(swap("12"));
