/**
 * Created by zaranapatel on 6/12/17.
 */
var fibonacci_series = function(n){
    if(n ===1){
        return [0,1];
    }
    else{
        var list = fibonacci_series(n-1);
        list.push(list[list.length-1] + list[list.length-2]);
        return list;
    }
}
console.log(fibonacci_series(4));

//Recursion Way


const fibonacci = (num) => {
  if (num < 2) {
    return num
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2)
  }
}

for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i))
}
