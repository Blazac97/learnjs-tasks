// Почему 6.35.toFixed(1) == 6.3?
// Во внутреннем представлении число является бесконечной двоичной дробью, хранится с потерей точности.
alert(Math.round(6.35 * 10) / 10);
