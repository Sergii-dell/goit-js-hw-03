'use strict' /* использование последней  версии  js  */;

const findBestEmployee = function (employees) {
  //let sum = 0;
  //for(const salary of Object.values(employees)){             операция подщета, в задании сказано  вывисти имя
  //  sum += salary;
 // }
 // return sum;

 let max = 0;
  let namee;

  const key = Object.keys(employees);

  for (const x of key) {
    if (max < employees[x]) {
      max = employees[x];
      namee = x;
    }
  }
  return namee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
);
