let obj = { "1": 5, "2": 7, "3": 0, "4": 0, "5": 0 };

//Object Entries 


const arraylist = (obj)=>{
    let arraylist = [];
    let result = Object.entries(obj);
    for(let i =0;i<result.length;i++){
          for(let j =0;j<result[i].length;j++){
              console.log(result[i][j]) ;
          }
    }
   
};

console.log(arraylist(obj));