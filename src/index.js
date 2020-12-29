import { getProdutos } from "./produto-service";
import "./assets/lojaSlime.css";

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
  getProdutos(nome).then((produtos) => {
    const htmls = produtos.map(
      (produto) => `<div class="item-span">
    <img src="${produto.image}" alt="${produto.name}">
    <div class="descricao">
        <h3>${produto.name}</h3>
        <p class="price">R$ ${produto.price}</p>
        <label for="quantity" > Quantidade: </label> 
        <input type="number" id="quantity"  name="products[quantity]" min="0" value="1" >
        <button type="submit" class="SubmitButton AddToCart"><span>Adicionar ao carrinho</span>
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
  });
}
listProdutos();

function searchKeypressed(event) {
  if (event.charCode === 13) listProdutos();
}
