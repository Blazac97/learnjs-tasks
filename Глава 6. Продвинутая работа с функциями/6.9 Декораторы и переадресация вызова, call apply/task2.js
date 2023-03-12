// Задерживающий декоратор.

function f(x) {
  alert(x);
}

f1000("test");
f1500("test");

function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

let f1000 = delay(alert, 1000);
