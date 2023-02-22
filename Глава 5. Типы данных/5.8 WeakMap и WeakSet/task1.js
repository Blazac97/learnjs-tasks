// Хранение отметок "не прочитано".
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];
let readMessages = new WeakSet();
// Прочитаем два сообщения.
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// Прочитаем первое сообщение ещё раз.
readMessages.add(messages[0]);
// Поскольку это WeakSet - и там хранятся только уникальные значение. Их будет всё ещё 2.
alert("Read message 0: " + readMessages.has(messages[0])); // true
messages.shift();
// теперь readMessages содержит 1 элемент.
