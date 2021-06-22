const correctAnswers = ["B", "B", "A", "A"];
const form = document.querySelector(".quizz-form");

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
  console.log(score);
});
