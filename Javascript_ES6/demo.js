/*async function DataFromAPI(){
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
 DataFromAPI();*/
 async function fetchDataWithAsyncAwait() {
    try {
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      if (!responce.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await responce.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  fetchDataWithAsyncAwait();