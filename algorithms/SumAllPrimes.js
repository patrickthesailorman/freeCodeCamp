// Check numbers 2 through input - 1
// Check if input is divisible by number
// Not prime (return false)
// If not divisible
// Repeat with next number 
// Is Prime (return true)


function isPrime(num) {
  for(var n = 2; n < num; n++) {  
 if (num % n == 0) {
   return false;
  } 
 }
  return true;
}
// Running total = 0
// Start with number 2 up to and including 10
// 	Check if Prime => function: isPrime()
// 	 	Store 2
// Repeat with next number
// 	else not prime
// 		Repeat with next number
// Return running total.

function sumPrimes(num) {
  var sum = 2;
  for(var n = 3; n <= num; n++) {
    if (isPrime(n)) {
      sum += n;
    }
   }
  return sum;
}

sumPrimes(10);
