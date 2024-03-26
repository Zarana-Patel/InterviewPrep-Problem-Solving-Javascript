class product{
     constructor(name,price){
        this.name = name;
        this.price = price;
     }
}
class Book extends product{
    constructor(name,price){
         super(name,price);
    }
}
class Clothing extends product{
      constructor(name,size,price){
          super(name,price)
           this.size = size;
      }
}
class Electronics extends product{
      constructor(name,price,category){
           super(name,price)
           this.category = category;
      }
}
class ShoppingCart {
      constructor(){
         this.items = [];
      }
      addtoCart(item){
            this.items.push(item);
            console.log(this.items);
      }
}

const book = new Book('happy millionair','$35');
const electronics = new Electronics('TV','$3335','homeentertainments');
const cart = new ShoppingCart();
cart.addtoCart(book);
cart.addtoCart(electronics);