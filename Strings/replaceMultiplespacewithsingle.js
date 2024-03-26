const str = "    welcome     to     our     home     ";

const replaceMultipleSpaces = (str)=>{
      
        let newstr = str.replace(/\s+/g,' ');
        console.log(newstr);
};

replaceMultipleSpaces(str);

//using trim split and join

const newstr = str.trim().split(/[\s]+/).join(' ');

console.log(newstr);