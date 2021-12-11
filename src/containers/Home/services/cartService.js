export const addToCart = (product) => {
  let cart = localStorage.getItem('cart');
  let cartList = JSON.parse(cart);
  if (cartList === null) cartList = [];
  let { id } = product;
  let existingProduct = cartList.find(p => p.id === id);
  if (existingProduct) {
    existingProduct.quantity += product.quantity //update item

  } else {
    product.quantity = product.quantity ? product.quantity++ : 1;
    cartList.push(product);
  }
  localStorage.setItem('cart', JSON.stringify(cartList));

}

export const initCart = () => {
  localStorage.setItem('cart', JSON.stringify([]));
}
export const updateProduct = (productId, amount) => {
  let cartList = getCart();
  let existingProduct = cartList.find(p => p.id === productId);
  if (!existingProduct) return;
  existingProduct.quantity = amount;
  if (existingProduct.quantity > 0) {
    localStorage.setItem('cart', JSON.stringify(cartList));
  }
}

export const getCart = () => {
  let cart = localStorage.getItem('cart');
  let cartList = JSON.parse(cart);
  return cartList
}
export const removeProduct = (productId) => {
  let cartList = getCart();
  let filtered = Array.from(cartList).filter(p => p.id !== productId);
  localStorage.setItem('cart', JSON.stringify(filtered));
}