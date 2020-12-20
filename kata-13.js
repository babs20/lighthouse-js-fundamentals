const makeCase = function (input, type) {
  // Uppercase first letter of every word and remove spaces, EXCEPT first word
  const camel = () => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] == ' ') {
      let upperCase = input[i + 1].toUpperCase();
      input = input.substring(0, i) + upperCase + input.substring(i + 2)
    }
  }
  return input;
  }

  // Uppercase first letter of every word and remove spaces
  const pascal = () => {
    input = input.substring(0,1).toUpperCase() + input.substring(1)
    for (let i = 0; i < input.length; i++) {
      if (input[i] == ' ') {
        let upperCase = input[i + 1].toUpperCase();
        input = input.substring(0, i) + upperCase + input.substring(i + 2)
      }
    }
    return input;
  }

  // Replace all spaces with an underscore
  const snake = () => {
    for (let i = 0; i < input.length; i++) {
      if (input[i] == ' ') {
        input = input.substring(0, i) + '_' + input.substring(i + 1)
      }
  }
  return input;
}
  // Replace all spaces with a hyphen
  const kebab = () => {
    for (let i = 0; i < input.length; i++) {
      if (input[i] == ' ') {
        input = input.substring(0, i) + '-' + input.substring(i + 1)
      }
  }
  return input;
  }
  // Capitalize first letter of each word
  const title = () => {
    input = input.substring(0,1).toUpperCase() + input.substring(1)
    for (let i = 0; i < input.length; i++) {
      if (input[i] == ' ') {
        let upperCase = input[i + 1].toUpperCase();
        input = input.substring(0, i + 1) + upperCase + input.substring(i + 2)
      }
    }
    return input;
  }
  // Capitalize all vowels
  const vowel = () => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < input.length; i++) {
      if (vowels.includes(input[i])) {
        let upperCase = input[i].toUpperCase();
        input = input.substring(0, i) + upperCase + input.substring(i + 1)
      }
    }
    return input;
  }

  //Capitalize all consonants
  const consonant = () => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < input.length; i++) {
      if (!vowels.includes(input[i])) {
        let upperCase = input[i].toUpperCase();
        input = input.substring(0, i) + upperCase + input.substring(i + 1)
      }
    }
    return input;
  }

  // Convert string to upper case
  const upper = () => {
    return input.toUpperCase();
  }

  // Convert string to lower case
  const lower = () => {
    return input.toLowerCase();
  }

  // Function to choose correct text editiing function depening on the type passed into parent function
  const caseChoice = (choice) => {
    switch (choice) {
      case 'camel':
      return camel();
      break;
      case 'pascal':
      return pascal();
      break;
      case 'snake':
      return snake();
      break;
      case 'kebab':
      return kebab();
      break;
      case 'title':
      return title();
      break;
      case 'vowel':
      return vowel();
      break;
      case 'consonant':
      return consonant();
      break;
      case 'upper':
      return upper();
      break;
    }
  }

  // Check if type is an object, if it is, loop through each text editing function and return the final product
  // If not, run through the caseChoice function like normal
  if (typeof type === 'object') {
    for (let i = 0; i < type.length; i++) {
      input = caseChoice(type[i]);
    }
    return input;
  } else {
     return caseChoice(type);
  }
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));