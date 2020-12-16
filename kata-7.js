const checkAir = function (samples, threshold) {
  // Intialize dirtyTally to track the number per array
  let dirtyTally = 0;
  // Loop through each value in the array to check if it is 'dirty', if so add it to the dirtyTally
  for (const sample of samples) {
    if (sample === 'dirty') {
      dirtyTally ++;
    }
  }
  // Check if the percentage of dirty samples in the array is less than the threshold.
  // Return the apporiate response of 'Clean' if conditional is true or 'Polluted' if conditional is false
  return dirtyTally / samples.length < threshold ? 'Clean' : 'Polutted';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))