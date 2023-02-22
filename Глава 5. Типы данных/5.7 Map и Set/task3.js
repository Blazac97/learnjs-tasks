// Перебираемые ключи.

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys);

// Ошибка была в том , что map.keys() возвращает обьект, а не массив.
