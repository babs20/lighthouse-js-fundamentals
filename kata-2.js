const conditionalSum = function(values, condition) {
  // Create a variable to add approved values to
  let approvedNum = 0;
  // Check what condition is being applied to use appropriate for loop
  // Each for loop checks to see if the value is even or odd accordingly, then pushes the valule to approvedNum array
  if (condition === 'even') {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        approvedNum += values[i];
      }
    }
    return approvedNum;
  } else {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 !== 0) {
        approvedNum += values[i];
      }
    }
    return approvedNum;
  }
  // Return the final number using the reduce method to add all the values in the array
  // return approvedNum.reduce(reducer);
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));