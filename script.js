const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 799,
    image: "logitech.jpg"
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    price: 1499,
    image: "headphones.jpg"
  },
  {
    id: 3,
    name: "USB-C Charger",
    price: 999,
    image: "charger.jpg"
  }
];

const cart = [];

function renderProducts() {
  const list = document.getElementById("product-list");
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    list.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").textContent = `Cart: ${cart.length}`;
  const items = document.getElementById("cart-items");
  items.innerHTML = "";
  let total = 0;
  cart.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.name} - ₹${p.price}`;
    items.appendChild(li);
    total += p.price;
  });
  document.getElementById("total").textContent = `Total: ₹${total}`;
}

renderProducts();