/* Count occurances of all the elements in arraylist */

const arraylist = [1,2,6,3,5,3,2,7,9,1,1,1];


const Element_occurance = (arr)=>{
        const obj = {};
        for(let i = 0;i<arr.length;i++){
             if (!obj[arr[i]]){
                obj[arr[i]] = 1;
             }
             else{
                obj[arr[i]] = obj[arr[i]]+1;
             }
        }
        return obj;
}

console.log(Element_occurance(arraylist));

//Using forEach
const using_Foreach = (arr)=>{
    const count = {};
        arr.forEach(ele=>{
            if(!count[ele]){
                  count[ele] =1;
            }
            else{
                count[ele]++;
            }
        });
    return count;
}

console.log(using_Foreach(arraylist));
