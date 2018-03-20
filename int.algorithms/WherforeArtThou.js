// Iterate through collection and return the item that matches the source
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var src = Object.keys(source);
   return collection.filter(function (obj) {
  for (var i = 0; i < src.length; i ++) {
    if (obj.hasOwnProperty(src[i]) || obj[src[i]] == source[src[i]]) {
      arr = arr.push(obj.hasOwnProperty(src[i]));
    }
    }
   
  // Only change code above this line
  return arr;
   }) ;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });