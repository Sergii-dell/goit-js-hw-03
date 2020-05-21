'use strict' /* использование последней  версии  js  */;
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = 'false';

const array = Object.keys(user);

for (const result of array) {
  console.log(`${result}:${user[result]}`);
}
