const BasketModule = (() => {
  let sum = 0;
  let goods = [];

  return {
    addProduct: products => {
      products.forEach(product => {
        sum += product.price;
        goods.push(product);
      });
    },

    printProducts: () => {
      goods.forEach(good => console.log(good.name, good.price));
      console.log(sum);
    }
  };
})();

const sault = {
  name: 'sault',
  price: 20
};

const chips = {
  name: 'chips',
  price: 30
};
BasketModule.addProduct([sault, chips]);
BasketModule.printProducts();
