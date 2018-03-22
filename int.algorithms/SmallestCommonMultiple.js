
function smallestCommons(arr) {
   var LCM ;
  for (var i = 0; i < arr[0].length; i++) {
    var mults1 = [];
    if (i * i %0) {
      mults1.push(i);
       for (var j = 0; i < arr[1].length; j++) {
     var mults2 = [];
    if (j * j %0) {
      mults2.push(j);
      for (var k = 0; k < mults1.length && mults2.length; k++) {
    if (k == mults1[i] && mults2[j]) {
      LCM.push(k);
    }
  }
  }
  }
    }
  }
 
  
  return arr;
}