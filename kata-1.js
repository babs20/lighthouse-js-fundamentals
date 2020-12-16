const sumLargestNumbers = function(data) {
  // Intialize array to stor largest values of the array
  let largestNumbers = [];
  // Loop through the array twice. On each pass find the largest number and save it to largestNumbers.
  // Find the indexOf the largest number and remove it from the array so it's not included in the second check.
  for (let i = 0; i < 2; i++) {
    let findMax = Math.max(...data);
    largestNumbers.push(findMax);
    let removeValue = data.indexOf(findMax);
    data.splice(removeValue, 1)
  }
  return largestNumbers[0] + largestNumbers[1];
};

