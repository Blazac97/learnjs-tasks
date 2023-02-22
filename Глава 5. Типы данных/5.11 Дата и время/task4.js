// Какой день месяца был много дней назад?
function getDateAgo(date, days) {
  let dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}
let date = new Date(2023, 2, 18);

alert(getDateAgo(date, 365));
