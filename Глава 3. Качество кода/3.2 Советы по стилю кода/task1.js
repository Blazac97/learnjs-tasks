// Плохой стиль.
// ======================================================
// function pow(x,n)
// {
//   let result=1;
//   for(let i=0;i<n;i++) {result*=x;}
//   return result;
// }
// let x=prompt("x?",''), n=prompt("n?",'')
// if (n<=0)
// {
//   alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
// }
// else
// {
//   alert(pow(x,n))
// }
// ======================================================
// ======================================================
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");

let n = prompt("n?", "");

if (n <= 0) {
  alert(`Степень ${n} не поддерживается,
    введите целую степень, большую 0`);
} else {
  alert(pow(x, n));
}
// Проблемы были с лишними пробелами. Проблемы были с недостающими пробелами.
// Разнёс некоторые вещи на разные строки для более удобной читаемости.
// Можно было бы ещё использовать расширение "Prettier" для VScode , для автоматического форматирования.
