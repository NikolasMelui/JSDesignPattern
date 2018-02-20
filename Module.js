const BasketModule = (() => {
  let sum = 0;
  let goods = [];

  return {
    addProduct: product => {
      sum += product.price;
      goods.push(product);
    },

    printProducts: () => goods.forEach(good => console.log(good.name, good.price))
  };
})();

const sault = {
  name: 'sault',
  price: 20
};

BasketModule.addProduct(sault);
BasketModule.printProducts();
