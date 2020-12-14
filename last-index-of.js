// function lastIndexOf (array, value) {
//   return array.lastIndexOf(value);
// 
function lastIndexOf (array, value) {
  // Intialize matched and set up neverOccurs variable
  let matched = [];
  let neverOccurs = -1;

  // Check if array is empty
  if (array.length === 0) {
    return neverOccurs;
  } else {
    // Find index of the values in the array
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] === value) {
        matched.push(i);
      }
    }
    // Return index of the last value in the array or return -1
    if (matched.length > 0) {
      return matched[0];
    } else {
      return neverOccurs;
    }
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));