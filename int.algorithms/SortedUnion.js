
function uniteUnique(arr) {
  var newArr = [];
  
  var args = arr.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    var args1 = arguments[i];
    for (var j = 0; j < args1.length; j++) {
      var args2 = args1[j];
      
    if (newArr.indexOf(args2) < 0){
      newArr.push(args2);
    }
  }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);