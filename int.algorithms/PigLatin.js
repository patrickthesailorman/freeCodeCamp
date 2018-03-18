// Iterate through str
// If first char == consonant ||  (or consonant cluster) , move it to the end and add 'ay'
// If first char == vowel, add 'way' to the end

function translatePigLatin(str) {
  
  var regex = /[aeiou]/gi;
  
  if (str[0].match(regex)) {
    str = str + 'way';
   
  } else {
    var vowelIndice = str.indexOf(str.match(regex)[0]);
    str = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }
  return str;
}

translatePigLatin("consonant");