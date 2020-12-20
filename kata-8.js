const multiplicationTable = function(maxValue) {
  // Initialize table to store multiplication table
  let table = ''
  // Loop through the maxValue to use as a factor for the second for loop
  // Everything except the first iteration add a new line to string
  for (let i = 1; i <= maxValue; i++) {
    if (i > 1) {
      table += '\n';
    }
    // Ternary operator to check if it is the last line. If it is dont include a space.
    // The expressions add the value of i * j to the table 
    for (let j = 1; j <= maxValue; j++) {
      j === maxValue ? table += i * j : table += i * j + ' ';
    }
  }
  return table + '\n';
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));