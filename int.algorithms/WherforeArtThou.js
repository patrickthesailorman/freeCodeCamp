// Iterate through collection and return the item that matches the source
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var src = Object.keys(source);
  for (var i = 0; i < collection.length; i ++) {
    if (collection[i] == source ) {
      arr = collection.filter(src);
    }
  }
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });