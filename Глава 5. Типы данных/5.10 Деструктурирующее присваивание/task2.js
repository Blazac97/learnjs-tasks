// Максимальная зарплата.
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function topSalary(obj) {
  let [max, name] = [0, null];

  for (const [key, value] of Object.entries(obj)) {
    if (value > max) [max, name] = [value, key];
  }

  return name;
}

alert(topSalary(salaries));
