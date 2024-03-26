//find unique characters from string


const str = "This is the best place in the world!!"

//using naive approach

const uniquechar =(str)=>{
        let unique = " ";
        for(let i =0;i<str.length;i++){
             if(!unique.includes(str[i])){
                  unique = unique + str[i];
             }
        }
        console.log(unique);
};

uniquechar(str);

//using the set

const uniquecharacter=(str)=>{
        
         let uniqueobj = Array.from(new Set(str.split("")));
         console.log(uniqueobj.join(""));
};

uniquecharacter(str);

//using spread operator

const uniquestr = (str)=>{
    return [...str].reduce((acc,curr)=>{ return acc.includes(curr)?acc:acc+curr},"");
}
console.log(uniquestr(str));

//using indexof

const usingIndexof =(str)=>{
    let unique = "";
     for(let i = 0;i<str.length;i++){
               if(unique.indexOf(str.charAt(i))< 0){
                    unique = unique + str.charAt(i);
                }
             
         }
         return unique;
     }

console.log(usingIndexof(str));