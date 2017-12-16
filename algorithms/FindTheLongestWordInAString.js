function findLongestWord(str) {
  var newStr=str.split(' ');
  var num = 0;
  console.log(newStr.length);
  for ( var i =0; i < newStr.length; i++) {
    
    if(newStr[i].length > num) {
      console.log(newStr[i]);
      num = newStr[i].length;
    } 
  }  
  return num;
}

findLongestWord("The quick brown fox jumped over the lazy dog");