const squareCode = function (message) {
  let squareMsg = [];
  let finalStr = '';
  let removeSpaces = message.replace(/ /g, '');
  let columnNum = Math.ceil(Math.sqrt(removeSpaces.length));
  let rowNum = Math.ceil(removeSpaces.length / columnNum)

  // Create the square code
  // Loop for the amount of rows. Add to the squareMsg array in columnNum amounts. 
  // Iterate the startIndex and endIndex values to move along the string as it loops
  let startIndex = 0;
  let endIndex = columnNum;
  for (let i = rowNum; i > 0; i--) {
    squareMsg.push(removeSpaces.substring(startIndex, endIndex));
    startIndex += columnNum;
    endIndex += columnNum;
  }

  // Encode the message by looping through each item in the array.
  // Then loop again through each letter in each item 
  // Take the first (second, third, etc.) letter from each item and add it to finalStr
  for (let i = 0; i < squareMsg[0].length; i++) {
    // Add spaces betwen chunks
    if (i !== 0) {
      finalStr += ' ';
    }
    for (let j = 0; j < squareMsg.length; j++) {
      // If undefined skip adding to the string.
      if (squareMsg[j][i]) {
        finalStr += squareMsg[j][i];
      }
    }
  }
  return finalStr
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));