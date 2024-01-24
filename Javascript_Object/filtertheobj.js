let employees = [
    { name: "Tony Stark", department: "IT" },
    { name: "Peter Parker", department: "Pizza Delivery" },
    { name: "Bruce Wayne", department: "IT" },
    { name: "Clark Kent", department: "Editing" }
];

const filterbydepartment = (employees,department)=>{
        let result = employees.filter(emp=>emp.department === department);
        for(let i =0;i<result.length;i++){
              console.log(result[i].name);
        }
       
};
filterbydepartment(employees,"IT");

let data = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
    { id: 4, name: "d" },
    { id: 5, name: "e" },
    { id: 6, name: "f" },
];

let id = 5;

let result = data.filter((elem)=>{
    return elem.id === id;
});
console.log(result[0].name);