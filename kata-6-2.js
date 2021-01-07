const repeatNumbers = function(data) {
  // Intialize string for the numbers
  let string = '';
  // Nested for loops to go through each sub-array in the parent array
  // First for loop iterates for the amount of arrays inside the parent array
  // Second for loop iterates for the amount of times set by second number in the array
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i][1]; j++) {
      // Checks if there is more than one array in the parent array and if it is the first iteration.
      if (i > 0 && j === 0) {
        string += ', ';
        string += data[i][0];
      } else {
        string += data[i][0];
      }
    }
  }
  return string;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
