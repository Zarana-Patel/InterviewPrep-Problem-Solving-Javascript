const removeChar =(index)=>{
    const str = "this is my home";
    let newstr = str.substring(0,index-1) + str.substring(index,str.length);
    console.log(newstr);
};

removeChar(6);

//remove first char from the string

const str = "Today is awesome Day!!";

let newstr = str.slice(1);
console.log(newstr);
