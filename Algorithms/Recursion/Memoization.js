/**
 * Created by zaranapatel on 6/15/17.
 */
/*

 Memoization is an optimization technique where expensive function calls are cached such that the result can be immediately returned the next time the function is called with the same arguments.

 This method of optimization is not unique to JavaScript and is quite common in many programming languages.

  It is especially useful in recursive functions as calls are more likely to call with the same arguments while recursing. Take a recursive factorial function for example:
 */

function memoize(func) {
    var cache = {};
    return function() {
        var key = JSON.stringify(arguments);
        if(cache[key]) {
            return cache[key];
        }
        else {
            var val = func.apply(this, arguments);
            cache[key] = val;
            return val;
        }
    };
}

var factorial = memoize(function(num) {
    console.log('working for factorial(' + num + ')');
    if(num === 1) { return 1 };
    return num * factorial(num - 1);
});

// first call
console.log(factorial(3));
//=> working for factorial(3)
//=> working for factorial(2)
//=> working for factorial(1)
//=> 6

// successive calls
console.log(factorial(3)); //=> 6
console.log(factorial(3)); //=> 6

// short circuit higher factorial calls
console.log(factorial(4));
//=> working for factorial(4)
//=> working for factorial(3)
//=> working for factorial(2)
//=> working for factorial(1)
//=> 24