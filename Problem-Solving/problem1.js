/**
 * Created by zaranapatel on 7/10/17.
 */
// Using any language of your choice, write a function that takes a positive integer
// argument, and returns true if the integer is the sum of the squares of two postive
// integers, and false otherwise.
// Example: f(34) = true because 34 = 3*3 + 5*5; f(35) = false

// f(1) = false
// f(2) = true because 1*1 + 1*1 = 2;
// f(3) = false
// f(4) = false
// f(5) = true because 1*1 + 2*2 = 5;
// f(6) = false

// f(34) = true because 34 = 3*3 + 5*5;
// f(35) = false


function square(num){
    var s,sum;
    var arraylist =[];
    for(var i =1;i<=num;i++){
        s = i*i;
        arraylist.push(s);
    }
    console.log(arraylist);
    for(var i =0;i<arraylist.length;i++){
        for(var j=0;j<arraylist.length;j++){
            sum = arraylist[i]+arraylist[j];
            if(sum === num){
                return true;
            }
        }
    }
    return false;

}

console.log(square(29));