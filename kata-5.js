const urlEncode = function(text) {
  // Trim whitespace at beginning and end of string, if any
  text = text.trim();
  // Loop through each character in the string and check if it is a whitespace
  // If it is, replace it by creating a substring before and after its index. Then concat them with %20 between.
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      text = text.substring(0, i) + '%20' + text.substring(i+1);
    }
  }
  return text;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
