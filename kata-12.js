const organizeInstructors = function (instructors) {
  //Init object to return at end of function with organized instructors
  let organizedByCourse = {};

  // Loop through each course type and add it as a key in the organizedByCourse object
  for (let i = 0; i < instructors.length; i++) {
    organizedByCourse[instructors[i].course] = [];
  }

  // A variable to store the keys produced by the first loop so we can compare them to instructors argument and match the name to the course. 
  // If the course from the argument matches the push it to the correct value array.
  let courses = Object.keys(organizedByCourse);
  // If the course from the argument matches one the keys from the new Object,
  // then it pushes the instructors name it to the correct value array.
  for (let i = 0; i < courses.length; i++) {
    for (let j = 0; j < instructors.length; j++) {
      if (courses[i] === instructors[j].course) {
        organizedByCourse[courses[i]].push(instructors[j].name)
      }
    }
  }
  return organizedByCourse;
}

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));