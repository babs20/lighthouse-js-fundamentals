const numberOfVowels = function(data) {
  // Intialize an array to store vowels
  let arrayOfVowels = [];
  // Create an array of conditions for the string's characters to be tested against
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < data.length; i++) {
    // If data[i] includes a vowel it pushes it to the arrayOfVowels array
    if (vowels.includes(data[i])) {
      arrayOfVowels.push(data[i]);
    }
  }
  // Return the length of the array to get the number of vowels in the string tested
  return arrayOfVowels.length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));