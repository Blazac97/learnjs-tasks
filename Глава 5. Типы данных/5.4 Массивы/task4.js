// Сумма введённых чисел.

function sumInput() {
  // Создаём простой массив.
  let numbers = [];
  // Условие.
  while (true) {
    let value = prompt("Введите число", 0);
    // Проверяем на пустоту.
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }
  // Считаем сумму.
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert(sumInput());
