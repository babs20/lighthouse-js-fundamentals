// Helper function. Increments the values of east and west depending on the currentDirection
const positionUpdate = (paces, distance, currentDirection) => {
  // Checks if currentDirection has gone into the negatives. If so, it adds four to loop it back around.
  if (currentDirection === -1) {
    currentDirection += 4;
  }
  switch (currentDirection) {
  // North
  case 0:
    distance.north += paces;
    break;
    // East
  case 1:
    distance.east += paces;
    break;
    // South
  case 2:
    distance.north -= paces;
    break;
    // West
  case 3:
    distance.east -= paces;
    break;
  }
};


const blocksAway = function(directions) {
  // Init final object
  let distance = {
    east: 0,
    north: 0
  };

  // N = 0, E = 1, S = 2, W = 3
  // Check which direction is the start to save the correct value to currentDirection
  let currentDirection = 0;
  if (directions[0] === 'left') {
    currentDirection = 1;
  }

  // Loop through directions. Determines which direct then increment currentDirection and call positionUpdate.
  for (let i = 0; i < directions.length; i++) {
    if (typeof 'string') {
      switch (directions[i]) {
      case 'right':
        currentDirection++;
        positionUpdate(directions[i + 1], distance , currentDirection);
        break;
      case 'left':
        currentDirection--;
        positionUpdate(directions[i + 1], distance , currentDirection);
        break;
      }
    }
  }

  return distance;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));