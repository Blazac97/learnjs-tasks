// Цепь вызовов.

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function () {
//     // показывает текущую ступеньку
//     alert(this.step);
//   },
// };

// Добавим возврат самого обьекта в каждом из вызовов.
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

// ladder.up().up().down().showStep().down().showStep();

// Получается длинная строка , поэтому можно записать так:
ladder
.up()
.up()
.down()
.showStep()
.down()
.showStep();
