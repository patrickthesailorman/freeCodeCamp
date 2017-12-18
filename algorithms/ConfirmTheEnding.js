// get string and target string
// get length of target 
// get substr (target.length) of string
// push substr characters to a variable
// compare variable to target
// if === return true 
// else false
function confirmEnding(str, target) {
   for (var i = target.length-1; i < target.length +1; i++){  
    var index=[];
     index.push(i+1);
  
   if (str.substr(-index) === target.substr(-index)) {
      return true;
    } else {
      return false;
    }
  }
}

confirmEnding("Bastian", "n");