// Проверка синтаксиса.
// Каким будет результат выполнения этого кода?
let user = {
  name: "John",
  go: function() { alert(this.name) }
}

(user.go)()

//Будет ошибка. Поскольку не хватает ";" после "}"