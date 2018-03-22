function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
   var regex = /\s+|_+/g;
   
   str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

return str.replace(regex, '-').toLowerCase();

  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++ ) {
  str= str.replace(" ", "-");
  }
  return str;
}

spinalCase('This Is Spinal Tap');