// Define the Product and Cart classes
class Product {
    constructor(id, name, description, img, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.img = img;
        this.price = price;
    }
}

class Cart {
    constructor() {
        this.products = [];
        this.totalPrice = 0;
    }

    // Method to add a product to the cart
    addToCart(product) {
        this.products.push(product);
        this.totalPrice += product.price;
    }

    // Method to remove a product from the cart by ID
    removeFromCart(id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            this.totalPrice -= this.products[index].price;
            this.products.splice(index, 1);
            this.showCartProducts();
        }
    }

    // Method to display the cart products
    showCartProducts() {
        const showCartProducts1 = document.getElementById('showCartProducts');
        showCartProducts1.innerHTML = "";

        this.products.forEach(product => {
            const cartProduct = document.createElement('div');
            cartProduct.className = 'cart-item';
            cartProduct.innerHTML = `<h4>${product.name}</h4>
            <p>${product.price}</p>
            <button onclick="removeFromCart(${product.id})">Remove</button>`;
            showCartProducts1.appendChild(cartProduct);
        });

        document.getElementById('totalPrice').innerHTML = this.totalPrice;
        document.getElementById('productCount').innerHTML = this.products.length;
    }
}

// Create instances of Product and Cart
const products = [
    new Product(1, 'NOKIA', 'display-12 RAM-4 CAMERA-12', 'nokia.jpg', 10),
    new Product(2, 'OPPO', 'display-12 RAM-4 CAMERA-12', 'oppo.jpg', 20),
    new Product(3, 'REALMI', 'display-12 RAM-4 CAMERA-12', 'realmi.jpg', 30)
];

const cart = new Cart();

// Function to add product to cart
function addToCart(id) {
    const addedProduct = products.find(product => product.id === id);
    cart.addToCart(addedProduct);
    cart.showCartProducts();
}

// Function to remove product from cart
function removeFromCart(id) {
    cart.removeFromCart(id);
}

// Display products
const containerProducts = document.getElementById('ContainerProduct');
products.forEach(product => {
    const newProduct = document.createElement('div');
   
    newProduct.className = 'cart';
    newProduct.style.width = '18rem';
    newProduct.innerHTML = `<div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text">Rs.${product.price}</p>
        <img src="${product.img}" class="card-img-top" alt="...">
        <a href="#" class="btn btn-danger" type="button" onclick="addToCart(${product.id});">Add To Cart<a>
    </div>`;
    containerProducts.appendChild(newProduct);
});




// Create a div element with class "row"
const rowDiv = document.createElement('div');
rowDiv.classList.add('row');

// Create two columns (each with class "col-sm-6")
for (let i = 0; i < 2; i++) {
    // Create a div element with class "col-sm-6"
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-sm-6');

    // Create a card element
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    // Create a card body element
    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');

    // Create card title
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    
    cardTitle.textContent = 'Special title treatment';

    // Create card text
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = 'With supporting text below as a natural lead-in to additional content.';

    // Create a link element
    const link = document.createElement('a');
    link.classList.add('btn', 'btn-primary');
    link.href = '#';
    link.textContent = 'Go somewhere';

    // Append card title, card text, and link to card body
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(link);

    // Append card body to card
    cardDiv.appendChild(cardBodyDiv);

    // Append card to column
    colDiv.appendChild(cardDiv);

    // Append column to row
    rowDiv.appendChild(colDiv);
}

// Append the row to the container with id "ContainerProduct"
document.getElementById('ContainerProduct').appendChild(rowDiv);

