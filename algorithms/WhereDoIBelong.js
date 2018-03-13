function getIndexToIns(arr, num) {
  arr.push(num); // First we add the number num to the array using push() which adds it as the last element of the array.
  arr.sort(function(a, b){return a-b;}); // Then we use sort() with the callback function function(a, b){return a-b} to sort the numbers in ascending order.
  return arr.indexOf(num); // Lastly we return the postion or index of num in the array with the indexOf() function.
}

getIndexToIns([40, 60], 50);