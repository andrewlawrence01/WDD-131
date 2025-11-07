/************************************************
 * GLOBAL
 ***********************************************/
let participantCount = 1;

/************************************************
 * TEMPLATE: Participant HTML
 ***********************************************/
function participantTemplate(count) {
  return `
  <section class="participant${count}">
    <h3>Participant ${count}</h3>

    <label for="fname${count}">First Name</label>
    <input type="text" id="fname${count}" name="fname${count}" required>

    <label for="age${count}">Age</label>
    <input type="number" id="age${count}" name="age${count}" required>

    <label for="fee${count}">Camp Fee ($)</label>
    <input type="number" id="fee${count}" name="fee${count}" required>
  </section>
  `;
}

/************************************************
 * ADD PARTICIPANT
 ***********************************************/
function addParticipant() {
  participantCount++;

  const addBtn = document.querySelector("#addParticipant");

  addBtn.insertAdjacentHTML("beforebegin", participantTemplate(participantCount));
}

/************************************************
 * TOTAL FEES
 ***********************************************/
function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements];

  return feeElements.reduce((total, el) => {
    return total + Number(el.value);
  }, 0);
}

/************************************************
 * SUCCESS TEMPLATE
 ***********************************************/
function successTemplate(info) {
  return `
    <p>Thank you <strong>${info.adult}</strong> for registering!</p>
    <p>You have registered <strong>${info.count}</strong> participant(s).</p>
    <p>Total fees due: <strong>$${info.total}</strong></p>
  `;
}

/************************************************
 * SUBMIT HANDLER
 ***********************************************/
function submitForm(event) {
  event.preventDefault();

  const count = participantCount;
  const adult = document.querySelector("#adult_name").value;
  const total = totalFees();

  const form = document.querySelector("form");
  form.style.display = "none";

  const summary = document.querySelector("#summary");
  summary.innerHTML = successTemplate({ adult, count, total });
  summary.style.display = "block";
}

/************************************************
 * INIT
 ***********************************************/
document.addEventListener("DOMContentLoaded", () => {

  document
    .querySelector("#addParticipant")
    .addEventListener("click", addParticipant);

  document
    .querySelector("form")
    .addEventListener("submit", submitForm);
});