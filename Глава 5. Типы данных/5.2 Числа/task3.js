// Ввод числового значения.

function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while (!isFinite(num));

  if (num === null || num === "") return null;

  return +num;
}

alert(`Число: ${readNumber()}`);

// Глобальная isFinite() функция определяет, является ли переданное значение конечным числом.
