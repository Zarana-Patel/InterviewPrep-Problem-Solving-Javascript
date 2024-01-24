let employees_data = [
    {
        employee_id: 1,
        employee_name: "kiara",
    },
    {
        employee_id: 2,
        employee_name: "soniya",
    },
    {
        employee_id: 3,
        employee_name: "john",
    },
];
//modify data using Array map...

const modify = employees_data.map((obj)=>{
    if(obj.employee_id === 2){
          return {...obj,employee_name:"zara"};
    }
    return obj;
});
console.log(modify);

// using for .. of method
for(let obj of employees_data){
  if(obj.employee_id ===1){
     obj.employee_name="test";
  }
 
}
console.log(employees_data);

//using Array reduce 
let modifyusingreduce = employees_data.reduce((acc,obj)=>{
    if(obj.employee_id ===1){
        const modifyobj = {...obj,employee_name:"hello"};
        acc.push(modifyobj);
    }
    else{
        acc.push(obj);
    }
    return acc;
},[]);

console.log(modifyusingreduce);