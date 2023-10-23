"use strict";
const numberToCount = document.getElementById("number");
const increaseButton = document.getElementById("increaseButton");
const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");
function increaseNumber(value) {
    if (numberToCount) {
        const currentNumber = parseInt(numberToCount.textContent || "0", 10);
        numberToCount.textContent = (currentNumber + value).toString();
    }
}
function decreaseNumber(value) {
    if (numberToCount) {
        const currentNumber = parseInt(numberToCount.textContent || "0", 10);
        numberToCount.textContent = (currentNumber - value).toString();
    }
}
function resetNumber(value) {
    if (numberToCount) {
        const currentNumber = parseInt(numberToCount.textContent || "0", 10);
        numberToCount.textContent = (0).toString();
    }
}
if (increaseButton) {
    increaseButton.addEventListener("click", () => {
        increaseNumber(1);
    });
}
if (decreaseButton) {
    decreaseButton.addEventListener("click", () => {
        decreaseNumber(1);
    });
}
if (resetButton) {
    resetButton.addEventListener("click", () => {
        resetNumber();
    });
}
