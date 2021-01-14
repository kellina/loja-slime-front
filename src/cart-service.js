const axios = require("axios").default;
//require('dotenv').config()

export async function addToCart(userId, productId, qty) {
  const url = `${process.env.BACKEND_URL}cart`;

  const response = await axios.put(url, {
    user_id: userId,
    product_id: productId,
    qty,
  });
}

export async function listItems(userId) {
  const url = `${process.env.BACKEND_URL}cart/${userId}`;

  const response = await axios.get(url);
  return response.data;
}

export async function deleteFromCart(cartId, productId) {
  const url = `${process.env.BACKEND_URL}cart/${cartId}/item/${productId}`;

  const response = await axios.delete(url)
}