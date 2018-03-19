// Array of decimal numbers
// Identify given number
// Match number to its roman counterpart
// For loop the number for every romans numeral match
// Return Roman Numeral

function convertToRoman(num) {
  var romans = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  var decimals = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
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