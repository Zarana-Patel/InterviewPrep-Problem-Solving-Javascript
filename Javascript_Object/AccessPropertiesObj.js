const person = {
    name:'zach',
    id:12,
    address:{
        street: "44 test drive",
        unit:54,
        city:"cupertino",
        zip:94116
    }
}

/* different methods to loop the obj */

for(let key in person){
     console.log(`${key} : ${person[key]}`);
}

Object.keys(person).forEach((key)=>{
    console.log(`${key} : ${person[key]}`);
});

Object.keys(person).map((key)=>{
    console.log(`${key} : ${person[key]}`);
})

Object.entries(person).forEach(([key,value])=> console.log(`${key} : ${person[key]}`));