// loop through array
// compare value to next number in array
// push larger number to new array
function largestOfFour(arr) {

  var max =[];
 for (var i = 0; i < arr.length; i++) {
  var large = arr[i][0];   
  for (var j = 1; j < arr[i].length; j++) {
    if (arr[i][j] > large) {
     large = arr[i][j];
    } 
     max[i] = large;  
  }
 }
  return max;

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
