/* Reorder an Array According to Given Indexes
   OriginalArray = ['HTML', 'CSS', 'JavaScript', 'React.js']; 
   IndexArray = [2,1,3,0];

*/

const reorder = (original,indexArray)=>{
        return indexArray.map(index => original[index]);
};



console.log(reorder(['HTML', 'CSS', 'JavaScript', 'React.js'],[2,1,3,0]));


const reorderStr = (original,index)=>{
       return original.slice().sort((a,b)=>{
          const indexA = index.indexOf(original.indexOf(a));
          const indexB = index.indexOf(original.indexOf(b));
        return indexA - indexB;
       });

       
};
console.log(reorderStr(['HTML', 'CSS', 'JavaScript', 'React.js'],[2,1,3,0]));