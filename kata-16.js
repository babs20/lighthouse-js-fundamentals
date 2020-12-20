const generateBoard = (whiteQueen, blackQueen) => {
  // 
  let chessBoard = [[], [], [], [], [], [], [], []];
  for (let r = 0; r < chessBoard.length; r++) {
    for (let c = 0; c < chessBoard.length; c++) {
      // Store current position so we can compare it to the queens
      // If the values are the same .push(1), if not .push(0)
      let position = [r, c];
      if (JSON.stringify(position) === JSON.stringify(whiteQueen) ||
        JSON.stringify(position) === JSON.stringify(blackQueen)) {
        chessBoard[r].push(1);
      } else {
        chessBoard[r].push(0);
      }
    }
  }
  return chessBoard;
}

const queenThreat = () => {
  // Init reducer functions
  const add = (accumulator, currentValue) => accumulator + currentValue;
  const sub = (accumulator, currentValue) => accumulator - currentValue;

  // X-Axis Check | If on the same X-Axis
  if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1]) {
    return true;
    // Y Axis Check | If on the same Y-Axis
  } else if (whiteQueen[1] === blackQueen[1]) {
    return true;
    // 240 degree Axis | If the sum of one queen array values = other queen x value
  } else if (blackQueen.reduce(add) === whiteQueen[0] || whiteQueen.reduce(add) === blackQueen[0]) {
    return true;
    // 60 degree Axis | If the sum of one queen array values = other queen y value
  } else if (blackQueen.reduce(add) === whiteQueen[1] || whiteQueen.reduce(add) === blackQueen[1]) {
    return true;
    // 150 & 300 degree Axis | If the difference of one queen array values is equal to the other
  } else if (Math.abs(blackQueen.reduce(sub)) === Math.abs(whiteQueen.reduce(sub))) {
    return true;
  } else {
    return false;
  }
}

// Test One
let whiteQueen = [0, 5];
let blackQueen = [5, 0];

let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

// Test Two
whiteQueen = [3, 5];
blackQueen = [5, 7];

console.log(generatedBoard);
console.log(queenThreat(generatedBoard));