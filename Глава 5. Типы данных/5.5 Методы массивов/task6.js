// Создать расширяемый калькулятор.

function Calculator() {
  //Базовые методы.
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };
  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  };
  //Метод, который добавляет новые операции.
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
