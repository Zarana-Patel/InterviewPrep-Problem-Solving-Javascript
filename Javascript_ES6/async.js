async function DataFromAPI(){
    try{
       const response = await fetch(
         "https://jsonplaceholder.typicode.com/users"
       );
         if(!response.ok){
               throw new Error("Network error");
         }
         const data = await response.json();
         console.log(data);
    }catch(error){
        console.error("Error",error);
    }
 
 }