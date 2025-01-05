const randomNumber = Math.floor(Math.random() * 100 + 1);

function checkGuess() {
    const guess = document.getElementById("guessInput").value;

    if (guess == randomNumber) {
        document.getElementById("result").innerText = `Верно! Вы угадали число ${randomNumber}`
    } else if (guess > randomNumber) {
        document.getElementById("result").innerText = `Много!`
    } else {
        document.getElementById("result").innerText = `Мало!`
    }
}