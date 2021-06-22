const correctAnswers = ["B", "B", "A", "A"];
const form = document.querySelector(".quizz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  let score = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  result.querySelector("span").textContent = `${score} %`;
  result.classList.remove("d-none"); // because the score is invisible before the submit,we need to delete the hiding class prop
});
