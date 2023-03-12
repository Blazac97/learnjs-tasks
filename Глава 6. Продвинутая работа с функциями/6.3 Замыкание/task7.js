// Армия функций.

// function makeArmy() {
//     let shooters = [];

//     let i = 0;
//     while (i < 10) {
//       let shooter = function() { // функция shooter
//         alert( i ); // должна выводить порядковый номер
//       };
//       shooters.push(shooter);
//       i++;
//     }

//     return shooters;
//   }

//   let army = makeArmy();

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      alert(i);
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[5]();

// Проблема была в лексическом окружении.
