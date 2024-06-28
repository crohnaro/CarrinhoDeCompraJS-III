let cart = [];
let total = 0;
 
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    total += productPrice;
    renderCart();
}
 
function renderCart() {
    let cartList = document.getElementById('cart');
    cartList.innerHTML = '';
 
    cart.forEach((item, index) => {
        let listItem = document.createElement('li');
        listItem.innerText = `${item.name} - R$ ${item.price.toFixed(2)}`;
 
        let removeButton = document.createElement('button');
        removeButton.innerText = 'Remover';
        removeButton.onclick = () => removeFromCart(index);
 
        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
    });
 
    let totalElement = document.getElementById('total');
    totalElement.innerText = total.toFixed(2);
}
 
function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    renderCart();
}
 
function toggleCart() {
    let cartModal = document.getElementById('cart-modal');
    if (cartModal.style.display === 'none' || cartModal.style.display === '') {
        cartModal.style.display = 'block';
    } else {
        cartModal.style.display = 'none';
    }
}