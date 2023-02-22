// Подмассив наибольшей суммы.

// arr = [1, -2, 3, 4, -9, 6]

function getMaxSubSum(arr) {
  let maxSum = 0;
  let subtotalSum = 0;
  for (let item of arr) {
    subtotalSum += item;
    maxSum = Math.max(maxSum, subtotalSum);
    // Если результат < 0, приравниваем его к 0.
    if (subtotalSum < 0) subtotalSum = 0;
  }
  return maxSum;
}
