// if 'before' word is uppercase, convert 'after' to uppercase
// iterate through string find match for 'before'
// replace with 'after'
function myReplace(str, before, after) {
  var index = str.indexOf(before);
  
    if (str[index] === str[index].toUpperCase()) {
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } 
  str = str.replace(before, after);
    
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");