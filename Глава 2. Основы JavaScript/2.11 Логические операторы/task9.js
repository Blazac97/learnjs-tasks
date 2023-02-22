// Проверка логина
// Показываем сообщение и запрашиваем ввод текста от пользователя.
let userName = prompt("Кто там?", "");
// Пишем условия.
if (userName === "Админ") {
  let pass = prompt("Пароль?", "");
  // Задаём "пароль" и ответ.
  if (pass === "Я главный") {
    alert("Здравствуйте!");
  } else if (pass === "" || pass === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (userName === "" || userName === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}
