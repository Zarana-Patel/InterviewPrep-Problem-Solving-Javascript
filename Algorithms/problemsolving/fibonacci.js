
       function Fibo(n){
       var fib = [];
       fib[0]=0;
       fib[1]=1;
       for(var i =2;i<n;i++){
       fib[i] = fib[i-1]+fib[i-2];
       }
       return fib;

       }
       console.log(Fibo(5));
       */
      /* solution 3 : display only addition up to the input value: 6
       *  fibo (6) : 0 + 1 + 1 + 2 + 3 + 5
       */

    function fibonacci(n) {
        if (n === 0 || n === 1)
            return n;
        else
            return fibonacci(n - 1) + fibonacci(n - 2);
    }

    console.log(fibonacci(6));
