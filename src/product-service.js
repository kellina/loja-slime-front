// eslint-disable-next-line import/prefer-default-export
require('dotenv').config()

export async function getProdutos(nome) {
  let url = `${process.env.BACKEND_URL}products`;

  if (nome) {
    url += `?nome=${nome}`;
  }
  const httpresp = await window.fetch(url);
  const produtos = httpresp.json();
  return produtos;
}
