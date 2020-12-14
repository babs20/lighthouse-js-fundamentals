const judgeVegetable = function (vegetables, metric) {
  // Set empty array to tally the results
  let metricResults = [];
  // Push each of the metric results to the metricResults array
  for (const vegetable of vegetables) {
    metricResults.push(vegetable[metric]);
  }
  // Determine the highest score
  let winner = Math.max(...metricResults);
  
  // Match the score with the submitter
  for (let i = 0; i < vegetables.length; i++) {
    if (winner === vegetables[i][metric]) {
      return vegetables[i].submitter
    };
  }
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));