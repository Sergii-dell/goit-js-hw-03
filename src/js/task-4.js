'use strict' /* использование последней  версии  js  */;

const countTotalSalary = function (employees) {
  let max = 0;
  let namee;

  const key = Object.keys(employees);

  for (const x of key) {
    max += employees[x];
  }

  return max;
};

console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
);
