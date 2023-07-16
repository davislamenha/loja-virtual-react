function getProductsInLocalStorage() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

function setProductsInLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addProduct(product) {
  setProductsInLocalStorage(addQuantity(product));
}

function addQuantity(product) {
  const productsInCart = getProductsInLocalStorage();
  const productAlreadyExist = productsInCart.find((p) => p.id === product.id);
  if (productAlreadyExist) {
    productAlreadyExist.quantity += 1;
  } else {
    product.quantity = 1;
    productsInCart.push(product);
  }
  return productsInCart;
}

function calculateTotal(cart) {
  const productsInCart = cart;
  const total = productsInCart.reduce((acum, atual) => {
    const { quantity, price } = atual;
    const productTotalPrice = quantity * price;
    return (acum += productTotalPrice);
  }, 0);
  return total;
}

export {
  addProduct,
  getProductsInLocalStorage,
  setProductsInLocalStorage,
  calculateTotal,
};
