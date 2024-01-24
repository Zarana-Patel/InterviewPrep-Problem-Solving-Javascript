/* Check Array is sorted or not
1) Using the Brute Force Approach
2) Using the every() Method
3) Using sort() Method
4) Using Recursion Method
*/


const arraylist = [32,45,66,85];

const Sortedarraylist = (arraylist)=>{
       for(let i =0;i<arraylist.length-1;i++){
           if(arraylist[i] > arraylist[i+1]){
            return false;
           }
           else{
            return true;
           }
       }
}

console.log(Sortedarraylist(arraylist));


//Using Every method


const everySortArray = arraylist.every((val,index,array)=>index ===0 || val>=array[index-1]);

console.log(everySortArray);
