async function getProdutos(nome) {
    let url = "https://loja-slime-backend.herokuapp.com/produtos"
    if (nome) {
        url += '?nome=' + nome
    }
    const httpresp = await window.fetch(url)
    const produtos = httpresp.json()
    return produtos
}