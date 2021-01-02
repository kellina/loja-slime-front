import { getProdutos } from "./product-service";
import "./assets/lojaSlime.css";
import { addToCart, listItems } from "./cart-service";
import getUserId from "./user-service";

function showMenu() {
  const x = document.getElementById("nav-bar");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function listProdutos() {
  const nome = document.getElementById("search").value;
  getProdutos(nome).then((products) => {
    const htmls = products.map(
      (product) => `<div class="item-span">
    <img src="${product.image}" alt="${product.name}">
    <div class="descricao">
        <h3>${product.name}</h3>
        <p class="price">R$ ${product.price}</p>
        <label for="quantity" > Quantidade: </label> 
        <input type="number" id="quantity_${product.id}"  name="products[quantity]" min="0" value="1" >
        <button class="add-cart-button" data-product-id="${product.id}">Adicionar ao carrinho
            <i class="fa fa-cart-plus" aria-hidden="true"></i>
        </button>
    </div>
</div>`,
    );

    const produtosDiv = document.getElementById("products");
    if (htmls.length === 0) {
      produtosDiv.innerHTML = "<div class=\"not-found\">Produto não encontrado.</div>";
    } else {
      produtosDiv.innerHTML = htmls.join("\n");
    }

    // Event bind for each button for add item to cart
    const buttonList = document.querySelectorAll("button.add-cart-button");
    buttonList.forEach((button) => button.addEventListener("click", (event) => {
      const userId = getUserId();
      const productId = event.target.getAttribute("data-product-id");
      const qty = document.querySelector(`#quantity_${productId}`).value;
      addToCart(userId, productId, qty);
    }));
  });
}
listProdutos();

function getCartItemsHtml(products) {
  let html = `
  <table>
  <tr>
      <th>Image</th>
      <th>Product</th>
      <th>Description</th>
      <th>Quantity</th>
      <th>Price (R$)</th>
  </tr>
  `;

  let sum = 0;
  html += products.map((product) => {
    sum += product.price;
    return `
    <tr>
    <td><img src="${product.image}"></td>
    <td>${product.name}</td>
    <td>${product.description}</td>
    <td>${product.quantity}</td>
    <td>${product.price}</td>
</tr>
    `;
  }).join("\n");

  html += `
  <tfoot>
      <tr>
          <td colspan="4">Total</td>
          <td> ${sum.toFixed(2)} </td>
      </tr>
  </tfoot>
</table>
  `;
  return html;
}

function showCart() {
  listItems(getUserId()).then((products) => {
    const cart = document.getElementById("cart");
    cart.style.display = "block";
    document.querySelector("#cart .modal-body").innerHTML = getCartItemsHtml(products);
  });
}

function closeCart() {
  const cart = document.getElementById("cart");
  cart.style.display = "none";
}

function conditionalCloseCart(event) {
  const cart = document.getElementById("cart");
  if (event.target === cart) {
    cart.style.display = "none";
  }
}

function searchKeypressed(event) {
  if (event.charCode === 13) listProdutos();
}

const hamburguerMenu = document.querySelector("#hamburguer-icon");
if (hamburguerMenu) {
  hamburguerMenu.addEventListener("click", showMenu);
}

document.getElementById("search").onkeypress = searchKeypressed;
document.getElementById("button-search").onclick = listProdutos;
document.getElementById("cart-icon").onclick = showCart;
const closeButton = document.getElementsByClassName("close")[0];
closeButton.onclick = closeCart;
window.onclick = conditionalCloseCart;
