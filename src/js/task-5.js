'use strict' /* использование последней  версии  js  */;

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const values = []; //  возврат  масива
  for (const x of arr) {
    if (prop in x) {
      values.push(x[prop]); //  сохранение  в  масив  значений
    }
  }
  return values;
};

console.log(getAllPropValues(products, 'name'));

console.log(getAllPropValues(products, 'quantity'));

console.log(getAllPropValues(products, 'category'));
