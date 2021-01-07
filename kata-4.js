const instructorWithfindName = function(instructors) {
  // Intialize variables for finding the longest name and storing the object of that name
  let findName = '';
  let longestName;
  // Loop through each name and add it to the findName variable if it was longer than the previous value in the variable.
  // Add that object to longestName variable to returned once the for loop is complete
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > findName.length) {
      findName = instructors[i].name;
      longestName = instructors[i];
    }
  }
  return longestName;
};

console.log(instructorWithfindName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithfindName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));