// create newStr to lower case split at words
// loop through
// get 1st character each word to upper case
// return newStr
function titleCase(str) {
  var newStr = str.toLowerCase().split(' ');
  
  for (var i = 0; i < newStr.length; i++) {    
    newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
  }
  return newStr.join(' ');
  
}

titleCase("I'm a little tea pot");
