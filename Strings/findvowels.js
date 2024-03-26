//find number of vowels in the string


const str = "This is our home!!"

const findVowel =(str)=>{
    const vowels = "AaEeIiOoUu";
    let count = 0;
    for(let i =0;i<str.length;i++){
         if(vowels.indexOf(str[i] !== -1)){
              count++;
         }
    }
    return count;
}

console.log(findVowel(str));