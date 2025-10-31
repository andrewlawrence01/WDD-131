function getGrades(inputSelector) {
  // get grades from the input box
  const grades = document.querySelector(inputSelector).value;
  // split them into an array (String.split(','))
  const gradesArray = grades.split(",");
  // clean up any extra spaces, and make the grades all uppercase. (Array.map())
  const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
  console.log(cleanGrades); // for debugging
  // return grades
  return cleanGrades;
}

function lookupGrade(grade) {
  // converts the letter grade to its GPA point value and returns it
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  } else if (grade === "C") {
    points = 2;
  } else if (grade === "D") {
    points = 1;
  } else {
    points = 0; // for F or unrecognized grades
  }
  return points;
}

function calculateGpa(grades) {
  // gets a list of grades passed in
  // convert the letter grades to GPA points
  const gradePoints = grades.map((grade) => lookupGrade(grade));
  // calculates the GPA
  const total = gradePoints.reduce((sum, val) => sum + val, 0);
  const gpa = total / gradePoints.length;
  // return the GPA rounded to 2 decimal places
  return gpa.toFixed(2);
}

function outputGpa(gpa, selector) {
  // takes a GPA value and displays it in the HTML
  const outputElement = document.querySelector(selector);
  outputElement.innerText = `Your GPA is: ${gpa}`;
}

function clickHandler() {
  // when the button in our html is clicked
  // get the grades entered into the input
  const grades = getGrades("#grades");
  // calculate the GPA from the grades entered
  const gpa = calculateGpa(grades);
  // display the GPA
  outputGpa(gpa, "#output");
}

// Add event listener to the button
document.querySelector("#submitButton").addEventListener("click", clickHandler);