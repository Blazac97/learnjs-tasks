// День недели в европейской нумерации.

let date = new Date(2023, 2, 18);

function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) {
    if (day == 0) {
      day = 7;
    }
  }
  return day;
}

alert(getLocalDay(date));
