const array1 = [1,2,5,7,8,10];
const array2 = [1,5,8,67,3];

const intersection = (array1,array2)=>{
    const interarraylist =[];
    for(let i = 0;i<array1.length;i++){
         for(let j=0;j<array2.length;j++){
            if(array1[i] === array2[j]){
                interarraylist.push(array1[i]);
            }
         }
    }
    return interarraylist;
}
console.log(intersection(array1,array2));

//using for Each and includes
const usingforEach = (array1,array2)=>{
        const common_elements = [];
        array1.forEach((elem)=>{
            if(array2.includes(elem)){
                common_elements.push(elem);
            }
            
        });
        return common_elements;
}
console.log(usingforEach(array1,array2));
