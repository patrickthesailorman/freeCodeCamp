// go through array and slice it into "size" pieces
// push "size" chunks to new Array
// return new array

function chunkArrayInGroups(arr, size) {
  var newArr = [];
  
  while (arr.length) {  
    newArr.push(arr.splice(0, size));
   
  }
     
  return newArr;

}
chunkArrayInGroups(["a", "b", "c", "d"], 2);