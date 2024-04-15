

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




