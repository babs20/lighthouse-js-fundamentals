for (let i = 100; i < 201; i++) {
  // Check if it is a multiple of 3 AND 4. If it is print 'LoopyLighthouse'
  if (i % 3 === 0 && i % 4 === 0) {
    console.log('LoopyLighthouse');
  // Check if it is a multiple of 3. If it is print 'Loopy'
  } else if (i % 3 === 0) {
    console.log('Loopy');
  // Check if it is a multiple of 4. If it is print 'Lighthouse'
  } else if (i % 4 === 0) {
    console.log('Lighthouse');
  // Every other number that doesn't fit the tests prints i to the console.
  } else {
    console.log(i);
  }
}
