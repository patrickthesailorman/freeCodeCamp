function binaryAgent(str) {
  var charStr = str.split(" ");
  var intStr = [];
  for (var i = 0; i < charStr.length; i++) {
     intStr = intStr.push(String.fromCharCodeAt(parseInt(charStr[i],2)));
  
  for (var j = 0; j < intStr.length; j++ ) {
    var newStr = newStr.push(intStr.fromCharCode(intStr[j]));
     return newStr;
  }
  }
  
 
}