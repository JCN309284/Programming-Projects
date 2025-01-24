// This javascript will allow you to add and remove items from your cart

let cards = document.getElementsByClassName('card');
let cart = document.getElementById('cart');
let totalElement = document.getElementById('total');
let selectedItems = {};

// This function runs when a card is clicked
function handleCardClick(event) {
    let card = event.currentTarget;
    let itemId = card.id;
    let itemName = card.getElementsByTagName('h2')[0].textContent;
    let itemPrice = parseFloat(card.getElementsByClassName('price')[0].textContent);
    if (selectedItems[itemId]) {
        selectedItems[itemId].count++;
    } else {selectedItems[itemId] = {
            name: itemName,
            price: itemPrice,
            count: 1
        };
    }
    updateCart();
}

// This function updates the cart and shows the total price
function updateCart() {
    cart.innerHTML = '';
    let total = 0;
    for (let itemId in selectedItems) {
        let item = selectedItems[itemId];

        let listItem = document.createElement('li');
        let quantityContainer = document.createElement('div');
        let quantityText = document.createElement('span');
        quantityText.textContent = item.count;
        let addButton = createButton('+', function() { modifyItem(itemId, 1); });
        let subtractButton = createButton('-', function() { modifyItem(itemId, -1); });
        quantityContainer.appendChild(subtractButton);
        quantityContainer.appendChild(quantityText);
        quantityContainer.appendChild(addButton);
        listItem.textContent = item.name + ' - $' + (item.price * item.count).toFixed(2) + ' ';
        listItem.appendChild(quantityContainer);
        cart.appendChild(listItem);
        total += item.price * item.count;
    }
    totalElement.textContent = 'Total Amount: $' + total.toFixed(2);
}

// This function modifies the count of an item (+ or -)
function modifyItem(itemId, delta) {
    if (selectedItems[itemId]) {
        selectedItems[itemId].count += delta;
        if (selectedItems[itemId].count <= 0) {
            delete selectedItems[itemId];
        }
    }
   updateCart();
}

// This function creates a button with text and a click event
function createButton(text, callback) {
    let button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', callback); 
    return button;
}
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', handleCardClick);
}
