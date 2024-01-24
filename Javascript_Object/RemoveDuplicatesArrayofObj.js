books = [
    { title: "C++", author: "Bjarne" },
    { title: "Java", author: "James" },
    { title: "Python", author: "Guido" },
    { title: "Java", author: "James" },
];
const remove_duplicates = (books)=>{
  const jsonlist = books.map(JSON.stringify);
  const uniqueset  = new Set(jsonlist);
  const uniquearray = Array.from(uniqueset).map(JSON.parse);
  console.log(uniquearray);
};

remove_duplicates(books);

let newarray = [];
let newObj = {};

for(let i in books){
    objTitle = books[i]['title'];
   
    newObj[objTitle] = books[i];
   
}
  for(let i in newObj){
      newarray.push(newObj[i]);
  }
console.log(newarray);
