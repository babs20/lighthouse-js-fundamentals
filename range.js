function range(start, end, step) {
  let finalArray = []; // Intialize final array
  // Make sure start, end, or step are not undefined
  if (start !== undefined || end !== undefined || step !== undefined) {
    // Check start less than end
    if (start <= end) { 
      // Check step greater than zero
      if (step > 0) {
        // Use the step value as the incrementer and add to the start value until it reaches the end value.
        // Push to the end of final array each time
        for (let i = start; i <= end; i += step) {
          finalArray.push(i);
        }
      } else {
        return finalArray;
      }
    }
  }
  return finalArray;
}

console.log(range('0', 10, -2));
console.log(range(31, 30, 5));
console.log(range(-5, 2, 3));