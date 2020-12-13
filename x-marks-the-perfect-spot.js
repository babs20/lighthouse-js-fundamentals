const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

function finalPosition(moves) {
  let x = 0
  let y = 0
  // Check which direction and increment the value of the x or y value accordingly
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
    case 'north':
      y += 1;
      break;
    case 'south':
      y -= 1;
      break;
    case 'east':
      x += 1;
      break;
    case 'west':
      x -= 1;
      break;
    }
  }
  // Set the final position
  let position = [x, y];
  return position;
}

(finalPosition(moves));

