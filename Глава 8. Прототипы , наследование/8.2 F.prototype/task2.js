// Создайте новый объект с помощью уже существующего.

// Можем ли мы сделать так?

let obj2 = new obj.constructor();

// Рабочий вариант.

function User(name) {
  this.name = name;
}
let user = new User("John");
let user2 = new user.constructor("Pete");
alert(user2.name);

//  Вариант , который не сработает.

// function User(name) {
//     this.name = name;
//   }
//   User.prototype = {}; // (*)
//   let user = new User('John');
//   let user2 = new user.constructor('Pete');
//   alert( user2.name );
