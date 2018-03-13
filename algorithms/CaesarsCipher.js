// Solution with Regular expression and Array of ASCII character codes
function rot13(str) {
  var rotCharArray = []; // An empty array is created in a variable called rotCharArray to store the character codes.
  var regEx = /[A-Z]/ ; // The regEx variable stores a regular expression for all uppercase letters from A to Z.
  str = str.split(""); // We split str into a character array and then use a for loop to loop through each character in the array.
  for (var x in str) {
    if (regEx.test(str[x])) { //Using an if statement, we test to see if the string only contains uppercase letters from A to Z.
      // A more general approach
      // possible because of modular arithmetic
      // and cyclic nature of rot13 transform
      rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65); // // If it returns true, we use the charCodeAt() function and rot13 transformation to return the correct value
    } else {
      rotCharArray.push(str[x].charCodeAt());  // Otherwise we return the initial value.
    }
  }
  str = String.fromCharCode.apply(String, rotCharArray);
  return str; // We then return the string with the character codes from the rotCharArray variable.
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");