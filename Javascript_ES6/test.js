/*const fetchData = new Promise((resolve,reject)=>{
   
   setTimeout(()=>{
    const data = "fetch data from server";
       resolve(data1);
   },2000);
});

fetchData.then((result)=>{
      console.log(result);
})
.catch((error)=>{
    console.error(error);      
});*/


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