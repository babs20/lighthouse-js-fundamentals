function range(start, end, step) {
  let finalArray = []; // Intialize final array
  if (start !== undefined || end !== undefined || step !== undefined) { // Make sure start, end, or step are not undefined
    if (start <= end) { // Check start less than end
      if (step > 0) { // Check step greater than zero
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

console.log(range(0, 10, -2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));