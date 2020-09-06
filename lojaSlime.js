function showMenu() {
    var x = document.getElementById("nav-bar");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

function listProdutos() {
    const nome = document.getElementById('search').value
    getProdutos(nome).then((produtos) => {
        const htmls = produtos.map((produto) => {
            return `<div class="item-span">
    <img src="${produto.imagem}" alt="${produto.nome}">
    <div class="descricao">
        <h3>${produto.nome}</h3>
        <p class="price">R$ ${produto.preco}</p>
        <button>Comprar
            <i class="fa fa-cart-plus" aria-hidden="true"></i>
        </button>
    </div>
</div>`
        })

        const produtosDiv = document.getElementById("products");
        if (htmls.length == 0) {
            produtosDiv.innerHTML = '<div class="not-found">Produto não encontrado.</div>'
        } else {
            produtosDiv.innerHTML = htmls.join("\n")
        }
    })

}
listProdutos()


function searchKeypressed(event) {
    if (event.charCode == 13) listProdutos()
}