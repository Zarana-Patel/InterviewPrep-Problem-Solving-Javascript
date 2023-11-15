// Prime Numbers

function isPrimeNumber(num) {
    if(num < 2) { return false; }
    for (var i = 2; i < num; i++) {
        if(num % i == 0){ return false; }
    }
    return true;
}

for(var i =0;i<100;i++){
	 if(isPrimeNumber(i)) { console.log(i);}
}
