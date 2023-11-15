
//Brute force Approach - Complexity o(n^2)

/*
var twoSum = function(nums, target) {
  for(var i=0;i<nums.length;i++){
      for(var j=i+1;j<nums.length;j++){
          if((nums[i]+nums[j]) ===target){
              return [i,j];
          }
      }
  }  
}; 
*/
// Using Map o(n) Complexity
let Twosum = (nums,target)=>{
       let numIndex = new Map();
        for(let i=0;i<nums.length;i++){
               difference = target-nums[i];
               if(numIndex.has(difference)){
                   return [numIndex.get(difference),i];
               }
               numIndex.set(nums[i],i);
        }
}
console.log(Twosum([2,3,7,8,10],9));
