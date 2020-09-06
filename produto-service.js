async function getProdutos(nome) {
    let url = "http://192.168.0.14:3001/produtos"
    if (nome) {
        url += '?nome=' + nome
    }
    const httpresp = await window.fetch(url)
    const produtos = httpresp.json()
    return produtos
}