(function (window, document) {
    var taxRate = 0.05,
        shippingRate = 15.00,
        cart = [],localStorage = window.localStorage,
        cart_items= JSON.parse(localStorage.getItem('colortokenScart'));

    var cartSubTotal = document.getElementById('cartsubtotal');
    var cartTax = document.getElementById('cart-tax');
    var cartShipping = document.getElementById('cart-shipping');
    var cartTotal = document.getElementById('cart-total');

    var cart = function(){};

    var fc = new cart();

    fc.loadItem = function(){

        var shopCartDivOne = document.getElementsByClassName('final_cart');
        var total_price = 0;
        if(cart_items.length == 0){
            shopCartDivOne[0].innerHTML = "Cart is Empty";
            shopCartDivOne[0].style.textAlign = 'center'
            document.getElementsByClassName('totals')[0].style.display = 'none';
        }else {
            cart_items.forEach(function (product) {
                total_price += parseFloat(product.price);
                var newChild = '<div class="product"> <div class="product-image"> <img src="./images/' + product.image + '"> </div>';
                newChild += '<div class="product-details">';
                newChild += '<div class="product-title">' + product.title + '</div>';
                newChild += '<p class="product-description">' + product.desc + '</p>';
                newChild += '</div>';
                newChild += '<div class="product-price">' + product.price + '</div>';
                newChild += '<div class="product-quantity"><input class="change-quantity" type="number" value="1" min="1"></div>';
                newChild += '<div class="product-removal"><button class="remove-product" data-id="' + product.id + '">Remove</button></div><div class="product-line-price">' + product.price + '</div>';
                shopCartDivOne[0].insertAdjacentHTML('beforeend', newChild);
            });

            cartSubTotal.innerHTML = total_price.toFixed(2);
            cartTax.innerHTML = taxRate.toFixed(2);
            cartShipping.innerHTML = shippingRate.toFixed(2);
            cartTotal.innerHTML = (total_price + taxRate + shippingRate).toFixed(2);
        }
    };

    fc.bindEvents = function () {
        var items = document.querySelectorAll('.remove-product');
        [...items].forEach(function (el) {
            el.onclick = fc.removeItem;
        });

        var change_inputs = document.querySelectorAll('.change-quantity');
        [...change_inputs].forEach(function (el) {
            el.onchange = fc.calculate_item_price;
        });
    };

    fc.removeItem = function (e) {
        var item_id = e.target.attributes['data-id'].value;
        var index = cart_items.map(function(e) { return e.id; }).indexOf(item_id);
        cart_items.splice(index, 1);
        localStorage.setItem("colortokenScart", JSON.stringify(cart_items));

        var shopCartDivOne = document.getElementsByClassName('final_cart');
        shopCartDivOne[0].removeChild(e.target.parentElement.parentElement);

        if(cart_items.length == 0){
            shopCartDivOne[0].innerHTML = "Cart is Empty";
            shopCartDivOne[0].style.textAlign = 'center'
            document.getElementsByClassName('totals')[0].style.display = 'none';
        }

        fc.calculate_total();
    };

    fc.calculate_item_price = function (e) {
        var parent = e.target.parentElement.parentElement;
        var item_price = parseFloat(parent.children[2].innerHTML).toFixed(2);
        var Total = item_price * e.target.value;
        parent.children[5].innerHTML = Total.toFixed(2);

        fc.calculate_total();
    };

    fc.calculate_total = function (){
        var product_price_line = document.querySelectorAll('.product-line-price');
        var subTotal = 0;
        [...product_price_line].forEach(function (el) {
            subTotal += parseFloat(el.innerHTML);
        });

        cartSubTotal.innerHTML = subTotal.toFixed(2);
        cartTotal.innerHTML = (subTotal + taxRate + shippingRate).toFixed(2);
    }

    fc.init = function(){
        fc.loadItem();
        fc.bindEvents();
    };

    fc.init();

})(window,document);