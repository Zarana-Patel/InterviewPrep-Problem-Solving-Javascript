const myObject = {
    myMethod: async()=>{
          const result = await resolveAfter2Seconds();
          console.log("result");
    }
}

function resolveAfter2Seconds() {
   console.log('sdfdsfdsf')
  }

myObject.myMethod();