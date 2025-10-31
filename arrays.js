// arrays.js

// Activity 1 - Map
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

// Activity 2 - Map
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  } else if (grade === "C") {
    points = 2;
  } else if (grade === "D") {
    points = 1;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);
document.querySelector("#grades").innerHTML = `GPA Points: ${gpaPoints.join(", ")}`;

// Activity 3 - Reduce
const gpa = gpaPoints.reduce((total, item) => total + item, 0) / gpaPoints.length;
document.querySelector("#gpa").innerHTML = `Calculated GPA: <strong>${gpa.toFixed(2)}</strong>`;

// Activity 4 - Filter
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter((word) => word.length < 6);
document.querySelector("#shortWords").innerHTML = `Short fruits: ${shortWords.join(", ")}`;

// Activity 5 - indexOf
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = myArray.indexOf(luckyNumber);
const luckyMessage =
  luckyIndex !== -1
    ? `Lucky number ${luckyNumber} found at index ${luckyIndex}!`
    : `Lucky number ${luckyNumber} not found.`;
document.querySelector("#luckyResult").innerHTML = luckyMessage;