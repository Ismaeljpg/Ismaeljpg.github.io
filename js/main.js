// cart
let cartIcon = document.querySelector('#cart-icon'); 
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
//open cart
cartIcon.onclick = () => {
    cart.classList.add ('active')
};
//close cart
closeCart.onclick = () => {
    cart.classList.remove ('active')
};

//cart working JS
if (document.readyState == 'loading'){
    document.addEventListener('DOMcontentloaded', ready);
} else {
    ready ();
}

//making Function
function ready(){
    //remove items from cart
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
}

//remove Items From Cart
function removeCartItem(event){
    var buttonClicked = event.target; 
    buttonClicked.parentElement.remove();
}