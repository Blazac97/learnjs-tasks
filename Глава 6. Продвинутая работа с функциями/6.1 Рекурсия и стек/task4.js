// Вывод односвязного списка.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// Вариант с рекурсией.
// Выглядит проще.
function printList(list) {
  alert(list.value);

  if (list.next) {
    printList(list.next);
  }
}

console.log(printList(list));

// Вариант с циклом.
// Лучше по ресурсам.
function printList(list) {
  let tmp = list;

  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }
}
