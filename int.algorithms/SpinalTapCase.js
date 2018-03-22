function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++ ) {
  str= str.replace(" ", "-");
  }
  return str;
}

spinalCase('This Is Spinal Tap');