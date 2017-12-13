function factorialize(num) {
  var output = 1;
  
  while (num > 1) {

    output *= num;
    
    num--;
  }
 
  return output;

}

factorialize(10);
