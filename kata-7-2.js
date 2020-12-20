const camelCase = function(input) {
  // Loop through each index in the string
  for (let i = 0; i < input.length; i++) {
    // Check if the index is a space. If so, create an uppercase variable for letter after it
    // Change the input argument to remove the space and add the upperCase by using substrings that exclude the space and letter after
    if (input[i] == ' ') {
      let upperCase = input[i + 1].toUpperCase();
      input = input.substring(0, i) + upperCase + input.substring(i + 2)
    }
  }
  return input;
};


console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));