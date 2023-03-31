// Объясните значение "this".

let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

// 1. Это обычный вызов метода объекта через точку ., и this ссылается на объект перед точкой.
// 2. Здесь то же самое. 
// 3.Такой вызов работает, как если бы он был разделён на 2 строчки.
// 4. Похоже на 3 , потеря this.