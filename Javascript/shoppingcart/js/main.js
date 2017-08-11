(function (window, document) {
    var products,
        localStorage = window.localStorage,
        cart = JSON.parse(localStorage.getItem('colortokenScart'));

    var shoppingCart = function(){};

    var sc = new shoppingCart();

    sc.loadItem = function(){
        /* We can use json file using AJAX call*/
        products = [
            {
                "id" : "P123",
                "title" : "Honey Bunches of Oats Granola, 11 Oz",
                "image" : "img1.jpeg",
                "price" : "5.99",
                "desc" : "Made with natural wildflower honey. Packed with 34% of whole grain that...the entire family will love! Per 1/2 Cup Serving: 220 Calories; 0.5g Sat Fat--3% DV; 10mg Sodium--0% DV; 12g Sugars."
            },
            {
                "id" : "P456",
                "title" : "Honey Bunches of Oats Granola, 11 Oz",
                "image" : "img2.jpeg",
                "price" : "12.99",
                "desc" : "Made with natural wildflower honey. Packed with 34% of whole grain that...the entire family will love! Per 1/2 Cup Serving: 220 Calories; 0.5g Sat Fat--3% DV; 10mg Sodium--0% DV; 12g Sugars."
            }
        ];

        var shopCartDivOne = document.getElementsByClassName('shopping-cart');
        products.forEach(function (product){
            var newChild = '<div class="product"> <div class="product-image"> <img src="./images/' + product.image + '"> </div>';
            newChild += '<div class="product-details">';
            newChild += '<div class="product-title">'+ product.title +'</div>';
            newChild += '<p class="product-description">'+ product.desc+'</p>';
            newChild += '</div>';
            newChild += '<div class="product-price">'+ product.price +'</div>';
            newChild += '<div class="product-removal"><button class="add_to_cart-product" data-id="'+ product.id +'">Add to cart</button></div>';
            shopCartDivOne[0].insertAdjacentHTML('beforeend', newChild);
        });

        document.getElementsByClassName('checkout')[0].innerHTML = 'Review Cart (' + cart.length + ')';
    };

    sc.bindEvents = function () {
        var items = document.querySelectorAll('.add_to_cart-product');
        [...items].forEach(function (el) {
            el.onclick = sc.addToCart;
        });
    };
        /* add to cart*/
    sc.addToCart = function (e) {
        var item_id = e.target.attributes['data-id'].value;
        products.forEach(function (product){
            if(product.id == item_id){
                cart.push(product);
            }
        });
        localStorage.setItem("colortokenScart", JSON.stringify(cart));

        document.getElementsByClassName('checkout')[0].innerHTML = 'Review Cart (' + cart.length + ')';
    };

    sc.init = function(){
        sc.loadItem();
        sc.bindEvents();
    };

    sc.init();

})(window,document);