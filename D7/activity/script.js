let cart = [];
let totalAmount = 0;

function addToCart(productName, productPrice) {
    // Add item to cart array
    cart.push({ name: productName, price: productPrice });
    totalAmount += productPrice;

    // Update the cart display
    updateCart();
}

function updateCart() {
    // Get the cart list element
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = '';

    // Populate cart items
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = `${item.name} - $${item.price}`;

        // Add a remove button for each item
        const removeButton = document.createElement('button');
        removeButton.className = 'btn btn-danger btn-sm';
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            removeFromCart(index);
        };

        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
    });

    // Update total amount
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

function removeFromCart(index) {
    // Remove item from cart and update total
    totalAmount -= cart[index].price;
    cart.splice(index, 1);

    // Update the cart display
    updateCart();
}