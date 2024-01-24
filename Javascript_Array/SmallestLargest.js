/* Remove Smallest and Largest Element from Arraylist
1) min,max() and splice (or with reduce)
2) sort arraylist and remove first and last elements using slice
3) for loop and and min and max()
*/

const arraylist = [78,12,62,1,54];

const usingReduce = (arraylist)=>{
    
        const minelem = Math.min(...arraylist);
        const maxelem = Math.max(...arraylist);
        arraylist = arraylist.reduce((newArraylist,element)=>{
              if(element !== minelem && element !== maxelem){
                    newArraylist.push(element);
              }
              return newArraylist;
        },[])
        console.log(arraylist);
}
usingReduce(arraylist);

// Using sort and slice

const usingsort =(arraylist)=>{
       return arraylist.sort((a,b)=>a-b).slice(1,arraylist.length-1);
      
}
console.log(usingsort(arraylist));


//using for 

const usingforloop = (arraylist)=>{
    let smallestElement = Infinity; 
    let largestElement = -Infinity; 
        for(let i=0;i<arraylist.length;i++){
               if (arraylist[i] < smallestElement){
                smallestElement = arraylist[i];
               }
               if (arraylist[i] > smallestElement){
                largestElement = arraylist[i];
               }
        }
        let newArraylist = arraylist.filter((num)=>num !==smallestElement && num !==largestElement);
        console.log(newArraylist);
}
usingforloop(arraylist);