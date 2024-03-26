/* create all possible combination of str
dog

*/

const combination =(str)=>{
    let comarraylist = [];
    for(let i =0;i<str.length;i++){
     
        for(let j =i+1;j<str.length+1;j++){
            
             console.log(str.slice(i,j));
        }
    }
    return comarraylist;
}
combination("dog");