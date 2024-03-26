//IIFE with closure

const counter = (function(){
    let count = 0;
    return{
          increment:function(){
              count++;
              console.log(count);
          },
          decrement: function(){
              count--;
              console.log(count);
          }
    }



})();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
