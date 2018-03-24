function steamrollArray(arr) {
  // I'm a steamroller, baby
 var newArr = [];
  var flatten = function(arg){
    if (!Array.isArray(arg)) {
      newArr.push(arg);
   } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);