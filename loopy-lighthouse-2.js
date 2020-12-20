

const loopyLighthouse = (range, multiples, words) => {
  for (let i = range[0]; i < range[1] + 1; i++) {
    // Check if it is a multiple of 3 AND 4. If it is print 'LoopyLighthouse'
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    // Check if it is a multiple of 3. If it is print 'Loopy'
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    // Check if it is a multiple of 4. If it is print 'Lighthouse'
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    // Every other number that doesn't fit the tests prints i to the console.
    } else {
      console.log(i);
    }
  }
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));