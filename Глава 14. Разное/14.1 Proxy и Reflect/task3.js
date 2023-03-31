// Observable.

let handlers = Symbol('handlers');

function makeObservable(target) {
  // Хранилище обработчиков
  target[handlers] = [];
  target.observe = function(handler) {
    this[handlers].push(handler);
  };
  //Прокси
  return new Proxy(target, {
    set(target, property, value, receiver) {
      let success = Reflect.set(...arguments); 
      if (success) { свойства
        target[handlers].forEach(handler => handler(property, value));
      }
      return success;
    }
  });
}

let user = {};
user = makeObservable(user);
user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user.name = "John";