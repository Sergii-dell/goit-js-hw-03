'use strict' /* использование последней  версии  js  */;

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  for (const x of allProdcuts) {
    let z = Object.values(x);

    const [, s, d] = z;
    for (const y of z) {
      if (y === productName) {
        return s * d;
      }
    }
  }
};

console.log(calculateTotalPrice(products, 'Радар'));

console.log(calculateTotalPrice(products, 'Дроид'));
