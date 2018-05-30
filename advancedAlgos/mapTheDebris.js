function orbitalPeriod(arr) {
  var newArray = [];
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  for (var i = 0; i < arr.length; i++) {
  var op = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3) / GM));
 
   newArray.push({name: arr[i].name, orbitalPeriod: op});
 }
  return newArray;
}

// 2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3) / GM);


orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);