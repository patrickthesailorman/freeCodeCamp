
function repeatStringNumTimes(str, num) {
  var newStr=[""];
  if (num > 0) {
    for (var i = 0; i < (num); i++) {
  console.log(i);
      newStr.push(str);
       console.log(newStr);
    }
  return newStr.join("");
  } else {
    return "";
  }
 
}
repeatStringNumTimes("abc", 3);