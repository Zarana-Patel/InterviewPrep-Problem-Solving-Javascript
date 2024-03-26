
//Async functionality with promise 
let fetchAPI = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

fetchAPI.then((response)=>{
     return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});
   //Async functionality with async and await

   async  function test(){
     let response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
     let data = await response.json();
     console.log(data);
   }
   test();
//await operation when waiting for multiple tasks to complete
   async function getData(){
      const [data1,data2,data3] = await Promise.all([
        fetch('api/data1').then(response=>response.json()),
        fetch('api/data2').then(response=>response.json())
      ]);
      console.log(data1);
      console.log(data2);
   }
   