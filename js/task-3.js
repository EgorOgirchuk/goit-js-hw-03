function filterArray(numbers, value) {
  const filterNumbers = [];
  for (i = 0; i < numbers.length; i++) {
    let item = numbers[i];
    if (item > value) {
      filterNumbers.push(item);
    }
  }
  return filterNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
