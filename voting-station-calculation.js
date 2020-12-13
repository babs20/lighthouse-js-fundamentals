const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  // Initialize approvedStations array
  const approvedStations = [];
  // Check each array within the array
  for(let i = 0; i < stations.length; i++) {
    // Check if stations is 20 or more people AND if it is a school or community centre
    if ((stations[i][1] >= 20) && (stations[i][2] === 'community centre' || stations[i][2] === 'school')) {
      // Add location to approvedStations Array
      approvedStations.push(stations[i][0]);
    }
  }
  return approvedStations;
}

chooseStations(stations);