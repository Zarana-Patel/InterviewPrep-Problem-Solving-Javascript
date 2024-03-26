function addition(a,b){
      return a+b;
}
console.log(addition(1,3));

const add = (a,b)=>a+b;
console.log(add(5,6));

const test = function(){
    setTimeout(()=>{
        console.log('z');
    },1000);
}();

let items  =[1,4,11,8];

const squares = items.map(x=>x*x);
console.log(squares);
