// Course.mjs

const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 25,
      days: "TTh",
      instructor: "Sis A",
    },
  ],

  init: function () {
    setCourseInfo(this);
    renderSections(this.sections);
  },

  changeEnrollment: function (sectionNum, add = true) {
    const index = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );

    if (index >= 0) {
      if (add) {
        this.sections[index].enrolled++;
      } else {
        this.sections[index].enrolled--;
      }
      renderSections(this.sections);
    }
  },
};

// helper functions
function setCourseInfo(course) {
  document.querySelector("#courseName").textContent = course.name;
  document.querySelector("#courseCode").textContent = course.code;
}

function renderSections(sections) {
  const html = sections.map(
    (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
      </tr>`
  );

  document.querySelector("#sections").innerHTML = html.join("");
}

export default aCourse;