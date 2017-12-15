// split string into characters
// ignore case and non-alpahnumeric chars
// iterate through and compare first to last
// if +1 and -1 are same
// return true
function palindrome(str) {
  if (str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join() === str.replace( /[\W_]/g, '').toLowerCase().split('').join() ) {
 
    return true;
} else {
  return false;
}

}

palindrome("eye");
