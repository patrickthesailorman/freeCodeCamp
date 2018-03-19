// Array of decimal numbers
// Identify given number
// Match number to its roman counterpart
// For loop the number for every romans numeral match
// Return Roman Numeral

function convertToRoman(num) {
  var romans = ['M','D','C','L','X','V','I'];
  var decimals = [1000, 500, 100, 50, 10, 5, 1];
  var romanNum = '';
  
  for(var i = 0; i < decimals.length; i++) {
     while (decimals[i] <= num) {
      romanNum += romans[i];
      num -= decimals[i];
    }
  }
  return romanNum;
}

convertToRoman(36);