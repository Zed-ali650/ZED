
function checkAnswer(button) {
    const correctAnswer = "Joyful";
    const result = document.getElementById("result");

    if (button.innerText === correctAnswer) {
        result.textContent = "Correct!";
        result.style.color = "green";
    } else {
        result.textContent = "Wrong! Try again.";
        result.style.color = "red";
    }
}
