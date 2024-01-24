//find last item of the object

let Obj = {
    "1_prop": "1_Val",
    "2_prop": "2_Val",
    "3_prop": "3_Val"
};

const lastElem = Obj[Object.keys(Obj)[Object.keys(Obj).length-1]];
console.log(lastElem);

//Usin stringify


    let lastElement;
        for (lastElement in Obj);
        lastElement;
    console.log(Obj[lastElement] );

    
