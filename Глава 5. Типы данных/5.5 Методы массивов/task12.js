// Оставить уникальные элементы массива.

function unique(arr) {
  return [...new Set(arr)];
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

alert(unique(strings));
