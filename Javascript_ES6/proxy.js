/*const arraylist = [1,2,3,4];
const arraychangehandler = {
    set(target,property,value){
         target[property] = value;
         console.log(`Array element on index ${property} has change its values to ${value}`);
        return true;
        }
};
const proxiedArray = new Proxy(arraylist,arraychangehandler);
proxiedArray[0]=42;

*/
const person ={
     name:'z',
     age :45
}
const handler = {
       get(target,property){
         console.log(`Property firstname ${property} value has been change`);
         return target[property];  
       }
}
const proxyUser = new Proxy(person,handler);
person.name ="abhi";
console.log(proxyUser.name);
