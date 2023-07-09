function getProductsInCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

function addProduct(product) {
  const productsInCart = getProductsInCart();
  addQuantity(product, productsInCart);
  localStorage.setItem('cart', JSON.stringify(productsInCart));
}

function addQuantity(product, productsInCart) {
  const productAlreadyExist = productsInCart.find((p) => p.id === product.id);
  if (productAlreadyExist) {
    productAlreadyExist.quantity += 1;
  } else {
    product.quantity = 1;
    productsInCart.push(product);
  }
}

export { addProduct };
