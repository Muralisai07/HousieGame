let availableNumbers = [];
let history = [];

const currentNumber = document.getElementById('current-number');
const generateBtn = document.getElementById('generate-btn');
const resetBtn = document.getElementById('reset-btn');
const historyBtn = document.getElementById('history-btn');
const historySection = document.getElementById('history-section');
const numbersList = document.getElementById('numbers-list');

// Initialize the game
function initGame() {
    availableNumbers = Array.from({ length: 90 }, (_, i) => i + 1);
    history = [];
    currentNumber.textContent = "--";
    numbersList.innerHTML = "";
    generateBtn.disabled = false;
}

function generateNumber() {
    if (availableNumbers.length === 0) {
        alert("All 90 numbers have been generated!");
        generateBtn.disabled = true;
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    const num = availableNumbers.splice(randomIndex, 1)[0];
    history.push(num);

    currentNumber.textContent = num;
    displayHistory();
}

function resetGame() {
    if (confirm("Are you sure you want to reset the game?")) {
        initGame();
        historySection.style.display = "none";
    }
}

function displayHistory() {
    numbersList.innerHTML = "";
    history.forEach(n => {
        const span = document.createElement("span");
        span.textContent = n;
        span.classList.add("num-box");
        numbersList.appendChild(span);
    });
}

generateBtn.addEventListener("click", generateNumber);
resetBtn.addEventListener("click", resetGame);
historyBtn.addEventListener("click", () => {
    historySection.style.display =
        historySection.style.display === "none" ? "block" : "none";
});

// Start the game initially
initGame();
