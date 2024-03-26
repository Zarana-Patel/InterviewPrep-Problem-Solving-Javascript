//create half string uppercase and half lowercase

const str = "This is our home q";

//Using for loop and uppercase lowercase methods

const convertstr =(str)=>{
    let firsthalf ="";
    let secondhalf ="";
    for(let i =0;i<Math.ceil(str.length/2);i++){
        firsthalf += str[i];
    }
    for(let i=Math.ceil(str.length/2);i<str.length;i++){
        secondhalf += str[i];
    }
    console.log(firsthalf.toUpperCase());
    console.log(secondhalf.toLowerCase());
}

convertstr(str);

// Using slice , uppercase and lowercase


const convertstr1 = (str)=>{
      let firsthalf = str.slice(0,Math.ceil(str.length/2)).toUpperCase();
       let secondhalf = str.slice(Math.ceil(str.length/2),str.length).toLowerCase();
       console.log(firsthalf);
       console.log(secondhalf);
}
convertstr1(str);