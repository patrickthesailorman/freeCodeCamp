
function smallestCommons(arr) {
arr.sort(function(a, b) {
    return b - a;
  });
 // Create new array and add all values from greater to smaller from the original array.
var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }
  // Variables needed declared outside the loops.
  var lcm = 0;
  var loop = 1;
  var n;
   
   // Run code while n is not the same as the array length.
  do {
    lcm = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (lcm % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return lcm;
} 
 
  
