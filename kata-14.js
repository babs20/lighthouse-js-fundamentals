const urlDecode = function (text) {
  // Initialize url object to return 
  let urlObject = {};
  // Split the text argument at the ampersand and store the values in an array
  let pairArray = text.split('&');
  // Loop through each item in the array, and each character
  // Once the loop encounters an equal sign it splits the text into substring to make the object key and v
  for (let i = 0; i < pairArray.length; i++) {
    for (let j = 0; j < pairArray[i].length; j++)
      if (pairArray[i][j] === '=') {
        urlObject[pairArray[i].substring(0, j)] = pairArray[i].substring(j+1).replace(/%20/g, ' ');
    }
  }
  return urlObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);