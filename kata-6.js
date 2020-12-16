const whereCanIPark = function (spots, vehicle) {  
  // Set up conditional tests for each vehicle type
  const regularConditions = ['R'];
  const smallConditions = ['S', 'R'];
  const mcConditions = ['M', 'S', 'R'];
  // Initialize the final parkingCoords
  let parkingCoords = [];

  // Function to find the first open spot by looping through each rows' values
  // If the row value matches a value in the conditional test for the vehicle it returns the coords
  // If no spot is found it returns false
  const findSpot = (type) => {
    for (let r = 0; r < spots.length; r++) {
      for (let c = 0; c < spots[r].length; c++) {
        if (type.includes(spots[r][c])) {
          return parkingCoords = [c, r];
        }
      }
    }
    return false;
  }

  // Switch statment to determine which array to use in the if conditional statement
  // Returns the value from the findSpot function
  switch (vehicle) {
    case 'regular':
    return findSpot(regularConditions);
    break;
    case 'small':
    return findSpot(smallConditions);
    break;
    case 'motorcycle':
    return findSpot(mcConditions);
    break;
  }
  
};


console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))