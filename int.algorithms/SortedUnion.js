
function uniteUnique(arr) {
  var newArr = [];
  
  var args = arr.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    var args1 = arguments[i];
    for (var j = 0; j < args1.length; j++) {
    if (args[i] !== args1[j]){
      newArr.push(args[i]);
    }
  }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);