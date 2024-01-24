const obj = {
    id:1,
    name:'z'
};
 let arraylist = [];

 arraylist.push(obj);
 arraylist.unshift(obj);
 arraylist.splice(1,0,obj);

 console.log(arraylist);


 //Interate over object

//Using for ....in
 for(let key in obj){
    if(obj.hasOwnProperty(key)){
          value = obj[key];
          console.log(`${key} : ${value}`);
    }
 }

 //using object entries and map

 Object.entries(obj).map((elem)=>{
   let key = elem[0];
   let value = elem[1];
    console.log(`${key} : ${value}`);
 });

 //using for each

 Object.keys(obj).forEach((key)=>{
    console.log(`${key} : ${obj[key]}`);
 });

 //remove properties 
 const {id, ...updatedobj} = obj;
 
 console.log(updatedobj);