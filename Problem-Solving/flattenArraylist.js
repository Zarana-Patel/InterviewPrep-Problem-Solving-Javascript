let arraylist = [1,3,5,7,[2,3],[7,[1,3,5]],[4,2,4,6]];

let flatten = (arr)=>{
 		let newArraylist = arr.reduce((acc,item)=>{
    		 if(Array.isArray(item)){
               acc = acc.concat(flatten(item));
         }
        
        else{
           acc = [...acc,item];
        }
       return acc;
    },[]);
 
 return newArraylist;
}
console.log(flatten(arraylist));
