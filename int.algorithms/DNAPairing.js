// 1 split input into a char array. *
// 2 get first char = firstChar
// 3 check if firstChar is G *
// 	Create pair[G,C]
// 4 else if firstChar is C *
// 	Create pair [C,G]
// 5 else if firstChar is T *
// 	Create pair [T,A]
// 6 else if firstChar is A *
// 	Create pair [A, T]
// End if
// 7 push to dna strand *
// 8 repeat step 3 for additional chars *
// 9 return dna strand *
function pairElement(str) {
  var splStr = str.split("");
  var newStr = [];
  for (var i = 0; i < splStr.length; i++) {
    if (splStr[i] === "G") {
      newStr.push(["G", "C"]);
    } else if (splStr[i] === "C") {
      newStr.push(["C","G"]);
    } else if (splStr[i] === "T") {
    newStr.push(["T","A"]);
    } else if (splStr[i] === "A") {
  newStr.push(["A","T"]);
    }
  }
  return newStr;
}

pairElement("GCG");
