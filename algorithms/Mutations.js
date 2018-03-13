
function mutation(arr) {
  var arr1 =  arr[1].toLowerCase().split('');
  var arr2 =  arr[0].toLowerCase().split('');
  for (i = 0; i < arr1.length; i ++) {
   if (arr2.indexOf(arr1[i]) === -1)
       return false;
       }  
  return true;
}


mutation(["hello", "hey"]);