// Вычислить сумму чисел до данного.

// 1. С использованием цикла.
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumTo(100));

// 2. С использованием рекурсии.
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

console.log(sumTo(100));

// 3. С использованием арифметической прогрессии.
function sumTo(n) {
  return (n * (n + 1)) / 2;
}

alert(sumTo(100));

// По формуле будет самый быстрый вариант , поскольку минимальное количество действий.
// Рекурсия будет самой медленной.
