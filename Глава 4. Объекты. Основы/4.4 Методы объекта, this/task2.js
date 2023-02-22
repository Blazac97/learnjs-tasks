// Создайте калькулятор

// let calculator = {
//     // ... ваш код ...
//   };

//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

let calculator = {
  // Запрашиваем у пользователя два значения.
  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },
  // Сумма
  sum() {
    return this.a + this.b;
  },
  // Умножение
  mul() {
    return this.a * this.b;
  },
};

// Образаемся к методу объекта.

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
