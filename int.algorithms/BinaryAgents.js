function binaryAgent(str) {
 var charStr = str.split(" ");
  var intStr = [];
  for (var i = 0; i < charStr.length; i++) {
     intStr.push(String.fromCharCode(parseInt(charStr[i],2)));
  }
     return intStr.join('');
 
}