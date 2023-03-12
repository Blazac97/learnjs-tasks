// Ошибка в setTimeout

new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

// Нет, не выполнится, т.к ошибка генерируется не по ходу выполнения кода , а позже.
