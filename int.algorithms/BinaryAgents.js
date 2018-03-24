function binaryAgent(str) {
  for (var i = 0; i < str.length; i++) {
    var intStr = str.charCodeAt(str[i]);
  
  for (var j = 0; j < intStr.length; j++ ) {
    var newStr = intStr.fromCharCode(intStr[j]);
     return newStr;
  }
  }
  
 
}