// str.slice(0, num) 
// if num >= 3 {
// then str.truncated -3 + "..."
// else str.truncated + "..."
function truncateString(str, num) {
  var newStr = str.slice(0, num);
//   console.log(str.slice(0, num));
//   console.log(newStr + "...");
//   console.log(newStr.length);
//   console.log(num);
  if (num <= 3) {
    return  newStr + "...";
     } else if (str.length > num) {
     console.log(str + "...");
    return str.slice(0, num-3) + "...";
  
  } else if (newStr.length <= num) {
    return str;
  }
  } 
truncateString("A-tisket a-tasket A green and yellow basket", 11);