// Вызов в контексте массива.

let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2](); // ?

// Мы вызвали метод обьекта , в качестве this он получает объект arr.

// a,b,function(){
//     alert (this)
// }
