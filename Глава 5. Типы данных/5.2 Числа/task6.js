// Случайное целое число от min до max.

function randomInteger(min, max) {
  // случайное число от min до (max+1).
  // Поскольку будет округление в меньшую сторону до целого числа.
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert(randomInteger(1, 3));
