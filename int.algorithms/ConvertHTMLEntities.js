
function convertHTML(str) {
  // &colon;&rpar;
  var newStr = str.split("");
  for (var i = 0; i < newStr.length; i++) {
    if (newStr[i] === "&") {
        newStr = newStr.replace( "&", "&amp;");
        }
  }
  return newStr;
}

convertHTML("Dolce & Gabbana");