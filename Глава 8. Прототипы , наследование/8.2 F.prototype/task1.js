// Изменяем "prototype".

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};
let rabbit = new Rabbit();
alert(rabbit.eats); // true

// // 1.

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };
// let rabbit = new Rabbit();
// Rabbit.prototype = {};
// alert(rabbit.eats); // ?

// // 2.

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };
// let rabbit = new Rabbit();
// Rabbit.prototype.eats = false;
// alert(rabbit.eats); // ?

// // 3.

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };
// let rabbit = new Rabbit();
// delete rabbit.eats;
// alert(rabbit.eats); // ?

// // 4.

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };
// let rabbit = new Rabbit();
// delete Rabbit.prototype.eats;
// alert(rabbit.eats); // ?

// 1. true.
// 2. false.
// 3. true.
// 4. undefined.
